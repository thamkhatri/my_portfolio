import { motion } from "framer-motion";
import me from "../assets/me.png";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a1a] via-[#111133] to-[#1b1b2f] overflow-hidden text-white">
            {/* Background glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#7B61FF]/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#2E8FFF]/20 blur-[100px]" />

            {/* Layout */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-8 gap-10">

                {/* ---------- LEFT SIDE (Name + Buttons) ---------- */}
                <div className="w-full lg:w-1/3 text-left">
                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0 }}
                        className="text-5xl sm:text-6xl font-bold tracking-tight mb-4"
                    >
                        Tham <span className="text-[#7B61FF]">Khatri</span>
                    </motion.h1>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.1, ease: "easeOut", delay: 2.0 }}
                        className="flex gap-4 mt-6"
                    >
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-[#7B61FF] rounded-xl font-medium hover:bg-[#6A52E0] transition"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-[#7B61FF] rounded-xl font-medium hover:bg-[#7B61FF]/10 transition"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* ---------- MIDDLE (Image) ---------- */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0 }}
                    className="relative w-full lg:w-1/3 flex justify-center"
                >
                    <img
                        src={me}
                        alt="Tham Khatri"
                        className="max-h-[1000px] object-cover drop-shadow-[0_25px_50px_rgba(123,97,255,0.35)]"
                    />
                </motion.div>

                {/* ---------- RIGHT SIDE (Role + Info) ---------- */}
                <div className="w-full lg:w-1/3 text-gray-300 leading-relaxed">
                    {/* Front-End Developer */}
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.1, ease: "easeOut", delay: 1 }}
                        className="text-2xl font-semibold mb-4 text-[#7B61FF]"
                    >
                        Front-End Developer
                    </motion.h2>

                    {/* Info */}
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
                        className="text-lg"
                    >
                        Frontend Web Developer passionate about crafting responsive web
                        experiences. I specialize in React.js and Tailwind CSS, bringing
                        ideas to life through clean design and smooth interactions. I enjoy
                        turning concepts into engaging digital experiences that look great
                        on any device and feel effortless to use.
                    </motion.p>
                </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/60 to-transparent pointer-events-none" />
        </section>
    );
}
