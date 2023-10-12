import React from "react";
import HeroTop from "./HeroTop";
import HeroMiddle from "./HeroMiddle";
import HeroFooter from "./HeroFooter";
// import LineTop from './LineTop'
import LineBottom from "./LineBottom";
import IntersectingLines from "./IntersectingLines";

const Hero = () => {
	return (
		<div className='overflow-hidden relative'>
			{/* <LineTop />         */}
			<div className='absolute inset-0 flex items-start justify-start '          
            >
				{/* Horizontal Line */}
				<div className='absolute w-full  mt-[32px]  h-[1.5px] bg-[#D7D7D7]'></div>

				{/* Vertical Line */}
				<div className='absolute h-full w-[1.5px] ml-[16px] md:ml-[60px] bg-[#D7D7D7]'></div>
				<div className='absolute h-full w-[1.5px] right-0 mr-[16px] md:mr-[60px] bg-[#D7D7D7]'></div>
			</div>

			<div className=' flex mt-[38px] overflow-hidden '>
				<div className=' w-[16px] md:w-[81px] h-full  '> </div>
				<div className=' w-full border-transparent px-[4px] '>
					<HeroTop />
					
                    <HeroMiddle />
                    
				</div>
				<div className=' w-[16px] md:w-[80px] h-full  '> </div>
			</div>
			<div className=' flex mx-[16px] md:mx-[60px] overflow-hidden relative ' 
            onClick={()=>{
                alert("hell")
            }}
            >
				
				<HeroFooter />
				
			</div>

			<div className=' flex mb-[80px] md:mb-[132px] '>			
			</div>
		</div>
	);
};

export default Hero;
