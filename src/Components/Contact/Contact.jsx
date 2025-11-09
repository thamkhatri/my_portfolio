"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../../animations";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

    const socials = [
        { icon: <FaLinkedin size={28} />, link: "https://linkedin.com" },
        { icon: <FaGithub size={28} />, link: "https://github.com" },
        { icon: <FaEnvelope size={28} />, link: "mailto:thamkhatri2003@gmail.com" },
    ];

    return (
        <section
            id="contact"
            ref={ref}
            className="min-h-screen bg-[#0A0A1A] text-white flex flex-col items-center justify-start py-24 px-6"
        >
            <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="text-5xl font-bold mb-16 text-[#7B61FF]"
            >
                Get in Touch
            </motion.h2>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full"
            >
                {/* Contact Form Card */}
                <motion.div
                    variants={fadeUp}
                    className="bg-[#111133] rounded-3xl p-8 shadow-md hover:shadow-[0_0_35px_-5px_rgba(123,97,255,0.3)] transition-shadow duration-500"
                >
                    <form className="flex flex-col gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-4 rounded-xl bg-[#0A0A1A] border border-transparent text-white focus:border-[#7B61FF] outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-4 rounded-xl bg-[#0A0A1A] border border-transparent text-white focus:border-[#7B61FF] outline-none"
                        />
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="p-4 rounded-xl bg-[#0A0A1A] border border-transparent text-white focus:border-[#7B61FF] outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#7B61FF] hover:bg-[#9D84FF] transition-colors duration-500 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-[0_0_30px_-5px_rgba(123,97,255,0.5)]"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Connect with Me Card */}
                <motion.div
                    variants={fadeUp}
                    className="bg-[#111133] rounded-3xl p-10 shadow-md hover:shadow-[0_0_50px_-5px_rgba(46,143,255,0.3)] transition-shadow duration-500 flex flex-col items-center text-center"
                >
                    <h3 className="text-3xl font-extrabold mb-2 text-[#D9D9FF]">Tham Khatri</h3>
                    <p className="text-lg font-light mb-4 text-[#7B61FF]">Frontend Developer — ReactJS</p>
                    <p className="text-gray-300 mb-6">
                        I am available for work. Contact me through Email:
                    </p>
                    <p className="text-[#9D84FF] font-medium mb-6">thamkhatri2003@gmail.com</p>

                    {/* Social Icons Centered */}
                    <div className="flex gap-6 justify-center">
                        {socials.map((s, i) => (
                            <a
                                key={i}
                                href={s.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#7B61FF] hover:text-[#9D84FF] transition-colors duration-300"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
