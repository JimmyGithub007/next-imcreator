"use client";

import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6"
import { MdOutlineMailOutline } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form"
import { motion } from "framer-motion";
import { Alert, Snackbar, TextField } from "@mui/material"
import { auth } from "@/firebase/config";
import { EmailAuthProvider, onAuthStateChanged, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { useRouter } from "next/navigation";

import Shell from "@/components/Shell"
import { useDispatch } from "react-redux";
import { setPageLoading } from "@/store/slice/floorSlice";
import Image from "next/image";
import withAdminPageHOC from "@/hoc/withAdminPageHOC";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Loading } from "@/components";

type Inputs = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const Profile = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { pageLoading } = useSelector((state: RootState) => state.floor);
    const [message, setMessage] = useState<string>("");
    const [user, setUser] = useState<{ uid: number, email: string }>({ uid: 0, email: "" });
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (data.newPassword !== data.confirmPassword) {
            setError('confirmPassword', { type: 'custom', message: 'New password not same as confirm password' });
            return;
        }

        try {
            const u = auth.currentUser;
            if (u && u.email) {
                const credential = EmailAuthProvider.credential(u.email, data.currentPassword);
                await reauthenticateWithCredential(u, credential);
                await updatePassword(u, data.newPassword);
                setMessage("Your password updated successfully");
                reset({
                    currentPassword: "", newPassword: "", confirmPassword: ""
                });
            }
        } catch (error) {
            console.error("Error updating password", error);
            setError('currentPassword', { type: 'custom', message: 'Current password not correctly' });
        }
    }

    useEffect(() => {
        const handleAuthStateChanged = async (user: any) => {
            if (user) {
                console.log(user)
                setUser({
                    uid: user.uid,
                    email: user.email
                });
                dispatch(setPageLoading(false));
            } else {
                router.push("/admin/login");
            }
        }
        const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);
        return () => {
            unsubscribe();
        };
    }, [])

    if(pageLoading) return <div className="flex items-center justify-center min-h-[calc(100vh-48px)] w-full"><Loading /></div>;

    return (<main className={`flex flex-col items-center p-4 min-h-[calc(100vh-48px)] w-full`}>
        <motion.header
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500  flex h-40 items-center justify-between px-8 rounded-3xl shadow-md text-white w-full">
            <div className="text-lg">Admin / Profile</div>
        </motion.header>
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
            className="border-8 border-slate-100 bg-white p-4 rounded-2xl -mt-16 w-[400px]">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="text-xl">HI, you can try update your current password below</div>
                <div className="">Email: {user.email}</div>
                <TextField className="w-full" label="Current Password" type="password" error={!!errors.currentPassword} helperText={errors.currentPassword?.message}
                    {...register("currentPassword",
                        {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 8 characters long",
                            },
                        }
                    )} />
                <TextField className="w-full" label="New Password" type="password" error={!!errors.newPassword} helperText={errors.newPassword?.message}
                    {...register("newPassword",
                        {
                            required: "New Password is required",
                            minLength: {
                                value: 6,
                                message: "New Password must be at least 8 characters long",
                            },
                        }
                    )} />
                <TextField className="w-full" label="Confirm Password" type="password" error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message}
                    {...register("confirmPassword",
                        {
                            required: "Confirm Password is required",
                            minLength: {
                                value: 6,
                                message: "Confirm Password must be at least 8 characters long",
                            },
                        }
                    )} />
                <button type="submit" className="bg-blue-950 duration-200 font-bold flex gap-2 items-center justify-center px-8 py-2 rounded-lg shadow-md text-white focus:ring-4 focus:outline-none focus:ring-blue-950/40 hover:bg-blue-950/90">Update password</button>
            </form>
        </motion.div>
        <Snackbar
            autoHideDuration={5000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={message !== "" ? true : false}
            onClose={() => setMessage("")}
        >
            <Alert
                onClose={() => setMessage("")}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >{message}</Alert>
        </Snackbar>
    </main>)
}

export default Profile;