import { useDispatch, useSelector } from "react-redux";
import { RiTShirt2Fill } from "react-icons/ri";
import { RootState } from "@/store";
import { setFloor } from "@/store/slice/floorSlice";

const ScrollDot = () => {
    const dispatch = useDispatch();
    const { floor } = useSelector((state: RootState) => state.floor);

    return (<div className="flex-col fixed gap-4 items-center justify-center right-5 top-[50%] -translate-y-[50%] text-xl hidden md:flex z-10">
        {
            [0, 1, 2, 3, 4].map((value, key) => (
                <RiTShirt2Fill 
                    key={key} 
                    onClick={() => { 
                        if(value !== floor) { dispatch(setFloor(value)) }}
                    }
                    className={`${value === floor ? "animate-pulse text-blue-950" : "cursor-pointer text-slate-300"} duration-200 rounded-full shadow-2xl`} 
                />
            ))
        }
    </div>)
}

export default ScrollDot;