import React, { useState } from "react";
import Button from "./Button";

const About = () => {
	const [show, setShow] = useState(false);

	return (
		<div className='flex md:flex-row flex-col justify-between md:mt-[150px] mt-[104px] '>
			<h1 className='#505050 md:text-[18px] neue-md md:leading-[28px] tracking-[-0.5px] '>
				David Otu
			</h1>
			<div className='flex flex-col md:flex-row w-full md:w-[80%] justify-between '>
				<div className='flex flex-col justify-between md:w-[50%] order-2 md:order-1 '>
					<h1 className=' leading-[38px] hidden md:block text-[30px] md:leading-[40px] lg:text-[46px] neue-md text-[#141414] lg:leading-[54px]  '>
						My journey commenced as a meme enthusiast.
					</h1>

					<div className='flex flex-col space-y-[8px] mb-[24px] '>
						<p className='text-[#505050] lg:text-[18px] neue-reg md:leading-[28px]  '>
							I honed my creativity using Corel Draw during secondary school to
							create memes, I progressed into a seasoned graphic designer,
							delving into presentation design.
						</p>

						<p className='text-[#505050] lg:text-[18px] neue-reg md:leading-[28px] '>
							Today, i specialize in product design, continuously refining my
							skills. My latest exploration is in motion design, a passion i
							pursue as an hobby.
						</p>
					</div>

					<Button text='Resume' href='/DAVID OTU.pdf' download={true} />
				</div>

				<div
					className=' order-1 md:order-2 md:w-[30%] mb-[10px] '
					// style={{
					// 	backgroundImage: "url('/david.jpg')",
					// 	backgroundSize: "cover",
					// 	backgroundPosition: "cover",
					// }}
				>
					<h1 className=' leading-[38px] block md:hidden text-[30px] md:leading-[40px] lg:text-[46px] neue-md text-[#141414] lg:leading-[54px]  '>
						My journey commenced as a meme enthusiast.
					</h1>
					<img src='/david.jpg' width='100%' height='100%' className="" alt='image' />
				</div>
			</div>
		</div>
	);
};

export default About;
