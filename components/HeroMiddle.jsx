import React from "react";

const HeroMiddle = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-start md:items-end  py-[90px] gap-[16px]  relative '>
			<h1 className='text-[#212121] md:text-[146px] md:tracking-[-8.76px] text-[68px] leading-[65px] md:leading-[124px] tracking-[-6%] order-2 md:order-1 libre-reg protext mx-[4px] '>
				Product <br /> Designer.{" "}
			</h1>

			<div
				className='bg-[#D9D9D9]  h-[187px] w-[152px] rounded-[0.5px] mx-[4px] order-1 md:order-2 '
				style={{
					backgroundImage: 'url("/Picture Web.png")',
					backgroundPosition: "contain",
					backgroundSize: "cover",
				}}
			></div>

			<div className='absolute  w-[50px] h-[50px] flex items-start justify-start md:left-[-16px] smallbox  left-[-1px] bottom-[-2px] '>
				{/* Horizontal Line */}
				<div className='absolute w-[50px]  h-[1.5px] bg-[#D7D7D7]'></div>

				<div className='absolute h-[50px] w-[1.5px] right-0 bg-[#D7D7D7]'></div>				
				{/* Vertical Line */}
			</div>
		</div>
	);
};

export default HeroMiddle;
