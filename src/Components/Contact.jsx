import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="relative bg-black text-white py-20 flex justify-center items-center overflow-hidden">
            {/* Floating glow orbs */}
            <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse delay-700"></div>

            {/* Contact Card */}
            <div className="relative z-10 bg-gradient-to-br from-[#101034] to-[#050510] rounded-3xl shadow-2xl border border-white/10 max-w-lg w-full text-center p-10 backdrop-blur-lg">
                <h2 className="text-3xl font-bold mb-4">Get in touch</h2>

                <p className="text-xl font-semibold text-indigo-300">Binod Khatri</p>
                <p className="text-gray-400 mb-4">Front-end Developer — React.js</p>

                <p className="text-gray-400 mb-2">
                    I am available for work. Contact me through email.
                </p>

                <a
                    href="mailto:devsbinod@gmail.com"
                    className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors"
                >
                    devsbinod@gmail.com
                </a>

                <div className="mt-8 flex justify-center gap-6">
                    <a
                        href="#"
                        className="bg-white/10 p-3 rounded-lg hover:bg-indigo-500/30 transition-transform transform hover:scale-110"
                    >
                        <FaFacebook size={22} />
                    </a>
                    <a
                        href="#"
                        className="bg-white/10 p-3 rounded-lg hover:bg-indigo-500/30 transition-transform transform hover:scale-110"
                    >
                        <FaLinkedin size={22} />
                    </a>
                    <a
                        href="#"
                        className="bg-white/10 p-3 rounded-lg hover:bg-indigo-500/30 transition-transform transform hover:scale-110"
                    >
                        <FaGithub size={22} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
