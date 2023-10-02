import React from 'react'
import HeroTop from './HeroTop'
import HeroMiddle from './HeroMiddle'
import HeroFooter from './HeroFooter'
import LineTop from './LineTop'
import LineBottom from './LineBottom'

const Hero = () => {
  return (
    <div className='overflow-hidden' >
         <LineTop />        
   
            <div className=' flex ' >
                <div className=' w-[16px] md:w-[80px] h-full  ' > </div>
                    <div className='border-l-[#D7D7D7] border-r-[#D7D7D7] border-[1.5px] w-full border-transparent ' > 
                        <HeroTop />
                        <HeroMiddle/>
                    </div>
                    <div className=' w-[16px] md:w-[80px] h-full  ' >  </div>
            
            </div>
            <div className=' flex ' >
                <div className=' w-[16px] md:w-[80px] h-full  border-r-[#D7D7D7] border-[1.5px] border-transparent ' ></div>
                <HeroFooter />
                <div className=' w-[16px] md:w-[80px] h-full border-l-[#D7D7D7]  border-[1.5px] border-transparent  ' ></div>
            </div>

            <div className=' flex ' >
                <div className=' w-[16px] md:w-[80px] h-full  border-r-[#D7D7D7] border-[1.5px] border-transparent ' ></div>
                <LineBottom />                
                <div className=' w-[16px] md:w-[80px] h-full border-l-[#D7D7D7]  border-[1.5px] border-transparent  ' ></div>
            </div>
    </div>
  )
}

export default Hero