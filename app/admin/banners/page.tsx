"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDragIndicator, MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { motion } from "framer-motion";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { db, sdb } from "@/firebase/config";
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import Shell from "@/components/Shell";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setPageLoading } from "@/store/slice/floorSlice";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import withAdminPageHOC from "@/hoc/withAdminPageHOC";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Loading } from "@/components";

type banners = {
    id: string, // add id to identify document in Firestore
    sortingId: number,
    title: string,
    statusId: number,
    imageUrl: string,
    dateCreated: string,
}

const statusArr = [
    { id: 0, name: "Draft", color: "bg-slate-300" },
    { id: 1, name: "Active", color: "bg-emerald-400" },
];

const Dot = ({ colorClass }: { colorClass: string }) => {
    return <span className="relative flex h-3 w-3">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colorClass} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-3 w-3 ${colorClass}`}></span>
    </span>
}

type Inputs = {
    title: string,
    statusId: number,
    gallery: "",
}

const Banners = () => {
    const dispatch = useDispatch();
    const { pageLoading } = useSelector((state: RootState) => state.floor);
    const [rows, setRows] = useState<banners[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [editId, setEditId] = useState<string | null>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
    const uploadRef = useRef<HTMLInputElement>(null);

    const { register, handleSubmit, formState: { errors }, setError, reset, control } = useForm<Inputs>({
        defaultValues: {
            title: "",
            statusId: 1,
        }
    });

    const onDone = () => {
        setOpen(false);
        reset({
            title: "",
            statusId: 1,
        });
        setSelectedImage(null);
        setImageFile(null);
        setEditId(null);
        getBanners();
    }

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (!editId && !imageFile) {
            setError("gallery", { type: "manual", message: "Please select an image." });
            return;
        }

        try {
            if (imageFile) {
                const imageRef = ref(sdb, `banners/${imageFile.name}`);
                const uploadTask = uploadBytesResumable(imageRef, imageFile);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        // Can use this to show progress if needed
                    },
                    (error) => {
                        console.error(error);
                    },
                    async () => {
                        const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                        if (editId) {
                            // Update existing banner
                            const bannerDoc = doc(db, "banners", editId);
                            await updateDoc(bannerDoc, {
                                title: data.title,
                                statusId: data.statusId,
                                imageUrl: imageUrl,
                            });
                        } else {
                            // Add new banner
                            await addDoc(collection(db, "banners"), {
                                title: data.title,
                                statusId: data.statusId,
                                imageUrl: imageUrl,
                                sortingId: rows.length, // New item at the end
                                dateCreated: new Date()
                            });
                        }
                        onDone();
                    }
                );
            } else if (!imageFile && editId) {
                const bannerDoc = doc(db, "banners", editId);
                await updateDoc(bannerDoc, {
                    title: data.title,
                    statusId: data.statusId,
                });
                onDone();
            }
        } catch (error) {
            console.error(error);
        } finally {
            //dispatch(setPageLoading(false));
        }
    }

    const onEdit = (row: banners) => {
        setEditId(row.id);
        setSelectedImage(row.imageUrl);
        reset({
            title: row.title,
            statusId: row.statusId,
        })
        setOpen(true);
    }

    const handleDeleteClick = (id: string) => {
        setDeleteId(id);
        setDeleteDialogOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (deleteId) {
            const bannerDoc = doc(db, "banners", deleteId);
            await deleteDoc(bannerDoc);
            setRows(rows.filter((row) => row.id !== deleteId));
            setDeleteDialogOpen(false);
            setDeleteId(null);
        }
    };

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
                setImageFile(file);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleOnDragEnd = async (result: any) => {
        if (!result.destination) return;
        const items = Array.from(rows);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        // Update the sortingId for all items
        const updatedRows = items.map((item, index) => ({ ...item, sortingId: index }));
        setRows(updatedRows);

        // Update Firestore with new sortingIds
        for (const item of updatedRows) {
            const bannerDoc = doc(db, "banners", item.id);
            await updateDoc(bannerDoc, { sortingId: item.sortingId });
        }
    };

    const getBanners = async () => {
        const bannerQuery = await getDocs(query(collection(db, "banners"), orderBy("sortingId"))); // updated
        const banners = bannerQuery.docs.map(async (doc) => {
            const b = doc.data();
            //const imgRef = ref(sdb, b.gallery);
            //const imgURL = await getDownloadURL(imgRef);
            return {
                id: doc.id,
                sortingId: b.sortingId,
                title: b.title,
                statusId: b.statusId,
                imageUrl: b.imageUrl,
                dateCreated: b.dateCreated?.toDate().toDateString(),
            };
        });

        const resolvedBanners = await Promise.all(banners);
        setRows(resolvedBanners);
        dispatch(setPageLoading(false));
    };

    useEffect(() => {
        getBanners();
    }, [])

    if(pageLoading) return <div className="flex items-center justify-center min-h-[calc(100vh-48px)] w-full"><Loading /></div>;

    return (<main className={`flex flex-col items-center p-4 min-h-[calc(100vh-48px)] w-full`}>
        <motion.header 
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 1
                }
            }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-40 px-8 pt-6 rounded-3xl shadow-md text-white w-full">
            <div className="flex items-center justify-between">
                <div className="text-lg">Admin / Banners</div>
                <div className="flex flex-col items-end">
                    <button onClick={() => {
                        reset({
                            title: "", statusId: 1
                        });
                        setOpen(true);
                    }} className="bg-white duration-300 flex items-center justify-center rounded-full shadow-md h-14 text-blue-950 w-14 hover:bg-slate-100"><FaPlus /></button>
                </div>
            </div>
        </motion.header>
        <div className="flex flex-col gap-4 -mt-16">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        bounce: 0.4,
                        delay: 0.5,
                        duration: 1.2,
                    }
                }}
                className="bg-slate-50 border-8 border-slate-100 rounded-2xl text-white">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ 'th': { borderColor: "#172554" } }}>
                                <TableCell className="font-bold text-blue-950">Sorting</TableCell>
                                <TableCell className="font-bold text-blue-950" align="right">Title</TableCell>
                                <TableCell className="font-bold text-blue-950" align="right">Gallery</TableCell>
                                <TableCell className="font-bold text-blue-950" align="right">Status</TableCell>
                                <TableCell className="font-bold text-blue-950" align="right">Date Created</TableCell>
                                <TableCell className="font-bold text-blue-950" align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="banners" type="group">
                                {(provided) => (
                                    <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                                        {rows.map((row, index) =>
                                            <Draggable key={index} draggableId={index.toString()} index={index}>
                                                {(provided) => (
                                                    <TableRow ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} sx={{ 'td, th': { borderColor: "#172554" }, '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell className="text-blue-950" component="th" scope="row"><div className="duration-300 flex items-center justify-center cursor-move hover:bg-slate-100 rounded-full h-8 w-8 text-xl"><MdDragIndicator /></div></TableCell>
                                                        <TableCell className="text-blue-950" align="right">{row.title}</TableCell>
                                                        <TableCell className="text-blue-950" align="right"><Image className="rounded-md shadow-md" alt="" height={50} width={50} src={row.imageUrl} /></TableCell>
                                                        <TableCell className="text-blue-950" align="right"><div className="flex gap-2 items-center">{statusArr.find(e => e.id === row.statusId)?.name} <Dot colorClass={statusArr.find(e => e.id === row.statusId)?.color || "bg-slate-150"} /></div></TableCell>
                                                        <TableCell className="text-blue-950" align="right">{row.dateCreated}</TableCell>
                                                        <TableCell className="text-blue-950" align="right">
                                                            <div className="flex gap-2 text-xl">
                                                                <button onClick={() => onEdit(row) } className="p-2 rounded-full hover:bg-slate-100"><MdOutlineEdit /></button>
                                                                <button onClick={() => handleDeleteClick(row.id)} className="p-2 rounded-full hover:bg-slate-100"><MdOutlineDelete /></button>
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                )}
                                            </Draggable>
                                        )}
                                        {provided.placeholder}
                                    </TableBody>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </Table>
                </TableContainer>
            </motion.div>
        </div>
        <Drawer
            anchor="bottom"
            open={open}
        >
            <div className="flex flex-col gap-6 items-center p-4">
                <h1>{editId ? "Edit" : "Create New"} Banner</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-4 w-[300px]">
                    <div id="uploadImageBox" onClick={() => {
                        if (uploadRef.current) {
                            uploadRef.current.click();
                        }
                    }} className="bg-slate-100 border-2 border-dashed cursor-pointer flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-sm w-[200px]">
                        {selectedImage ? (
                            <Image src={selectedImage} alt="Selected Image" width={200} height={200} className="rounded-2xl" />
                        ) : (
                            <>
                                <IoCloudUploadOutline className="text-5xl text-slate-200" />
                                <div className="text-center">Please upload banner image</div>
                            </>
                        )}
                        <input accept="image/*" ref={uploadRef} onChange={onFileChange} type="file" hidden />
                    </div>
                    {errors.gallery && <span className="text-red-600">{errors.gallery.message}</span>}
                    <TextField className="w-full" label="Title" error={!!errors.title} helperText={errors.title?.message}
                        {...register("title",
                            { required: "Title is required", })
                        }
                    />
                    <Controller
                        name="statusId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                className="w-full"
                            >
                                <MenuItem value={1}>Active</MenuItem>
                                <MenuItem value={0}>Draft</MenuItem>
                            </Select>
                        )}
                    />
                    <div className="flex gap-4 w-full">
                        <button type="submit" className="bg-blue-950 duration-300 px-6 py-2 rounded-lg shadow-md shadow-blue-950/40 text-white w-full hover:bg-blue-950/90">Save</button>
                        <button type="button" onClick={() => setOpen(false)} className="bg-slate-100 duration-300 px-6 py-2 rounded-lg shadow-md text-blue-950 w-full hover:bg-slate-100/50">Close</button>
                    </div>
                </form>
            </div>
        </Drawer>
        <Dialog
            open={deleteDialogOpen}
            onClose={() => setDeleteDialogOpen(false)}
        >
            <DialogTitle>{"Confirm Delete"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this banner?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleConfirmDelete} color="secondary" autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    </main>)
}

export default Banners;