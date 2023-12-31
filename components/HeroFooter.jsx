import React from "react";

const HeroFooter = () => {
	return (
		<div className='flex flex-col md:flex-row items-start md:items-center justify-between border-[1px] md:border-[1.5px] border-t-[#D7D7D7] border-b-[#D7D7D7] border-transparent md:px-[16px] md:py-[24px] py-[24px] px-[8px] space-y-[32px] md:space-y-0 w-full   '>
			<p className='md:text-[#505050] neue-md md:text-[18px] tracking-[-0.5px] text-[16px] leading-[24px] unfancy '>
				Fancy having you here, I’m David. Currently <br className='md:hidden' />{" "}
				open for roles/gigs, <br className='hidden md:block' />
				you can reach me via <br className='md:hidden' /> dayviid02@gmail.com
			</p>

            <p className='md:text-[#505050] neue-md md:text-[18px] tracking-[-0.5px] text-[16px] leading-[24px]  fancy '>
				Fancy having you here, I’m David. Currently{" "}
				open for roles/gigs,
				you can reach me via dayviid02@gmail.com
			</p>

			<a           
				href='mailto:Dayviid02@gmail.com'
				target='_blank'
				className='bg-gradient font-[18px] cursor-pointer !rounded-[8px] h-[48px] flex items-center justify-center w-[140px] leading-[28px] tracking-[-0.5px] contact'
			>
				Contact me
			</a>

            {/* <a 
            onClick={()=>{
                alert("he")
            }}
            href="mailto:dayvid02@gmail.com" >
                Click me
            </a> */}
		</div>
	);
};

export default HeroFooter;
