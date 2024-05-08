"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuMouse } from "react-icons/lu";
import { About, Contact, Header, Menu, Panel, ScrollDot, Service, Work } from "@/components";
import { RootState } from "@/store";
import { minusFloor, plusFloor, setFloor } from "@/store/slice/floorSlice";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  const { floor } = useSelector((state: RootState) => state.floor);


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

  return (
    <main className="flex flex-col overflow-hidden">
      <ScrollDot />
      <Menu />
      <Header />
      <Panel />
      <About />
      <Service />
      <Work />
      <Contact />
      {floor !== 4 && <motion.div className="font-bold fixed flex flex-col items-center justify-center bottom-[1%] w-full">
        <LuMouse className="animate-bounce text-blue-950 text-4xl z-10" />
        Scroll
      </motion.div>}
    </main>
  );
}

export default Home;
