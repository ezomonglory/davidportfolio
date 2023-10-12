import React, { useState } from "react";

const About = () => {
	const [show, setShow] = useState(false);

	return (
		<div className='flex flex-col  justify-between  md:flex-row mx-[16px] md:mx-[70px] border-[1px] md:border-t-[#D7D7D7] border-transparent md:pt-[40px] md:mt-[56px] mt-[20px] pt-[32px]  '>
			<div className='md:w-[50%] flex space-y-[24px]  flex-col w-full  '>
				<h1 className='text-[#212121] neue-md tracking-[-1px] text-[30px] md:text-[46px] leading-[34px] md:leading-[50px]   mb-[8px]  '>
					Hi there, <br />
					i’m David Otu
				</h1>

				<a href="/DAVID OTU.pdf" download="David Otu resume" className='bg-gradient font-[18px] !rounded-[8px] h-[48px]  items-center justify-center w-[140px] leading-[28px] tracking-[-0.5px] hidden md:flex'>
					Resume
				</a>
			</div>

			<div className='md:w-[50%] space-y-[24px] '>
				<p className='text-[#505050] text-justify  md:text-left neue-reg md:text-[16px] md:leading-[28px] tracking-[-1%] md:tracking-[0px] text-[14px] leading-[24px] mb-[8px] md:hidden   '>
				
					My journey commenced as a meme enthusiast, where I{" "}
					<br className='md:hidden' />
					honed my creativity <br className='hidden md:block' />
					using Corel Draw during secondary school. Over time, I progressed into
					a
					<br className='hidden md:block' /> seasoned graphic{" "}
					<br className='md:hidden' /> designer, delving into presentation
					design.
					<br className='md:hidden' />{" "}
					<span className='!mt-[8px] inline-block  md:mt-0 '>
						{" "}
						Today, I specialize {" "}						
						in product design, continuously refining{" "}
						<br className='md:hidden' /> my skills. My latest exploration is in
						<br className='hidden md:block' /> {" "}
						motion design, a <br className='md:hidden' /> passion I pursue
						alongside my professional endeavors.
					</span>
				</p>
				{/* <div className='border-[1px] border-[#e22] rounded-[24px] md:px-[20px] md:py-[10px] px-[24px] py-[10px] md:text-[18px] neue-md md:leading-[28px] md:tracking-[-0.54px] text-[#e22]  space-x-[8px] items-center inline-flex  md:hidden w-max '>
					<p>Resume</p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='22'
						height='16'
						viewBox='0 0 22 16'
						fill='none'
					>
						<g clip-path='url(#clip0_197_2580)'>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M0.0136719 7.05196L17.857 7.0663C15.5482 6.17012 13.9915 3.67791 13.5859 0.465143L15.4938 0.015625C15.9062 4.40247 17.9829 6.69217 21.3228 7.07791V8.85827C18.0104 9.18859 15.787 11.7482 15.4953 15.9831L13.5806 15.4767C13.9879 12.469 15.2231 9.92158 17.8585 8.86025L0.0136719 8.87891V7.05193V7.05196Z'
								fill='#EE2222'
								stroke='#EE2222'
								stroke-width='0.0361672'
								stroke-miterlimit='22.9256'
							/>
						</g>
						<defs>
							<clipPath id='clip0_197_2580'>
								<rect width='21.3333' height='16' fill='white' />
							</clipPath>
						</defs>
					</svg>
				</div> */}

				<p className='text-[#787878] hidden md:flex neue-reg md:text-[16px] md:leading-[28px] tracking-[-1%] md:tracking-[0px] text-[14px] leading-[24px] mb-[8px]  md:items-end md:justify-end   '>
					
					My journey commenced as a meme enthusiast, where I{" "}
					<br className='md:hidden' /> honed my creativity{" "}
					<br className='hidden lg:block' />
					using Corel Draw during secondary <br className='lg:hidden' /> school.
					Over time, I progressed into a
					<br className='hidden lg:block' />
					seasoned graphic <br className='md:hidden' /> designer, delving into
					presentation design. Today, <br className='md:hidden' />
					I specialize
					<br className='hidden lg:block' />
					in product design, continuously refining my{" "}
					<br className='md:hidden' /> skills. My latest exploration is in
					<br className='hidden lg:block' />
					motion design, a passion <br className='md:hidden' />I pursue
					alongside my professional endeavors.
				</p>

				<a href="/DAVID OTU.pdf" download="David Otu resume" className='bg-gradient font-[18px] !rounded-[8px] h-[48px]  items-center justify-center w-[140px] leading-[28px] tracking-[-0.5px] flex md:hidden '>
					Resume
				</a >
			</div>
		</div>
	);
};

export default About;
