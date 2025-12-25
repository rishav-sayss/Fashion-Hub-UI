import React from 'react'
import image from "../assets/heroen.png"

function Hero() {
    return (
       <div className="w-full h-screen bg-cover bg-center mt-3 rounded-md  relative" style={{backgroundImage:`url(${image})`}} >
            <div className=' w-full h-full flex flex-col items-start
             justify-end  text-white pl-10 pb-20' >
                <h1 className=' text-6xl tracking-widest font-extralight font-sans'>DESIGN</h1>
                <h1 className=' text-6xl tracking-widest font-extralight font-sans pl-19 pb-2.5'> & FREEDOM </h1>
                <p className=' pl-19 leading-4.5 text-[10px]'>Explore independent style by Embracimg Uniquencess <br /> with our Exclusive Design Appare!</p>
            </div>
            <div className=' absolute right-3 bottom-3 flex items-center justify-center gap-2 '>
                <i className=' ri-arrow-down-long-fill flex items-center justify-center text-[10px]  border border-white w-5 h-5 rounded-full bg-transparent text-white  '  ></i>
                <h4 className=' text-[9px] text-white' >LEARN MORE</h4>
            </div>
        </div>
    )
}

export default Hero
