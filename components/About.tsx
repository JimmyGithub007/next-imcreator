import Image from "next/image";
import { GrBottomCorner, GrTopCorner } from "react-icons/gr";

const About = () => {
    return (<div id="floor1" className="bg-slate-100 flex flex-col gap-8 h-screen items-center justify-center text-blue-950">
        <div className="flex gap-8 relative">
            <GrTopCorner className="absolute text-blue-950 text-9xl -left-12 -top-12" />
            <GrBottomCorner className="absolute text-blue-950 text-9xl -right-12 -bottom-12" />
            <div className="flex flex-col gap-4 w-[400px] font-bold">
                <h1 className="text-6xl">我们是谁?</h1>
                <div className="text-xl">我们是IMCREATOR,</div>
                <div className="text-xl">是全JB一站式衣服印制公司</div>
                <div className="text-xl">我们的工厂有自己生产布料，根据顾客的要求来设计&制作衣服。全JB唯一帮顾客“量身而做”，打造专属您的企业制服，出门决不会撞衣服 </div>
            </div>
            <div className="flex gap-2">
                <div className="flex flex-col gap-2 rotate-2">
                    <div className="overflow-hidden h-[150px] rounded-2xl shadow-2xl">
                        <Image alt="" width={300} height={300} src={"/assets/about/about1.jpg"} />
                    </div>
                    <div className="overflow-hidden h-[150px] rounded-2xl shadow-2xl">
                        <Image className="-translate-y-[150px]" alt="" width={300} height={300} src={"/assets/about/about1.jpg"} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 rotate-2">
                    <div className="overflow-hidden h-[150px] rounded-2xl shadow-2xl">
                        <Image alt="" width={300} height={300} src={"/assets/about/about2.jpg"} />
                    </div>
                    <div className="overflow-hidden h-[150px] rounded-2xl shadow-2xl">
                        <Image className="-translate-y-[150px]" alt="" width={300} height={300} src={"/assets/about/about2.jpg"} />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default About;