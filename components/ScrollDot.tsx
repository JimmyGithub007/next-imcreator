import { RiTShirt2Fill } from "react-icons/ri";

const ScrollDot = (props: { floor: number }) => {
    return (<div className="flex-col fixed gap-4 items-center justify-center right-5 top-[50%] -translate-y-[50%] text-xl hidden sm:flex z-10">
        {
            [0, 1, 2, 3, 4].map((value, key) => {
                return <RiTShirt2Fill key={key} className={`${value === props.floor ? "animate-pulse text-blue-950" : "text-slate-300"} duration-200 rounded-full shadow-2xl`} />
            })
        }
    </div>)
}

export default ScrollDot;