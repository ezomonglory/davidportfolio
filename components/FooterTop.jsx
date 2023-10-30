import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const FooterTop = () => {
	return (
		<div className='flex justify-between items-end md:py-[40px] md:px-[64px] py-[32px] px-[16px]'>
			<div className='flex flex-col space-y-[8px]'>
				<a className='text-[#141414] md:text-[18px] leading-[24px] md:leading-[28px] tracking-[-0.5px] neue-md '>
					Twitter
				</a>

				<a className='text-[#141414] md:text-[18px] leading-[24px] md:leading-[28px] tracking-[-0.5px] neue-md '>
					Instagram
				</a>

				<a className='text-[#141414] md:text-[18px] leading-[24px] md:leading-[28px] tracking-[-0.5px] neue-md '>
					LinkedIn
				</a>
			</div>

			<a
				href='https://www.ezomonglory.codes'
				target='_blank'
				className='text-[#141414] md:text-[18px] leading-[24px] md:leading-[28px] tracking-[-0.5px] neue-md '
			>
				Developed by E.G
			</a>
		</div>
	);
};

export default FooterTop;
