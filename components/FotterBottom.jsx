import React, { useEffect, useState } from "react";
import { ArrowTopSvg, behanceSvg, igSvg, linkeinsvg } from "../data";

const FotterBottom = () => {
	

	return (
		<div className='flex justify-between items-end md:items-center flex-row mx-[16px] md:mx-[70px] border-[1px] border-t-[#D7D7D7] border-transparent pt-[40px] mb-[24px] md:mb-[54px] mt-[40px] md:mt-[80px] '>
			<div className='flex flex-col md:flex-row gap-y-[12px] space-x-[8px] md:space-y-0   md:space-x-[8px] md:w-[50%] '>
				<a
                href="mailto:Dayviid02@gmail.com"
                target="_blank"
                className='text-[#505050] md:text-[18px] md:leading-[28px] neue-reg flex items-center justify-center bg-[#f5f5f5] rounded-[24px] w-max px-[16px] py-[8px] order-2 md:order-1 '>
					dayviid02@gmail.com
				</a>

				<div className='flex space-x-[8px] w-full order-1 md:order-2  md:mt-0 '>
					<a 
                    href="https://www.linkedin.com/in/david-otu-62081a181?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEM0U%2FP9%2BTXu79FXnYxHzRA%3D%3D"
                    target="_blank"
                    className='bg-[#f5f5f5] rounded-full w-ma flex w-[52px] h-[52px] items-center justify-center  '>
						{linkeinsvg}
					</a>

					<a 
                    href="https://www.behance.net/davidotu1"
                    target="_blank"
                    className='bg-[#f5f5f5] rounded-full w-[52px] h-[52px] flex overflow-hidden items-center justify-center  '>
						{behanceSvg}
					</a>

					<a 
                    href="https://www.instagram.com/dayvidotu/"
                    target="_blank"
                    className='bg-[#f5f5f5] rounded-full w-[52px] h-[52px] flex overflow-hidden items-center justify-center  '>
						{igSvg}
					</a>
				</div>
			</div>
			
};

export default FotterBottom;
