"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuMouse } from "react-icons/lu";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { About, Contact, Footer, Header, Loading, Menu, Panel, ScrollDot, Service, Work } from "@/components";
import { RootState } from "@/store";
import { minusFloor, plusFloor, setFloor } from "@/store/slice/floorSlice";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedMouse from "@/utils/AnimatedMouse";
import Lenis from '@studio-freight/lenis';

const Home = () => {
  //const dispatch = useDispatch();
  //const { floor } = useSelector((state: RootState) => state.floor);
  const [ loading, setLoading ] = useState(true);
  const [ hideHeader, setHideHeader ] = useState(false);

  /*useEffect(() => {
    const element = document.getElementById(`floor${floor}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [floor])

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        dispatch(plusFloor());
      }
      if (event.deltaY < 0) {
        dispatch(minusFloor());
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);*/

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) setHideHeader(true);
      else setHideHeader(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: any) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  if (loading) return <div className="flex items-center justify-center h-screen w-screen"><Loading /></div>

  return (
    <motion.main
      initial={{
        opacity: 0,
        borderRadius: "50%",
        scale: 0.1,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        borderRadius: 0,
        transition: {
          duration: 1,
        }
      }}
      className="flex flex-col">
      {/*<Header hideHeader={hideHeader} />*/}
      <Panel />
      <About />
      <Work />
      <Footer />
      {/*<ScrollDot />
      floor !== 4 && 
        <AnimatePresence>
          <motion.div 
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
              }
            }}
            className="font-bold fixed flex-col items-center justify-center bottom-[1%] w-full flex">
            <div className="hidden sm:block bg-blue-950 rounded-3xl p-1">
              <div className="border-white border-2 flex h-12 items-center justify-center rounded-3xl w-8 text-4xl z-10">
                <div className="animate-scroll bg-white h-2 rounded-full w-2"></div>
              </div>
            </div>
            <IoChevronDownCircleOutline 
              onClick={() => {
                dispatch(plusFloor());
              }}
              className="animate-bounce duration-200 text-6xl z-10 block sm:hidden" 
            />
          </motion.div>
        </AnimatePresence>
      */}
    </motion.main>
  );
}

export default Home;
