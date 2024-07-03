"use client";

import { auth, db } from "../../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { TextField } from "@mui/material";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Monoton } from "next/font/google";
import { motion } from "framer-motion";
import moment, { duration } from "moment";
import Image from "next/image";
const monoton = Monoton({ subsets: ["latin"], weight: '400' });

type Inputs = {
    email: string
    password: string
}

const Login = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            router.push("/admin/banners");
        } catch (error) {
            console.log(error)
        }
    }

    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeString = moment(now).format('llll') //now.toLocaleTimeString();
            setCurrentTime(timeString);
        };

        const intervalId = setInterval(updateClock, 1000);
        updateClock(); // initial call to set the time immediately

        return () => clearInterval(intervalId);
    }, []);

    return (<motion.div
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        }}
        className="flex items-center justify-start w-screen relative overflow-hidden">
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: "url('/assets/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.6,
                zIndex: -1,
            }}
        >
        </div>
        <motion.div
            initial={{
                opacity: 0,
                y: 100,
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.5,
                    duration: 0.5,
                }
            }}
            className={`${monoton.className} absolute bottom-0 font-bold right-0 text-white text-6xl text-right`}>
            {currentTime}
        </motion.div>
        <motion.div
            initial={{
                opacity: 0,
                x: -100,
            }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.5,
                    duration: 0.5,
                }
            }}
            className="bg-white flex flex-col h-screen max-w-[400px] justify-center items-center relative shadow-sm shadow-black/40">
            <Image className={``} alt="logo" width={200} height={200} src={"/assets/logo.jpg"} />
            <div className="flex flex-col gap-2 px-8 sm:px-16">
                <span className="font-bold text-3xl">Welcome Back to ImCreator.</span>
                <h1 className="text-blue-950 font-bold text-xl">Admin Panel</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 px-8 sm:px-16 w-full">
                <div className="flex flex-col gap-2">
                    <TextField className="w-full" label="Email Address" variant="standard" error={!!errors.email} helperText={errors.email?.message}
                        {...register("email",
                            {
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Please enter email format",
                                },
                            },
                        )} />
                    <TextField className="w-full" label="Password" variant="standard" type="password" error={!!errors.password} helperText={errors.password?.message}
                        {...register("password",
                            {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long",
                                },
                            }
                        )} />
                </div>
                <button type="submit" className="bg-blue-950 duration-300 px-6 py-2 rounded-lg shadow-md shadow-blue-950/40 text-white w-full hover:bg-blue-950/90">LOGIN</button>
                <div className="text-gray-500 text-sm">Don&apos;t have an account? Try ask admin to help you for creating account.</div>
            </form>
            <div className="absolute bottom-4 text-center text-gray-300 text-sm w-full">Imcreator 2024 All Rights Reserved ©</div>
        </motion.div>
    </motion.div>)
}

export default Login;