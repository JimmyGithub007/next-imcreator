import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Monoton } from "next/font/google";

const monoton = Monoton({ subsets: ["latin"], weight: '400' });

const Slide = (props: { left: string, direction: string, progress: any, title: string }) => {
    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])

    return (
        <motion.div style={{x: translateX, left: props.left}} className="relative flex">
            <Phrase title={props.title} />
            <Phrase title={props.title} />
            <Phrase title={props.title} />
        </motion.div>
    )
}

const Phrase = ({ title } : { title: string }) => {
    return (
        <div className={`${monoton.className} px-5 flex gap-5 items-center text-blue-950`}>
            <p style={{ fontSize: "7.5vw", whiteSpace: "nowrap" }}>{title}</p>
        </div>
    )
}

const TextParallax = ({ title }: { title: string }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    return (<div ref={container}>
        <Slide direction={'left'} left={"-40%"} progress={scrollYProgress} title={title} />
        <Slide direction={'right'} left={"-25%"} progress={scrollYProgress} title={title} />
        <Slide direction={'left'}  left={"-75%"} progress={scrollYProgress} title={title} />
    </div>)
}

export default TextParallax;