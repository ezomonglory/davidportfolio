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
			<div className='absolute inset-0 flex items-start justify-start '>
				{/* Horizontal Line */}
				<div className='absolute w-full  mt-[32px]  h-[1px] bg-[#D7D7D7]'></div>

				{/* Vertical Line */}
				<div className='absolute h-full w-[1px] ml-[16px] md:ml-[60px] bg-[#D7D7D7]'></div>
				<div className='absolute h-full w-[1px] right-0 mr-[16px] md:mr-[60px] bg-[#D7D7D7]'></div>
			</div>

			<div className=' flex mt-[32px] '>
				<div className=' w-[16px] md:w-[80px] h-full  '> </div>
				<div className=' w-full border-transparent '>
					<HeroTop />
					<HeroMiddle />
				</div>
				<div className=' w-[16px] md:w-[80px] h-full  '> </div>
			</div>
			<div className=' flex mx-[16px] md:mx-[60px]'>
				{/* <div className=' w-[16px] md:w-[80px] h-full  border-r-[#D7D7D7] border-[1.5px] border-transparent ' ></div> */}
				<HeroFooter />
				{/* <div className=' w-[16px] md:w-[80px] h-full border-l-[#D7D7D7]  border-[1.5px] border-transparent  ' ></div> */}
			</div>

			<div className=' flex mb-[120px] '>
				{/* <div className=' w-[16px] md:w-[80px] h-full  border-r-[#D7D7D7] border-[1.5px] border-transparent ' ></div>
                {/* <LineBottom />                  */}
				{/* <div className=' w-[16px] md:w-[80px] h-full border-l-[#D7D7D7]  border-[1.5px] border-transparent  ' ></div> */}
			</div>
		</div>
	);
};

export default Hero;
