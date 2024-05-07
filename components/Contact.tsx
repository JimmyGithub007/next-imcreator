import { motion } from "framer-motion"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaMapLocation, FaSquarePhone } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
    const contactWays = [
        { icon: <FaMapLocation className="bg-blue-950 rounded-xl p-1 text-white text-2xl sm:text-3xl shadow-xl" />, text: '5,Jalan Rosmerah 2/5, Johor Bahru, Malaysia' },
        { icon: <FaSquarePhone className="bg-blue-950 rounded-xl p-1 text-white text-2xl sm:text-3xl shadow-xl" />, text: '+(60)16-755 5707' },
        { icon: <MdMail className="bg-blue-950 rounded-xl p-1 text-white text-2xl sm:text-3xl shadow-xl" />, text: 'sales@imcreator.asia' },
    ];

    return (<div id="floor4" className="bg-slate-100 font-bold flex flex-col gap-4 h-screen items-center justify-center sm:flex-row sm:gap-8 text-blue-950 pt-[64px]">
        <div className="sm:bg-slate-50 flex flex-col-reverse sm:flex-col gap-2 sm:gap-8 sm:h-full justify-center px-8">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
                <motion.h1
                    initial={{
                        opacity: 0,
                        x: -50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                        }
                    }}
                    className="text-center text-xl sm:text-5xl">如<br className="hidden sm:block" />何<br className="hidden sm:block" />找<br className="hidden sm:block" />到<br className="hidden sm:block" />我<br className="hidden sm:block" />们<br className="hidden sm:block" />?</motion.h1>
                <div className="flex flex-col gap-2 sm:gap-4">
                    {
                        contactWays.map((value, key) => {
                            return <motion.div
                                key={key}
                                initial={{
                                    opacity: 0,
                                    x: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.4,
                                        duration: 1,
                                        delay: key * 0.1
                                    }
                                }}
                                className="flex items-center gap-2 text-xs sm:text-md">
                                {value.icon}
                                <div className="w-[80%]">{value.text}</div>
                            </motion.div>
                        })
                    }
                </div>
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        type: "spring",
                        bounce: 0.4,
                        duration: 2,
                    }
                }}
                className="flex gap-8 justify-center text-xl sm:text-3xl">
                <a className="duration-200 hover:opacity-60" href="https://www.facebook.com/tshirtprintingJB/" target="_blank"><FaFacebookF /></a>
                <a className="duration-200 hover:opacity-60" href="https://www.instagram.com/tshirtprintingjb/" target="_blank"><FaInstagram /></a>
                <RiWhatsappFill className="cursor-pointer duration-200 hover:opacity-60" onClick={() => window.open("https://wa.me/60167555707", "_blank")} />
            </motion.div>
        </div>
        <div className="flex flex-col gap-1 sm:gap-8 w-full items-center justify-center">
            <div className="flex flex-col gap-3 sm:gap-6 w-full sm:w-[350px] px-8">
                <motion.h1
                    initial={{
                        opacity: 0,
                        x: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                        }
                    }}
                    className="text-md sm:text-xl text-center">
                    你也可以留下联系方式, 我们的人员很快便会与你联系
                </motion.h1>
                <motion.input
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
                            duration: 1,
                        }
                    }}
                    className="px-4 py-2 rounded-md shadow-md" placeholder="称呼方式"
                />
                <motion.input
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
                            duration: 1,
                            delay: 0.1,
                        }
                    }}
                    className="px-4 py-2 rounded-md shadow-md" placeholder="邮件地址"
                />
                <motion.input
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
                            duration: 1,
                            delay: 0.2,
                        }
                    }}
                    className="px-4 py-2 rounded-md shadow-md" placeholder="联系号码"
                />
                <motion.textarea
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
                            duration: 1,
                            delay: 0.3,
                        }
                    }}
                    className="px-4 py-2 rounded-md shadow-md h-[120px]" placeholder="告诉我们你的想法..."
                />
                <motion.button
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
                            duration: 1,
                            delay: 0.4,
                        }
                    }}
                    className="bg-blue-950 duration-200 flex gap-2 items-center justify-center px-4 py-2 rounded-md shadow-xl text-white hover:text-blue-950 hover:bg-slate-200 active:bg-slate-300 active:shadow-sm"
                >
                    <IoIosSend className="bg-white p-1 rounded-full text-blue-950 text-2xl" /> 发送信息
                </motion.button>
            </div>
            <span className="text-gray-500 text-xs">Jimmy Hoe 2024 All Rights Reserved ©</span>
        </div>
    </div>)
}

export default Contact;