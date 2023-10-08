import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const FooterTop = () => {
	const router = useRouter();

	const addText = () => {
		document
			.querySelector("#text")
			.insertAdjacentHTML(
				"beforeend",
				"<span>Got a gig for me? - Contact me</span>",
			);
	};

	useEffect(() => {
		const interVal = setInterval(() => {
			addText();
		}, 1000);

		return () => clearInterval(interVal);
	}, []);

	return (
		<div className='md:mt-[114px] mt-[60px]  '>
			<h1 className='text-[#505050]  text-[30px] leading-[46px]  tracking-[1.14px]  md:text-[56px] md:leading-[64px] md:tracking-[-1.7px] neue-reg text-center font-[300] '>
				Get in touch - Get in touch
			</h1>

			<div className='bg-[#212121] w-full h-full rotate-[-5deg] scroll-container '>
				<div
					id='text'
					className=' whitespace-nowrap text-white leading-[12px] neue-md tracking-[-0.36px] h-fit space-x-[120px]  w-full inline-flex py-[10px]  translate-x-[-1000px] '
				>
					<span>Got a gig for me? - Contact me</span>
					<span>Got a gig for me? - Contact me</span>
					<span>Got a gig for me? - Contact me</span>
					<span>Got a gig for me? - Contact me</span>
					<span>Got a gig for me? - Contact me</span>
					<span>Got a gig for me? - Contact me</span>
				</div>
			</div>
		</div>
		// </div>
	);
};

export default FooterTop;
