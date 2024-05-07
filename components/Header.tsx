"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
    const [ scrollY, setScrollY ] = useState<number>(0);

    const handleScrollChange = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollChange);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("scroll", handleScrollChange);
        };
    }, []);

    return (<div className="bg-white fixed h-16 top-0 w-full z-10">
        <div className="flex h-full items-center justify-center sm:justify-between px-4">
            <div className="overflow-hidden h-[50px]">
                <Image className="rounded-md -translate-y-[25px]" alt="logo" width={100} height={100} src={"/assets/logo.jpg"} />
            </div>
        </div>
    </div>)
}

export default Header;