// "use client";
// import { useRef, useEffect } from "react";
// import { motion, useAnimation, useTransform, useScroll } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";
// import Particles from "../Particles";

// export default function Skills() {
//     const ref = useRef(null);
//     const controls = useAnimation();
//     const { ref: inViewRef, inView } = useInView({ triggerOnce: false, threshold: 0.25 });

//     const setRefs = (el) => {
//         ref.current = el;
//         inViewRef(el);
//     };

//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start start", "end end"],
//     });

//     const gridPositions = [
//         { x: -240, y: -80 },
//         { x: -80, y: -80 },
//         { x: 80, y: -80 },
//         { x: 240, y: -80 },
//         { x: -240, y: 80 },
//         { x: -80, y: 80 },
//         { x: 80, y: 80 },
//         { x: 240, y: 80 },
//     ];

//     const skills = [
//         { name: "React", icon: <FaReact size={40} /> },
//         { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
//         { name: "Git", icon: <FaGitAlt size={40} /> },
//         { name: "HTML", icon: <FaHtml5 size={40} /> },
//         { name: "Javascript", icon: <SiJavascript size={40} /> },
//         { name: "Mongodb", icon: <SiMongodb size={40} /> },
//         { name: "CSS", icon: <FaCss3Alt size={40} /> },
//         { name: "Node.js", icon: <FaNodeJs size={40} /> },
//     ];

//     // Trigger grid or scatter when inView changes
//     useEffect(() => {
//         if (inView) controls.start("grid");
//         else controls.start("scatter");
//     }, [inView, controls]);

//     // Stage variants
//     const cardVariants = (index) => ({
//         scatter: {
//             x: Math.random() * 400 - 200,
//             y: Math.random() * 200 - 100,
//             rotate: Math.random() * 30 - 15,
//             scale: 0.7,
//             opacity: 0.8,
//             transition: { type: "spring", stiffness: 50, damping: 12 },
//         },
//         grid: {
//             x: gridPositions[index].x,
//             y: gridPositions[index].y,
//             rotate: 0,
//             scale: 1,
//             opacity: 1,
//             transition: { type: "spring", stiffness: 70, damping: 16 },
//         },
//     });

//     // Floating offsets after grid formation
//     const floatRange = 10; // pixels
//     const floatSpeed = 2; // seconds
//     const scrollOffset = useTransform(scrollYProgress, [0, 1], [0, 1]);

//     return (
//         <section
//             id="skills"
//             ref={setRefs}
//             className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden"
//         >
//             <Particles />

//             <h2 className="text-5xl font-bold mb-20 relative z-10">Skills</h2>

//             <motion.div className="relative z-10 w-full max-w-4xl h-[450px] flex justify-center items-center">
//                 {skills.map((skill, index) => {
//                     // Individual floating motion using sine wave for smooth drift
//                     const floatX = useTransform(
//                         scrollOffset,
//                         [0, 1],
//                         [0, Math.random() * floatRange - floatRange / 2]
//                     );
//                     const floatY = useTransform(
//                         scrollOffset,
//                         [0, 1],
//                         [0, Math.random() * floatRange - floatRange / 2]
//                     );

//                     return (
//                         <motion.div
//                             key={index}
//                             variants={cardVariants(index)}
//                             animate={controls}
//                             style={{ x: floatX, y: floatY }}
//                             className="absolute w-32 h-32 flex flex-col items-center justify-center 
//                 bg-gradient-to-br from-[#101034] to-[#050510] border border-gray-700 rounded-2xl shadow-lg 
//                 hover:border-green-400 transition duration-300"
//                         >
//                             {skill.icon}
//                             <p className="mt-3 text-lg font-medium">{skill.name}</p>
//                         </motion.div>
//                     );
//                 })}
//             </motion.div>
//         </section>
//     );
// }

"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../../animations";

import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function Skills() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const skills = [
        { icon: <FaReact size={40} />, label: "React" },
        { icon: <SiJavascript size={40} />, label: "JavaScript" },
        { icon: <SiTailwindcss size={40} />, label: "Tailwind CSS" },
        { icon: <FaNodeJs size={40} />, label: "Node.js" },
        { icon: <SiMongodb size={40} />, label: "MongoDB" },
        { icon: <FaGitAlt size={40} />, label: "Git" },
        { icon: <FaHtml5 size={40} />, label: "HTML5" },
        { icon: <FaCss3Alt size={40} />, label: "CSS3" },
    ];

    return (
        <section
            id="skills"
            ref={ref}
            className="min-h-screen bg-[#111133] text-white flex flex-col items-center justify-center py-24 px-6"
        >
            <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="text-5xl font-bold mb-16 text-[#7B61FF]"
            >
                Skills
            </motion.h2>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
            >
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        className="flex flex-col items-center p-6 rounded-2xl border border-[#7B61FF]/25 bg-gradient-to-br from-[#0A0A1A] to-[#1B1B2F] shadow-[0_0_35px_-5px_rgba(123,97,255,0.3)] hover:scale-105 transition-transform duration-500"
                    >
                        <div className="mb-3 text-[#D9D9FF]">{skill.icon}</div>
                        <p className="text-lg font-medium">{skill.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
