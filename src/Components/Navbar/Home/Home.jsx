import React from 'react'
import avtImg from "../../../assets/avtimg.jpg"

const Home = () => {
    return (
        <div className='text-amber-50 flex w-full justify-between items-start p-10 md:p-20'>
            <div className='md:w-2/4 md:pt-10'>
                <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter '>Hello i am ! </h1>
                <p className='text-sm md:text-2xl tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quidem consectetur quaerat quo ipsam. Velit laboriosam veritatis,</p>
                <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2  md:px-4 hover:opacity-85 duration-300 
                hover:scale-105 font-semibold rounded-3xl bg-[#003566]'>Contact Me</button>
            </div>

            <div>
                <img className='w-2/5 h-1/6' src={avtImg} alt="" />
            </div>
        </div>
    )
}

export default Home