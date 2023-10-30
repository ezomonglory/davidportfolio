import React from "react";
import Button from "./Button";

const HeroMiddle = () => {
	return (
		<div className=' lg:w-[70%] w-full pb-[40px] md:pb-0 mx-auto flex flex-col md:flex-row md:justify-between items-start'>
			<div className='flex flex-col md:space-y-[24px] space-y-[8px] order-2 md:order-1'>
				<h1 className='text-[#141414] md:text-[110px]  text-[60px] leading-[54px] md:leading-[96px] tracking-[-2px] md:tracking-[-4px] neue-md '>
					Product <br /> Designer{" "}
				</h1>
				<div className='flex flex-col space-y-[16px]'>
					<p className='md:text-[#505050] neue-md md:text-[18px] tracking-[-0.5px] text-[16px] md:leading-[28px] leading-[24px]  w-[277px] md:w-[500px] '>
						Fancy having you here, I’m David. Currently available for design
						projects, you can reach me via dayviid02@gmail.com
					</p>
					<Button text='Contact' href='mailto:dayviid02@gmail.com' />
				</div>
			</div>

			<div
				className='bg-[#D9D9D9] mb-[24px] w-[146px] h-[170px] md:h-[315px] md:w-[281px] rounded-[0.5px] mx-[4px] order-1 md:order-2 '
				style={{
					backgroundImage: 'url("/Picture Web.png")',
					backgroundPosition: "contain",
					backgroundSize: "cover",
				}}
			></div>
		</div>
	);
};

export default HeroMiddle;
