import { RiTShirt2Fill } from "react-icons/ri";

const ScrollDot = (props: { floor: number }) => {
    return (<div className="flex flex-col fixed gap-4 justify-center items-center right-5 top-[50%] -translate-y-[50%]">
        {/*<div className={`absolute duration-300 -top-2 translate-y-[${props.floor*28}px]`}>
            <div className="relative inline-flex">
                <div className="rounded-full text-blue-950 text-3xl"><RiTShirt2Fill  /></div>
                <div className="rounded-full absolute top-0 left-0 animate-ping text-blue-950 text-3xl"><RiTShirt2Fill  /></div>
                <div className="rounded-full absolute top-0 left-0 animate-pulse text-blue-950 text-3xl"><RiTShirt2Fill  /></div>
            </div>
</div>*/}
        {
            [0, 1, 2, 3, 4].map((value, key) => {
                return <RiTShirt2Fill key={key} className={`${value === props.floor ? "text-blue-950 animate-pulse" : "text-slate-300"} duration-200 rounded-full shadow-2xl`} />
            })
        }
    </div>)
}

export default ScrollDot;