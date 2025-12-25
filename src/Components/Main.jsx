import React from 'react'
import image from '../assets/img2.avif'
import image3 from '../assets/img3.avif'
import image4 from '../assets/img4.avif'
function Main() {
    return (
        <div className=' w-full   pt-3'>
            <div className=' p-1 w-full  flex gap-2 mb-3'>
                <div className=' w-[25%]  bg-[#1E1E1E] flex flex-col items-start rounded-md justify-center p-5  '>
                    <h4 className=' mb-4 text-white  font-light'>INDEPENDENCY</h4>
                    <p className=' text-[10px] text-[#747474]'>Explore the creativity of independent <br /> designers form around the globe</p>
                    <div className='   flex items-center justify-center gap-2 mt-4 '>
                        <i className='ri-arrow-right-up-long-line flex items-center justify-center text-[10px]  border border-white w-5 h-5 rounded-full bg-transparent text-white  '  ></i>
                        <h4 className=' text-[9px] text-white' >LEARN MORE</h4>
                    </div>
                </div>
                <div className=' w-[25%]  bg-[#1E1E1E] flex flex-col items-start rounded-md justify-center p-5  '>
                    <h4 className=' mb-4 text-white  font-light'>INDEPENDENCY</h4>
                    <p className=' text-[10px] text-[#747474]'>Explore the creativity of independent <br /> designers form around the globe</p>
                    <div className='   flex items-center justify-center gap-2 mt-4 '>
                        <i className='ri-arrow-right-up-long-line flex items-center justify-center text-[10px]  border border-white w-5 h-5 rounded-full bg-transparent text-white  '  ></i>
                        <h4 className=' text-[9px] text-white' >LEARN MORE</h4>
                    </div>
                </div>
                <div className=' w-[25%]  bg-[#1E1E1E] flex flex-col items-start rounded-md justify-center p-5  '>
                    <h4 className=' mb-4 text-white  font-light'>INDEPENDENCY</h4>
                    <p className=' text-[10px] text-[#747474]'>Explore the creativity of independent <br /> designers form around the globe</p>
                    <div className='   flex items-center justify-center gap-2 mt-4 '>
                        <i className='ri-arrow-right-up-long-line flex items-center justify-center text-[10px]  border border-white w-5 h-5 rounded-full bg-transparent text-white  '  ></i>
                        <h4 className=' text-[9px] text-white' >LEARN MORE</h4>
                    </div>
                </div>
                <div className=' w-[25%]  bg-[#1E1E1E] flex flex-col items-start rounded-md justify-center p-5  '>
                    <h4 className=' mb-4 text-white  font-light'>INDEPENDENCY</h4>
                    <p className=' text-[10px] text-[#747474]'>Explore the creativity of independent <br /> designers form around the globe</p>
                    <div className='   flex items-center justify-center gap-2 mt-4 '>
                        <i className='ri-arrow-right-up-long-line flex items-center justify-center text-[10px]  border border-white w-5 h-5 rounded-full bg-transparent text-white  '  ></i>
                        <h4 className=' text-[9px] text-white' >LEARN MORE</h4>
                    </div>
                </div>
            </div>
            <div className=' w-full flex  justify-between items-center'>
                <div className=' w-[25%]   flex flex-col items-center rounded-md justify-center p-5 '>
                    <h2 className=' text-[10px] font-medium leading-2 text-[#747474]'>DESIGNERS</h2>
                    <p className=' text-2xl text-[#747474 text-white scale-y-125'>150+</p>
                </div>
                <div className=' w-[25%]   flex flex-col items-center rounded-md justify-center p-5 '>
                    <h2 className=' text-[10px] font-medium leading-2 text-[#747474]'>DESIGNERS</h2>
                    <p className=' text-2xl text-[#747474 text-white scale-y-125'>500+</p>
                </div>
                <div className=' w-[25%]   flex flex-col items-center rounded-md justify-center p-5 '>
                    <h2 className=' text-[10px] font-medium leading-2 text-[#747474]'>DESIGNERS</h2>
                    <p className=' text-2xl text-[#747474 text-white scale-y-125'>20+</p>
                </div>
                <div className=' w-[25%]   flex flex-col items-center rounded-md justify-center p-5 '>
                    <h2 className=' text-[10px] font-medium leading-2 text-[#747474]'>DESIGNERS</h2>
                    <p className=' text-2xl text-[#747474 text-white scale-y-125'>50+</p>
                </div>
            </div>

            <div className=' w-[97%]  flex gap-2 items-center mt-4'>
                <div className=' w-1/2 flex flex-col gap-2.5 p-5 bg-red-300 rounded-md '>
                    <h4 className=' text-[8px] font-medium'>About</h4>
                    <h2 className=' text-[30px] leading-7'>Where Fashion Meets <br /> Freedom </h2>
                    <div className=' flex gap-3 pt-5'>
                        <p className=' w-fit text-[10px]'>Fashion blends comfort, confidence, and creativity, turning simple fabrics into expressive styles that reflect personal identity, mood, and modern lifestyle choices.</p>
                        <p className=' w-fit text-[10px]'>Style is confidence stitched into everyday outfits, where comfort meets bold choices, turning simple clothing into personal fashion statements.</p>
                    </div>
                </div>
                <div className='w-1/2 h-[223px] rounded-md overflow-hidden' >
                    <img className='w-full   h-full object-cover object-center ' src={image} alt="" />
                </div>
            </div>
            <div className='w-full mt-5'>
                <h1 className=' text-4xl font-normal pl-8 text-white '>OUR ADVANTAGES</h1>
            </div>
            <div className=' w-[97%] flex  gap-3 overflow-hidden mt-3'>
                <div className=' w-1/2 h-62.5 overflow-hidden   '>
                    <img className=' w-full h-full object-cover object-cente rounded-md  ' src={image3} alt="" />
                </div>
                <div className=' w-1/2 h-62.5 flex flex-col gap-2 '>
                    <div className=' w-full bg-[#1E1E1E]  rounded-md p-5 text-white h-1/2  relative '>
                        <h4 className=' text-[13px] '>INDEPENDENT DESIGNER</h4>
                        <p className=' text-[9px] pt-2 '>Fashion blends comfort, confidence, and <br /> creativity, turning simple fabrics into  <br /> expressive styles that reflect personal <br /> identity, mood, and modern lifestyle choices</p>
                        <div className=' absolute bottom-6 right-6 flex items-center justify-center gap-2 mt-4 '>
                            <i className='ri-arrow-right-up-long-line flex items-center justify-center text-[10px]  border border-white w-5 h-5 rounded-full bg-transparent text-white  '  ></i>
                            <h4 className=' text-[9px] text-white' >EXPLORE</h4>
                        </div>
                    </div>
                    <div className=' w-full bg-[#1E1E1E]  rounded-md p-5 text-white h-1/2  relative '>
                        <h4 className=' text-[13px] '>Exclusive & UNIQUITY </h4>
                        <p className=' text-[9px] pt-2 '>Fashion blends comfort, confidence, and <br /> creativity, turning simple fabrics into  <br /> expressive styles that reflect personal <br /> identity, mood, and modern lifestyle choices</p>
                        <div className=' absolute bottom-6 right-6 flex items-center justify-center gap-2 mt-4 '>
                            <i className='ri-arrow-right-up-long-line flex items-center justify-center text-[10px]  border border-white w-5 h-5 rounded-full bg-transparent text-white  '  ></i>
                            <h4 className=' text-[9px] text-white' >EXPLORE</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-[97%] flex  gap-3 overflow-hidden mt-3'>
                <div className=' w-1/2 h-62.5 flex flex-col gap-2 '>
                    <div className=' w-full bg-[#1E1E1E]  rounded-md p-5 text-white h-1/2  relative '>
                        <h4 className=' text-[13px] '>INDEPENDENT DESIGNER</h4>
                        <p className=' text-[9px] pt-2 '>Fashion blends comfort, confidence, and <br /> creativity, turning simple fabrics into  <br /> expressive styles that reflect personal <br /> identity, mood, and modern lifestyle choices</p>
                        <div className=' absolute bottom-6 right-6 flex items-center justify-center gap-2 mt-4 '>
                            <i className='ri-arrow-right-up-long-line flex items-center justify-center text-[10px]  border border-white w-5 h-5 rounded-full bg-transparent text-white  '  ></i>
                            <h4 className=' text-[9px] text-white' >EXPLORE</h4>
                        </div>
                    </div>
                    <div className=' w-full bg-[#1E1E1E]  rounded-md p-5 text-white h-1/2  relative '>
                        <h4 className=' text-[13px] '>INDEPENDENT DESIGNER</h4>
                        <p className=' text-[9px] pt-2 '>Fashion blends comfort, confidence, and <br /> creativity, turning simple fabrics into  <br /> expressive styles that reflect personal <br /> identity, mood, and modern lifestyle choices</p>
                        <div className=' absolute bottom-6 right-6 flex items-center justify-center gap-2 mt-4 '>
                            <i className='ri-arrow-right-up-long-line flex items-center justify-center text-[10px]  border border-white w-5 h-5 rounded-full bg-transparent text-white  '  ></i>
                            <h4 className=' text-[9px] text-white' >EXPLORE</h4>
                        </div>
                    </div>
                </div>
                <div className=' w-1/2 h-62.5 overflow-hidden   '>
                    <img className=' w-full h-full object-cover object-cente rounded-md  ' src={image4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main
