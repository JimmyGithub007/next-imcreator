"use client";

import { ChangeEvent, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";

import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { addDoc, collection } from "firebase/firestore";
import { db, sdb } from "@/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import { CgSpinner } from "react-icons/cg";

type quotationProps = {
    name: string,
    email: string,
    contactNo: string,
    printingMethodId: number,
    printingPurposeId: number,
    printingAreaId: number,
    designCreationMethodId: number,
    quantity: number,
    additionalRequest: string | null,
    leftChestImageUrl: string | null,
    rightChestImageUrl: string | null,
    frontImageUrl: string | null,
    backImageUrl: string | null,
    backNeckImageUrl: string | null,
}

const printingAreas = [
    { id: 1, label: "Front", src: "front" },
    { id: 2, label: "Back", src: "back" },
    { id: 3, label: "Left chest", src: "leftchest" },
    { id: 4, label: "Right chest", src: "rightchest" },
    { id: 5, label: "Back neck", src: "backneck" },
    { id: 6, label: "Front & back", src: "front-back" },
    { id: 7, label: "Left chest & back", src: "leftchest-back" },
    { id: 8, label: "Right chest & back", src: "rightchest-back" },
    { id: 9, label: "Both side of chest", src: "bothchest" },
    { id: 10, label: "Left chest & back neck", src: "leftchest-backneck" },
    { id: 11, label: "Right chest & back neck", src: "rightchest-backneck" },
    { id: 12, label: "Both side of Chest & Back", src: "bothchest-back" },
    { id: 13, label: "Both side of Chest & Back Neck", src: "bothchest-backneck" }
];

const Quotation = () => {
    const { scrollYProgress } = useScroll();
    const router = useRouter();

    const leftChestImageUpload = useRef<HTMLInputElement>(null);
    const rightChestImageUpload = useRef<HTMLInputElement>(null);
    const frontImageUpload = useRef<HTMLInputElement>(null);
    const backImageUpload = useRef<HTMLInputElement>(null);
    const backNeckImageUpload = useRef<HTMLInputElement>(null);

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [printingAreaId, setPrintingAreaId] = useState<string | number>(1);
    const [designCreationMethodId, setDesignCreationMethodId] = useState<string | number>(1);

    const [leftChestImageFile, setLeftChestImageFile] = useState<File | null>(null);
    const [rightChestImageFile, setRightChestImageFile] = useState<File | null>(null);
    const [frontImageFile, setFrontImageFile] = useState<File | null>(null);
    const [backImageFile, setBackImageFile] = useState<File | null>(null);
    const [backNeckImageFile, setBackNeckImageFile] = useState<File | null>(null);

    const { register, handleSubmit, formState: { errors }, reset, control, getValues, setError, clearErrors } = useForm<quotationProps>();

    const onUploadImage = (areaId: number) => {
        switch (areaId) {
            case 1:
                if (leftChestImageUpload.current) leftChestImageUpload.current.click();
                break;
            case 2:
                if (rightChestImageUpload.current) rightChestImageUpload.current.click();
                break;
            case 3:
                if (frontImageUpload.current) frontImageUpload.current.click();
                break;
            case 4:
                if (backImageUpload.current) backImageUpload.current.click();
                break;
            default:
                if (backNeckImageUpload.current) backNeckImageUpload.current.click();
        }
    }

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                //setSelectedImage(reader.result as string);
                //setImageFile(file);
                switch (e.target.id) {
                    case "leftchest":
                        setLeftChestImageFile(file);
                        clearErrors("leftChestImageUrl");
                        break;
                    case "rightchest":
                        setRightChestImageFile(file);
                        clearErrors("rightChestImageUrl");
                        break;
                    case "front":
                        setFrontImageFile(file);
                        clearErrors("frontImageUrl");
                        break;
                    case "back":
                        setBackImageFile(file);
                        clearErrors("backImageUrl");
                        break;
                    default:
                        setBackNeckImageFile(file);
                        clearErrors("backNeckImageUrl");
                }
            };
            reader.readAsDataURL(file);
        }
    }

    const uploadImage = async (file: File | null, path: string): Promise<string | null> => {
        if (!file) return null;
        const storageRef = ref(sdb, path);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
    };

    const onSubmit: SubmitHandler<quotationProps> = async (data) => {
        if(isSubmitting) return;
        setIsSubmitting(true);
        try {
            let leftChestImageUrl = null, rightChestImageUrl = null, frontImageUrl = null,
                backImageUrl = null, backNeckImageUrl = null;
            if (designCreationMethodId == 2) {
                if (printingAreaId == 3 || printingAreaId == 7 || printingAreaId == 9 || printingAreaId == 10 || printingAreaId == 12 || printingAreaId == 13) {
                    if (leftChestImageFile) {
                        let type = leftChestImageFile.type;
                        type = type.replace("image/", "");
                        type = type.replace("jpeg", "jpg");
                        leftChestImageUrl = await uploadImage(leftChestImageFile, `quotations/leftChest${Date.now()}.${type}`);
                    } else {
                        setError('leftChestImageUrl', { type: 'custom', message: 'Left chest image is required' });
                    }
                }

                if (printingAreaId == 4 || printingAreaId == 8 || printingAreaId == 9 || printingAreaId == 11 || printingAreaId == 12 || printingAreaId == 13) {
                    if (rightChestImageFile) {
                        let type = rightChestImageFile.type;
                        type = type.replace("image/", "");
                        type = type.replace("jpeg", "jpg");
                        rightChestImageUrl = await uploadImage(rightChestImageFile, `quotations/rightChest${Date.now()}.${type}`);
                    } else {
                        setError('rightChestImageUrl', { type: 'custom', message: 'Right chest image is required' });
                    }
                }

                if (printingAreaId == 1 || printingAreaId == 6) {
                    if (frontImageFile) {
                        let type = frontImageFile.type;
                        type = type.replace("image/", "");
                        type = type.replace("jpeg", "jpg");
                        frontImageUrl = await uploadImage(frontImageFile, `quotations/front${Date.now()}.${type}`);
                    } else {
                        setError('frontImageUrl', { type: 'custom', message: 'front image is required' });
                    }
                }

                if (printingAreaId == 2 || printingAreaId == 6 || printingAreaId == 7 || printingAreaId == 8 || printingAreaId == 12) {
                    if (backImageFile) {
                        let type = backImageFile.type;
                        type = type.replace("image/", "");
                        type = type.replace("jpeg", "jpg");
                        backImageUrl = await uploadImage(backImageFile, `quotations/back${Date.now()}.${type}`);
                    } else {
                        setError('backImageUrl', { type: 'custom', message: 'Back image is required' });
                    }
                }

                if (printingAreaId == 5 || printingAreaId == 10 || printingAreaId == 11 || printingAreaId == 13) {
                    if (backNeckImageFile) {
                        let type = backNeckImageFile.type;
                        type = type.replace("image/", "");
                        type = type.replace("jpeg", "jpg");
                        backNeckImageUrl = await uploadImage(backNeckImageFile, `quotations/backNeck${Date.now()}.${type}`);
                    } else {
                        setError('backNeckImageUrl', { type: 'custom', message: 'Back neck image is required' });
                    }
                }
            }

            const docRef = await addDoc(collection(db, "quotations"), {
                name: data.name,
                email: data.email,
                contactNo: data.contactNo,
                printingMethodId: data.printingMethodId,
                printingPurposeId: data.printingPurposeId,
                printingAreaId: data.printingAreaId,
                designCreationMethodId: data.designCreationMethodId,
                quantity: Number(data.quantity),
                additionalRequest: data.additionalRequest,
                statusId: 1,
                leftChestImageUrl: leftChestImageUrl || "",
                rightChestImageUrl: rightChestImageUrl || "",
                frontImageUrl: frontImageUrl || "",
                backImageUrl: backImageUrl || "",
                backNeckImageUrl: backNeckImageUrl || "",
            });

            router.push(`/quotation/${docRef.id}`);
        } catch (error) {
            console.log(error)
        }
    }

    return (<motion.div
        initial={{
            opacity: 0,
            y: 100,
        }}
        animate={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            }
        }}
        className="flex flex-col gap-4 items-center justify-center min-h-screen py-8 w-screen">
        <motion.div
            className="bg-blue-500 fixed h-4 left-0 origin-left right-0 top-0"
            style={{ scaleX: scrollYProgress }}
        />
        <h1 className="text-2xl">Request for quote</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-[400px]">
            <div>
                <h1>Select color</h1>
                <div className="flex flex-wrap gap-2">
                    {
                        ["bg-white", "bg-[#242626]", "bg-[#9eb1bb]", "bg-[#3c4647]", "bg-[#1f7aba]", "bg-[#fd3174]", "bg-[#ffc342]", "bg-[#36ab50]"].map((value, key) => (
                            <button key={key} type="button" className={`${value} rounded-sm h-8 w-8`}></button>
                        ))
                    }
                </div>
            </div>
            <TextField label="Name"
                error={!!errors.name} helperText={errors.name?.message}
                {...register("name",
                    { required: "Name is required", })
                }
            />
            <TextField label="Email"
                error={!!errors.email} helperText={errors.email?.message}
                {...register("email",
                    {
                        required: "Email is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please enter email format",
                        },
                    })
                }

            />
            <TextField label="Contact no."
                error={!!errors.contactNo} helperText={errors.contactNo?.message}
                {...register("contactNo",
                    { required: "Contact no. is required", })
                }
            />
            <Controller
                name="printingMethodId"
                control={control}
                rules={{
                    required: "Printing method is required",
                }}
                render={({ field, fieldState: { error } }) => (
                    <FormControl fullWidth error={!!error}>
                        <InputLabel id="printingMethodId">Select printing method</InputLabel>
                        <Select
                            {...field}
                            error={!!error}
                            labelId="printingMethodId"
                            label="Select printing method"
                        >
                            <MenuItem value={1}>Silkscreen printing</MenuItem>
                            <MenuItem value={2}>Heatpress printing (DTF)</MenuItem>
                            <MenuItem value={3}>Embroidery</MenuItem>
                            <MenuItem value={4}>Sublimation printing</MenuItem>
                        </Select>
                        {
                            !!error && <FormHelperText >{errors.printingMethodId?.message}</FormHelperText>
                        }
                    </FormControl>
                )}
            />
            <Controller
                name="printingPurposeId"
                control={control}
                rules={{
                    required: "Printing purpose is required",
                }}
                render={({ field, fieldState: { error } }) => (
                    <FormControl fullWidth error={!!error}>
                        <InputLabel id="printingPurposeId">Select printing purpose</InputLabel>
                        <Select
                            {...field}
                            error={!!error}
                            labelId="printingPurposeId"
                            label="Select printing purpose"
                        >
                            <MenuItem value={1}>Company uniform</MenuItem>
                            <MenuItem value={2}>Class uniform</MenuItem>
                            <MenuItem value={3}>Team building uniform</MenuItem>
                            <MenuItem value={4}>Event uniform</MenuItem>
                            <MenuItem value={5}>Brand uniform</MenuItem>
                        </Select>
                        {
                            !!error && <FormHelperText>{errors.printingPurposeId?.message}</FormHelperText>
                        }
                    </FormControl>
                )}
            />
            <Controller
                name="printingAreaId"
                control={control}
                rules={{
                    required: "Printing area is required",
                }}
                render={({ field, fieldState: { error } }) => (
                    <FormControl fullWidth error={!!error}>
                        <InputLabel id="printingAreaId">Select printing area</InputLabel>
                        <Select
                            {...field}
                            error={!!error}
                            labelId="printingAreaId"
                            label="Select printing area"
                            onChange={(e) => {
                                field.onChange(e);
                                setPrintingAreaId(e.target.value)
                                clearErrors();
                            }}
                        >
                            {
                                printingAreas.map((value, key) => (
                                    <MenuItem key={key} value={value.id}>
                                        <div className="flex gap-2 items-center w-full">
                                            <Image alt="" width={100} height={100} src={`/assets/printing_area/${value.src}.svg`} />
                                            <span className="font-bold text-sm">{value.label}</span>
                                        </div>
                                    </MenuItem>
                                ))
                            }
                        </Select>
                        {
                            !!error && <FormHelperText>{errors.printingAreaId?.message}</FormHelperText>
                        }
                    </FormControl>
                )}
            />
            <Controller
                name="designCreationMethodId"
                control={control}
                rules={{
                    required: "Design creation method is required",
                }}
                render={({ field, fieldState: { error } }) => (
                    <FormControl fullWidth error={!!error}>
                        <InputLabel id="designCreationMethodId">Select design creation method</InputLabel>
                        <Select
                            {...field}
                            error={!!error}
                            labelId="designCreationMethodId"
                            label="Select design creation method"
                            onChange={(e) => {
                                field.onChange(e);
                                setDesignCreationMethodId(e.target.value);
                                clearErrors();
                            }}
                        >
                            <MenuItem value={1}>Let us(ImCreator.) or adjust your artwork</MenuItem>
                            <MenuItem value={2}>Upload your own design</MenuItem>
                        </Select>
                        {
                            !!error && <FormHelperText>{errors.designCreationMethodId?.message}</FormHelperText>
                        }
                    </FormControl>
                )}
            />
            {
                designCreationMethodId == 2 && <div>
                    <h1>Please upload your own design image for the printing area which you have selected.</h1>
                    <span className="text-xs">Supported file formats: .png, .jpg</span>
                    <div className="flex flex-col gap-4">
                        {(printingAreaId == 3 || printingAreaId == 7 || printingAreaId == 9 || printingAreaId == 10 || printingAreaId == 12 || printingAreaId == 13) &&
                            <div className="flex flex-col items-center">
                                <button type="button" onClick={() => onUploadImage(1)} className="border-4 border-dotted bg-white py-3 px-6 rounded-lg text-blue-950 w-full">Upload left chest image</button>
                                {leftChestImageFile && <div className="flex items-center text-slate-400"><span className="text-sm">{leftChestImageFile.name}</span><button onClick={() => { setLeftChestImageFile(null) }} type="button"><MdDelete className="duration-300 hover:bg-slate-100 p-1 rounded-full text-red-800 text-2xl" /></button></div>}
                                {!!errors.leftChestImageUrl && <span className="text-sm text-red-700">*{errors.leftChestImageUrl?.message}</span>}
                            </div>
                        }
                        {(printingAreaId == 4 || printingAreaId == 8 || printingAreaId == 9 || printingAreaId == 11 || printingAreaId == 12 || printingAreaId == 13) &&
                            <div className="flex flex-col items-center">
                                <button type="button" onClick={() => onUploadImage(2)} className="border-4 border-dotted bg-white py-3 px-6 rounded-lg text-blue-950 w-full">Upload right chest image</button>
                                {rightChestImageFile && <div className="flex items-center text-slate-400"><span className="text-sm">{rightChestImageFile.name}</span><button onClick={() => { setRightChestImageFile(null) }} type="button"><MdDelete className="duration-300 hover:bg-slate-100 p-1 rounded-full text-red-800 text-2xl" /></button></div>}
                                {!!errors.rightChestImageUrl && <span className="text-sm text-red-700">*{errors.rightChestImageUrl?.message}</span>}
                            </div>
                        }
                        {(printingAreaId == 1 || printingAreaId == 6) &&
                            <div className="flex flex-col items-center">
                                <button type="button" onClick={() => onUploadImage(3)} className="border-4 border-dotted bg-white py-3 px-6 rounded-lg text-blue-950 w-full">Upload front image</button>
                                {frontImageFile && <div className="flex items-center text-slate-400"><span className="text-sm">{frontImageFile.name}</span><button onClick={() => { setFrontImageFile(null) }} type="button"><MdDelete className="duration-300 hover:bg-slate-100 p-1 rounded-full text-red-800 text-2xl" /></button></div>}
                                {!!errors.frontImageUrl && <span className="text-sm text-red-700">*{errors.frontImageUrl?.message}</span>}
                            </div>
                        }
                        {(printingAreaId == 2 || printingAreaId == 6 || printingAreaId == 7 || printingAreaId == 8 || printingAreaId == 12) &&
                            <div className="flex flex-col items-center">
                                <button type="button" onClick={() => onUploadImage(4)} className="border-4 border-dotted bg-white py-3 px-6 rounded-lg text-blue-950 w-full">Upload back image</button>
                                {backImageFile && <div className="flex items-center text-slate-400"><span className="text-sm">{backImageFile.name}</span><button onClick={() => { setBackImageFile(null) }} type="button"><MdDelete className="duration-300 hover:bg-slate-100 p-1 rounded-full text-red-800 text-2xl" /></button></div>}
                                {!!errors.backImageUrl && <span className="text-sm text-red-700">*{errors.backImageUrl?.message}</span>}
                            </div>
                        }
                        {(printingAreaId == 5 || printingAreaId == 10 || printingAreaId == 11 || printingAreaId == 13) &&
                            <div className="flex flex-col items-center">
                                <button type="button" onClick={() => onUploadImage(5)} className="border-4 border-dotted bg-white py-3 px-6 rounded-lg text-blue-950 w-full">Upload back neck image</button>
                                {backNeckImageFile && <div className="flex items-center text-slate-400"><span className="text-sm">{backNeckImageFile.name}</span><button onClick={() => { setBackNeckImageFile(null) }} type="button"><MdDelete className="duration-300 hover:bg-slate-100 p-1 rounded-full text-red-800 text-2xl" /></button></div>}
                                {!!errors.backNeckImageUrl && <span className="text-sm text-red-700">*{errors.backNeckImageUrl?.message}</span>}
                            </div>
                        }
                        <input accept="image/png, image/jpeg" ref={leftChestImageUpload} onChange={onFileChange} id="leftchest" type="file" hidden />
                        <input accept="image/png, image/jpeg" ref={rightChestImageUpload} onChange={onFileChange} id="rightchest" type="file" hidden />
                        <input accept="image/png, image/jpeg" ref={frontImageUpload} onChange={onFileChange} id="front" type="file" hidden />
                        <input accept="image/png, image/jpeg" ref={backImageUpload} onChange={onFileChange} id="back" type="file" hidden />
                        <input accept="image/png, image/jpeg" ref={backNeckImageUpload} onChange={onFileChange} id="backneck" type="file" hidden />
                    </div>
                </div>
            }
            <TextField
                label="Quantity"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    inputProps: { min: 1 }
                }}
                error={!!errors.quantity} helperText={errors.quantity?.message}
                {...register("quantity",
                    { required: "Quantity is required", })
                }
            />
            <textarea
                className="p-2 border-[1.5px] border-[#d5d5d5] rounded-[4px] resize-none h-40"
                placeholder="Additional request (example: if your quantity put 20, then can write like L size x 10, M size x 10)"
                {
                    ...register("additionalRequest")
                }
            />
            <button type="submit" className={`${isSubmitting ? "cursor-not-allowed bg-blue-950/50" : "bg-blue-950 hover:bg-blue-950/90"} duration-300 flex gap-2 items-center justify-center py-2 rounded-lg shadow-md shadow-blue-950/40 text-white w-full`}>
                { isSubmitting && <CgSpinner className="animate-spin text-2xl" /> }Submit your request
            </button>
        </form>
    </motion.div>)
}

export default Quotation;