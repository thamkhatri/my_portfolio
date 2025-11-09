"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../../animations";
import image4 from "../../assets/dictionaryApp.png";
import image2 from "../../assets/weatherApp.png";

export default function Projects() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

    const projects = [
        {
            title: "Weather Forecast App",
            desc: "Real-time weather conditions and 7-day forecast by city search.",
            img: image2,
            link: "#",
        },
        {
            title: "Task Management System",
            desc: "Organize tasks visually with drag + drop workflow boards.",
            img: image4,
            link: "#",
        },
        {
            title: "Marketing Agency Landing Page",
            desc: "Elegant responsive landing page with smooth motion effects.",
            img: image2,
            link: "#",
        },
        {
            title: "Dictionary Web App",
            desc: "Search word meanings with phonetics and audio pronunciation.",
            img: image4,
            link: "#",
        }
    ];

    return (
        <section id="projects" ref={ref} className="min-h-screen bg-[#0A0A1A] text-white flex flex-col items-center justify-start py-24 px-6">
            <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="text-5xl font-bold mb-16 text-[#7B61FF]"
            >
                My Projects
            </motion.h2>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full"
            >
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        className="rounded-3xl overflow-hidden border border-[#7B61FF]/30 bg-gradient-to-br from-[#111133] to-[#1B1B2F] hover:scale-[1.03] transition-transform duration-700 backdrop-blur-md shadow-[0_0_35px_-5px_rgba(123,97,255,0.3)]"
                    >
                        <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />

                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-3 text-[#D9D9FF]">{p.title}</h3>
                            <p className="text-gray-300 mb-5">{p.desc}</p>
                            <a href={p.link} className="text-[#7B61FF] font-medium hover:text-[#9D84FF] transition">
                                View Project →
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
