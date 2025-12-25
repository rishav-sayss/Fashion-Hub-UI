import React from 'react'

function Nav() {
    return (
        <div className=' w-full  flex justify-between items-center text-white '>
            <div className="left">
                <h2>DVSY</h2>
            </div>
            <div className="right flex gap-1.5 items-center ">
                <h3 className=' p-2 rounded-md bg-[#222222] text-[10px]  font-light  font-sans'>DESIGNERS</h3>
                <h3 className=' p-2 rounded-md bg-[#222222] text-[10px] font-light font-sans '>COLLABS</h3>
                <h3 className=' p-2 rounded-md bg-[#222222] text-[10px] font-light font-sans '>EVENTS</h3>
                <h3 className=' p-2 rounded-md bg-[#222222] text-[10px] font-light font-sans '>BLOG</h3>
                <h3 className=' p-2 rounded-md bg-[#222222] text-[10px] font-light font-sans'>CARD</h3>
                <h3 className=' p-2 rounded-md bg-[#EC6D56]  text-black text-[10px] font-[400px]  font-sans'>GET IN TOUCH </h3>
            </div>           
        </div>
    )
}

export default Nav
