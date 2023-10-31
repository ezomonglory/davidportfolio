import React from "react";

const Button = ({ text, href, download }) => {
	return download ? (
		<a href={href} download >
			<div className=' border-[1.5px] inline-flex border-[#141414] py-[11px] px-[44px] rounded-full items-center justify-center '>
				<h1 className='text-black neue-md md:text-[18px] me:leading-[26px] tracking-[-0.5px] text-[16px] leading-[25px] '>
					{text}
				</h1>
			</div>
		</a>
	) : (
		<a href={href}>
			<div className=' border-[1.5px] inline-flex border-[#141414] py-[11px] px-[44px] rounded-full items-center justify-center '>
				<h1 className='text-black neue-md md:text-[18px] me:leading-[26px] tracking-[-0.5px] text-[16px] leading-[25px] '>
					{text}
				</h1>
			</div>
		</a>
	);
};

export default Button;
