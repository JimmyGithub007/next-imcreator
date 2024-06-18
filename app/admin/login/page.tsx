"use client";

import Image from "next/image";
import { auth, db } from "../../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { TextField } from "@mui/material";

import { useForm, SubmitHandler } from "react-hook-form";
import { FaUserLock } from "react-icons/fa";
import { useRouter } from "next/navigation";


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
            router.push("/admin/dashboard");
        } catch (error) {
            console.log(error)
        }
    }

    return (<div className="flex items-center justify-center h-screen w-screen">
        <div className="flex rounded-2xl overflow-hidden shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-100 items-center flex flex-col gap-4 px-8 py-12 w-80">
                <FaUserLock className="text-8xl text-slate-200" />
                <h1 className="text-blue-950 font-bold text-xl">IMCREATOR ADMIN PANEL</h1>
                <TextField className="w-full" label="Email Address" variant="filled" error={!!errors.email} helperText={errors.email?.message}
                    {...register("email",
                    {
                        required: "Email is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please enter email format",
                        },
                    },
                )} />
                <TextField className="w-full" label="Password" variant="filled" type="password" error={!!errors.password} helperText={errors.password?.message}
                    {...register("password",
                    {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters long",
                        },
                    }
                )} />
                <button type="submit" className="bg-blue-950 duration-200 font-bold flex gap-2 items-center justify-center px-4 py-2 rounded-3xl shadow-md text-white hover:text-blue-950 hover:bg-slate-50 active:bg-slate-100 active:shadow-sm w-full">LOGIN</button>
            </form>
            <div className="bg-blue-950 flex flex-col gap-4 items-center justify-center w-80">
                <Image className={`duration-300 rounded-2xl shadow-md`} alt="logo" width={100} height={100} src={"/assets/logo.jpg"} />
                <span className="font-bold text-white text-xl">Welcome to Imcreator</span>
                <span className="text-gray-500 text-xs">Imcreator 2024 All Rights Reserved ©</span>
            </div>
        </div>
    </div>)
}

export default Login;