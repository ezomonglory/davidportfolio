import React from "react";

const About = () => {
	return (
		<div className='flex flex-col  justify-between flex-ccol md:flex-row mx-[16px] md:mx-[70px] border-[1px] md:border-t-[#D7D7D7] border-transparent md:pt-[40px] md:mt-[56px] mt-[20px] pt-[20px]  '>
			<div className='md:w-[50%] flex space-y-[24px]  flex-col w-full  '>
				<h1 className='text-[#212121] libre-reg text-[30px] leading-[38px]  md:text-[46px] md:leading-[54px] md:tracking-[-2.7px] libre-reg  '>
					Hi there, <br />
					i’m David Otu
				</h1>

				<div className='bg-gradient md:inline-flex w-[100px] hidden  '>Resume</div>
			</div>

			<div className='md:w-[50%] space-y-[24px] '>
				<p className='text-[#505050] neue-reg md:text-[18px] md:leading-[26px] text-[14px] leading-[22px]   '>
					I started out as a meme enthusiast creating funny visuals when i
					discovered Corel draw during my secondary school days. Overtime, i
					ascended the ranks and evolved into a professional graphic designer.
					My journey continued as i sojourned into presentation design and
					ultimately found myself immersed in the captivating world of product
					design. Currently, i am exploring motion design as a hobby. But,
					beyond the world of design, i live a bubbly life and you’ll often
					catch me binge watching movies and actively indulging my friends in
					fun activities.
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

				<div className='bg-gradient inline-block !px-[42px] md:hidden '>Resume</div>
			</div>
		</div>
	);
};

export default About;
