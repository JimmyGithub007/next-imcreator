"use client";
import { motion } from "framer-motion";

const Quotation = () => {
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
            <div className="text-lg">Admin / Quotation</div>
        </motion.header>
        <div className="flex flex-col gap-4 -mt-16">

        </div>
    </main>)
}

export default Quotation;