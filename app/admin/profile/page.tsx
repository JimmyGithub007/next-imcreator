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

type Inputs = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const Profile = () => {
    const router = useRouter();
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
                setUser({
                    uid: user.uid,
                    email: user.email
                });
            } else {
                router.push("/admin/login");
            }
        }
        const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);
        return () => {
            unsubscribe();
        };
    }, [])

    return (<Shell>
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                }
            }}
            className="bg-slate-100 flex flex-col gap-4 items-center px-8 py-16 relative rounded-2xl shadow-md w-80">
            <FaUser className="absolute -top-12 bg-slate-200 rounded-xl p-2 shadow-md text-8xl text-slate-200 text-white" />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex flex-col items-center font-bold text-center"><MdOutlineMailOutline className="text-2xl" /> {user.email}</div>
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
                <button type="submit" className="bg-blue-950 duration-200 font-bold flex gap-2 items-center justify-center px-8 py-2 rounded-3xl shadow-md text-white">Change Your Password</button>
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
    </Shell>)
}

export default Profile;