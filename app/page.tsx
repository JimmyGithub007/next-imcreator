"use client";

import { useEffect, useState } from "react";
import { About, Contact, Header, Panel, ScrollDot, Service, Work } from "@/components";
import { LuMouse } from "react-icons/lu";

const Home = () => {
  const [floor, setFloor] = useState<number>(0)

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

  return (
    <main className="flex flex-col overflow-hidden">
      <ScrollDot floor={floor} />
      <Header />
      <Panel />
      <About />
      <Service />
      <Work />
      <Contact />
      <div className="fixed flex justify-center top-[95%] w-full">
        <LuMouse className="animate-bounce text-blue-950 text-5xl z-10" />
      </div>
    </main>
  );
}

export default Home;
