import { ShareContext } from "@/app/page";
import { useContext } from "react";
import { RiTShirt2Fill } from "react-icons/ri";

const ScrollDot = () => {
    const { floor, setFloor } = useContext(ShareContext);

    return (<div className="flex-col fixed gap-4 items-center justify-center right-5 top-[50%] -translate-y-[50%] text-xl hidden sm:flex z-10">
        {
            [0, 1, 2, 3, 4].map((value, key) => (
                <RiTShirt2Fill 
                    key={key} 
                    onClick={() => { 
                        if(value !== floor) { setFloor(value) }}
                    }
                    className={`${value === floor ? "animate-pulse text-blue-950" : "cursor-pointer text-slate-300"} duration-200 rounded-full shadow-2xl`} 
                />
            ))
        }
    </div>)
}

export default ScrollDot;