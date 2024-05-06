"use client";

import { About, Contact, Header, Panel, ScrollDot, Service, Work } from "@/components";
import { useEffect, useState } from "react";

const Home = () => {
  const [ floor, setFloor ] = useState<number>(0)

  useEffect(() => {
    console.log(floor)
    const element = document.getElementById(`floor${floor}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [floor])
  
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if(event.deltaY > 0) {
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
    <main className="flex flex-col">
      <ScrollDot floor={floor} />
      <Header />
      <Panel />
      <About />
      <Service />
      <Work />
      <Contact />
    </main>
  );
}

export default Home;
