"use client";

import { createContext, useEffect, useState } from "react";
import { About, Contact, Header, Menu, Panel, ScrollDot, Service, Work } from "@/components";
import { LuMouse } from "react-icons/lu";

type shareContextType = {
  floor: number;
  setFloor: React.Dispatch<React.SetStateAction<number>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const shareContextDefaultValues: shareContextType = {
  floor: 0,
  setFloor: () => {},
  isOpen: false,
  setIsOpen: () => {},
};

export const ShareContext = createContext<shareContextType>(shareContextDefaultValues);

const Home = () => {
  const [ floor, setFloor ] = useState<number>(0);
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  useEffect(() => {
    console.log(floor)
    const element = document.getElementById(`floor${floor}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [floor])

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setFloor(prevFloor => prevFloor < 4 ? prevFloor + 1 : prevFloor);
      } else {
        setFloor(prevFloor => prevFloor > 0 ? prevFloor - 1 : prevFloor);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (<ShareContext.Provider value={{ floor, setFloor, isOpen, setIsOpen }}>
    <main className="flex flex-col overflow-hidden">
      <ScrollDot />
      <Menu />
      <Header />
      <Panel />
      <About />
      <Service />
      <Work />
      <Contact />
      { floor !== 4 && <div className="fixed flex justify-center top-[95%] w-full">
        <LuMouse className="animate-bounce text-blue-950 text-5xl z-10" />
      </div> }
    </main>
  </ShareContext.Provider>);
}

export default Home;
