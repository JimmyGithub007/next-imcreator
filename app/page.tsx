"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuMouse } from "react-icons/lu";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { About, Contact, Header, Loading, Menu, Panel, ScrollDot, Service, Work } from "@/components";
import { RootState } from "@/store";
import { minusFloor, plusFloor, setFloor } from "@/store/slice/floorSlice";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  const { floor } = useSelector((state: RootState) => state.floor);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if(loading) return <div className="flex items-center justify-center h-screen w-screen"><Loading /></div>

  return (
    <motion.main 
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        }
      }}
      className="flex flex-col overflow-hidden">
      <ScrollDot />
      <Menu />
      <Header />
      <Panel />
      <About />
      <Service />
      <Work />
      <Contact />
      { floor !== 4 && 
        <AnimatePresence>
          <motion.div 
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.5,
              transition: {
                duration: 1,
              }
            }}
            className="font-bold fixed flex-col items-center justify-center bottom-[1%] w-full flex">
            <LuMouse className="animate-bounce text-blue-950 text-4xl z-10 hidden sm:block" />
            <IoChevronDownCircleOutline 
              onClick={() => {
                dispatch(plusFloor());
              }}
              className="animate-bounce duration-200 text-blue-950 text-6xl z-10 block sm:hidden" 
            />
            <span className="hidden sm:block">Scroll</span>
          </motion.div>
        </AnimatePresence>
      }
    </motion.main>
  );
}

export default Home;
