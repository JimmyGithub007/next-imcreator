"use client";
import { motion } from "framer-motion";

const Dashboard = () => {
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
            className="bg-gradient-to-r from-cyan-500 to-blue-500  flex h-40 items-center justify-between px-8 rounded-3xl shadow-md text-white w-full">
            <div className="text-lg">Admin / Dashboard</div>
        </motion.header>
        <div className="grid grid-cols-3 -mt-16">

                <div className="bg-white border-8 border-slate-100 flex items-center rounded-3xl p-8">
                    <h1 className="text-2xl">Welcome Back, Jimmy</h1>
                </div>
                <div className="bg-black border-8 border-slate-100 flex flex-col items-center rounded-3xl p-8 text-white">
                    <div className="text-4xl">80</div>
                    Today&apos;s Page Viewer
                </div>
                <div className="bg-black border-8 border-slate-100 flex flex-col items-center rounded-3xl p-8 text-white">
                    <div className="text-4xl">80</div>
                    Today&apos;s Quotation
                </div>
                <div className="bg-black border-8 border-slate-100 col-span-3 flex flex-col items-center rounded-3xl p-8 text-white">

                </div>
                <div className="bg-black border-8 border-slate-100 col-span-3 flex flex-col items-center rounded-3xl p-8 text-white">

                </div>
        </div>
    </main>)
}

export default Dashboard;