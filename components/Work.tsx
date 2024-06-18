import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import useDimension from "@/hooks/useDimension";
import TextParallax from "@/utils/TextParallax";

const Column = ({ y, v1, top }: { y: any, v1: number, top: number }) => {
    return <motion.div className={`relative min-w-[300px] w-[25%]`} style={{ y }}>
        <div className={`absolute flex flex-col gap-4`} style={{ top: `-${top}px` }}>
            {[1, 2, 3, 4, 5, 6].map((v2, k2) => {
                return <img key={k2} className="cursor-pointer" alt="" src={`/assets/works/work${(v1 * 6) + v2}.jpg`} />
            })}
        </div>
    </motion.div>
}

const Work = () => {
    const container = useRef(null);
    const { height } = useDimension();
    const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'end start'] });

    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

    const percent: number[] = [30, 70, 30, 60];

    return (<div className="bg-slate-50 z-10 hidden sm:block">
        <div className="-rotate-2"><TextParallax title="PRODUCT GALLERY" /></div>
        <div ref={container} className="bg-slate-200 h-[175vh] overflow-hidden">
            <div className={`flex gap-8`}>
                {[y, y1, y2, y3].map((v1, k1) => {
                    return <Column key={k1} y={v1} v1={k1} top={height + (height * percent[k1] / 100)} />
                })}
            </div>
        </div>
    </div>)
}

export default Work;