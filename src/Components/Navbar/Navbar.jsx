// import React from 'react'
// import { useState } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// const Navbar = () => {
//     const [menu, openMenu] = useState(false);
//     const [showMenu, setShowmenu] = useState(true);
//     return (
//         <div className='flex flex-wrap justify-between items-center md:items-center text-white px-10 pt-6 md:px-20'>
//             <span className='text-xl font-bold tracking-wide'>Portfolio</span>
//             <ul className={`${menu ? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30  md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 `}>
//                 <a href="#Project">
//                     <li className='text-md transition-all duration-300  p-1 md:p-0'>Project</li>
//                 </a>
//                 <a href="#Skills">
//                     <li className='text-md transition-all duration-300  p-1 md:p-0'>Skills</li>
//                 </a>
//                 <a href="#Contact">
//                     <li className='text-md transition-all duration-300  p-1 md:p-0'>Contact</li>
//                 </a>
//             </ul>
//             <div>
//                 <div className='flex items-center space-x-5'>
//                     <a
//                         href="https://www.linkedin.com/in/thum-khatri-501b57293/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-[#0A66C2] transition-colors"
//                         aria-label="Visit LinkedIn profile"
//                     >
//                         <FaLinkedin size={20} />
//                     </a>

//                     {/* GitHub */}
//                     <a
//                         href="https://github.com/thamkhatri"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-gray-800 transition-colors"
//                         aria-label="Visit GitHub profile"
//                     >
//                         <FaGithub size={20} />
//                     </a>
//                 </div>

//             </div>
//             {showMenu ? (
//                 <FaBars size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={() => { openMenu(!menu); setShowmenu(!showMenu); }} />
//             ) :
//                 <FaTimes size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' />}
//         </div>
//     )
// }

// export default Navbar
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'

const Navbar = () => {
    const [menu, openMenu] = useState(false)
    const [showMenu, setShowmenu] = useState(true)
    const [activeSection, setActiveSection] = useState('')

    const navItems = [
        { id: 'Project', label: 'Project' },
        { id: 'Skills', label: 'Skills' },
        { id: 'Contact', label: 'Contact' },
    ]

    // 🧠 Track which section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 } // 50% visible
        )

        navItems.forEach((item) => {
            const section = document.getElementById(item.id)
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-transparent flex flex-wrap justify-between items-center text-white px-10 pt-6 md:px-20'>
            <span className='text-xl font-bold tracking-wide'>Portfolio</span>

            {/* Nav Links */}
            <ul
                className={`${menu ? 'block' : 'hidden'} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
            >
                {navItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`}>
                        <li
                            className={`text-md transition-all duration-300 p-1 md:p-0 relative cursor-pointer
                ${activeSection === item.id
                                    ? 'after:content-[""] after:block after:w-full after:h-[2px] after:bg-[#ffd60a] after:mt-1'
                                    : 'hover:after:content-[""] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#ffd60a] hover:after:mt-1'
                                }`}
                        >
                            {item.label}
                        </li>
                    </a>
                ))}
            </ul>

            {/* Social Icons */}
            <div className='flex items-center space-x-5'>
                <a
                    href="https://www.linkedin.com/in/thum-khatri-501b57293/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0A66C2] transition-colors"
                    aria-label="Visit LinkedIn profile"
                >
                    <FaLinkedin size={22} />
                </a>
                <a
                    href="https://github.com/thamkhatri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition-colors"
                    aria-label="Visit GitHub profile"
                >
                    <FaGithub size={22} />
                </a>
            </div>

            {/* Mobile Menu Toggle */}
            {showMenu ? (
                <FaBars
                    size={30}
                    className='md:hidden absolute right-10 top-6 transition-all duration-300'
                    onClick={() => {
                        openMenu(!menu)
                        setShowmenu(!showMenu)
                    }}
                />
            ) : (
                <FaTimes
                    size={30}
                    className='md:hidden absolute right-10 top-6 transition-all duration-300'
                    onClick={() => {
                        openMenu(!menu)
                        setShowmenu(!showMenu)
                    }}
                />
            )}
        </div>
    )
}

export default Navbar
