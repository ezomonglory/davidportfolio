import React from "react";

const HeroFooter = () => {
	return (
		<div className='flex flex-col md:flex-row items-start md:items-center justify-between border-[1px] md:border-[1.5px] border-t-[#D7D7D7] border-b-[#D7D7D7] border-transparent md:px-[16px] md:py-[24px] py-[24px] px-[8px] space-y-[32px] md:space-y-0 w-full   '>
			<p className='md:text-[#505050] neue-md md:text-[18px] tracking-[-0.5px] text-[16px] leading-[24px]  '>
				Fancy having you here, i’m David. Currently <br className="md:hidden" /> open for roles/gigs{" "}
				<br className='hidden md:block' />
				you can reach me via <br className="md:hidden" /> dayviid02@gmail.com
			</p>

			<div className='bg-gradient font-[18px] !rounded-[8px] h-[48px] leading-[28px] tracking-[-0.5px] '>Contact me</div>
		</div>
	);
};

export default HeroFooter;
