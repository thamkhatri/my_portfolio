"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ScatterRevealGrid({ items, cols = 3 }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12 }
        }
    };

    const card = {
        hidden: {
            x: () => Math.random() * 120 - 60,
            y: () => Math.random() * 120 - 60,
            scale: 0.3,
            opacity: 0
        },
        visible: {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 14 }
        }
    };

    return (
        <div ref={ref} className="w-full flex justify-center items-center py-24">
            <motion.div
                className={`grid gap-6 grid-cols-2 md:grid-cols-${cols}`}
                variants={container}
                initial="hidden"
                animate={controls}
            >
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={card}
                        className="p-6 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl"
                    >
                        {item}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
