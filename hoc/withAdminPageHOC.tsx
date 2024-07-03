"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { usePathname, useRouter } from "next/navigation";

import dynamic from "next/dynamic";
import { RootState } from "@/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";

const Loading = dynamic(() => import('@/components/Loading'));

type Props = any;

const withAdminPageHOC = (Component: React.ComponentType<Props>) => {
    const WithAdminPageHOC = (props: Props) => {
        //const dispatch = useDispatch();
        const router = useRouter();
        //const pathname = usePathname();
        //const { pageLoading } = useSelector((state: RootState) => state.floor);

        // Return the component with props
        //if(pageLoading) return <div className="flex items-center justify-center min-h-[calc(100vh-48px)] w-screen"><Loading /></div>

        useEffect(() => {
            const handleAuthStateChanged = async (user: any) => {
                if (user) {
                    return <Component {...props} />;
                } else {
                    router.push("/admin/login");
                }
            }
            const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);
            return () => {
                unsubscribe();
            };
        }, [])
    };

    // Return the functional component
    return WithAdminPageHOC;
};

export default withAdminPageHOC;