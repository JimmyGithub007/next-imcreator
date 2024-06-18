import { ReactNode } from "react";
import Sidebar from "./Sidebar";

const Shell = ({ children }: { children: ReactNode }) => {
    return (<div className="flex items-center h-screen px-4">
        <div className="flex flex-col items-center justify-center w-[calc(100vw-276px)] min-h-screen pr-4 py-4">
            {children}
        </div>
        <Sidebar />
    </div>)
}

export default Shell;