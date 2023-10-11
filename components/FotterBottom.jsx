import React, { useEffect, useState } from "react";
import { ArrowTopSvg, behanceSvg, igSvg, linkeinsvg } from "../data";

const FotterBottom = () => {
	const [location, setLocation] = useState(true);
	useEffect(() => {     
		if (window.location.pathname === "/") {
			setLocation(false);
		}
	});

	const [isVisible, setIsVisible] = useState(false);

	// Show the button when the user scrolls down
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Scroll to the top when the button is clicked
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

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
			{/* //{" "}
			<div className='bg-gradient !p-0 rounded-[999px] rounded-full w-[52px] h-[52px] flex items-center justify-center  '>
				// {ArrowTopSvg}
				//{" "}
			</div> */}
			{location ? (
				<div
					className={`${
						isVisible
							? "block fixed bottom-[60px] right-[40px] animate-bounce cursor-pointer "
							: "hidden fixed bottom-[60px] right-[40px] animate-bounce"
					}`}
					onClick={() => {
						scrollToTop();
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='44'
						height='47'
						viewBox='0 0 44 47'
						fill='none'
					>
						<g filter='url(#filter0_d_209_2627)'>
							<circle
								cx='22'
								cy='20.4873'
								r='20'
								fill='url(#paint0_linear_209_2627)'
							/>
						</g>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M21.0506 30.4873L21.065 12.6077C20.167 14.9211 17.6697 16.4811 14.4504 16.8874L14 14.9757C18.3958 14.5624 20.6901 12.4815 21.0767 9.13486H22.8606C23.1916 12.454 25.7564 14.6819 30 14.9741L29.4926 16.8928C26.4787 16.4847 23.9261 15.247 22.8626 12.6062L22.8813 30.4873H21.0506H21.0506Z'
							fill='white'
						/>
						<defs>
							<filter
								id='filter0_d_209_2627'
								x='0'
								y='0.487305'
								width='44'
								height='46'
								filterUnits='userSpaceOnUse'
								color-interpolation-filters='sRGB'
							>
								<feFlood flood-opacity='0' result='BackgroundImageFix' />
								<feColorMatrix
									in='SourceAlpha'
									type='matrix'
									values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
									result='hardAlpha'
								/>
								<feMorphology
									radius='2'
									operator='erode'
									in='SourceAlpha'
									result='effect1_dropShadow_209_2627'
								/>
								<feOffset dy='4' />
								<feGaussianBlur stdDeviation='2' />
								<feColorMatrix
									type='matrix'
									values='0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.08 0'
								/>
								<feBlend
									mode='normal'
									in2='BackgroundImageFix'
									result='effect1_dropShadow_209_2627'
								/>
								<feBlend
									mode='normal'
									in='SourceGraphic'
									in2='effect1_dropShadow_209_2627'
									result='shape'
								/>
							</filter>
							<linearGradient
								id='paint0_linear_209_2627'
								x1='22'
								y1='0.487305'
								x2='22'
								y2='40.4873'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#FF6C1A' />
								<stop offset='1' stop-color='#FF443E' />
							</linearGradient>
						</defs>
					</svg>
				</div>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='44'
					height='47'
					viewBox='0 0 44 47'
					fill='none'
                    className="cursor-pointer"

                    onClick={()=> {
                        scrollToTop()
                    }}
				>
					<g filter='url(#filter0_d_209_2627)'>
						<circle
							cx='22'
							cy='20.4873'
							r='20'
							fill='url(#paint0_linear_209_2627)'
						/>
					</g>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M21.0506 30.4873L21.065 12.6077C20.167 14.9211 17.6697 16.4811 14.4504 16.8874L14 14.9757C18.3958 14.5624 20.6901 12.4815 21.0767 9.13486H22.8606C23.1916 12.454 25.7564 14.6819 30 14.9741L29.4926 16.8928C26.4787 16.4847 23.9261 15.247 22.8626 12.6062L22.8813 30.4873H21.0506H21.0506Z'
						fill='white'
					/>
					<defs>
						<filter
							id='filter0_d_209_2627'
							x='0'
							y='0.487305'
							width='44'
							height='46'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feMorphology
								radius='2'
								operator='erode'
								in='SourceAlpha'
								result='effect1_dropShadow_209_2627'
							/>
							<feOffset dy='4' />
							<feGaussianBlur stdDeviation='2' />
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.08 0'
							/>
							<feBlend
								mode='normal'
								in2='BackgroundImageFix'
								result='effect1_dropShadow_209_2627'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect1_dropShadow_209_2627'
								result='shape'
							/>
						</filter>
						<linearGradient
							id='paint0_linear_209_2627'
							x1='22'
							y1='0.487305'
							x2='22'
							y2='40.4873'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#FF6C1A' />
							<stop offset='1' stop-color='#FF443E' />
						</linearGradient>
					</defs>
				</svg>
			)}
		</div>
	);
};

export default FotterBottom;
