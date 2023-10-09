/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Head from "next/head";
import HeroTop from "../components/HeroTop";
import ProjectText from "../components/ProjectText";
import Footer from "../components/Footer";
import ProjectFooter from "../components/ProjectFooter";

const EzomonGlory = () => {
	const project = {
		name: "Ezomon Glory",
		id: 5,
		text: "Digital Yearbook",
		image: "Ezomon Glory .png",
	};
	return (
		<>
			<Head>
				<title> {project.name} </title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='overflow-hidden md:pb-[24px] pb-[10px] '>
				{/* <hr className='w-screen h-[1px] md:h-[1.5px] bg-[#D7D7D7] mt-[34px] ' /> */}
				<div className='md:mx-[80px] mx-[16px] mt-[34px]  '>
					<div className=' flex flex-col gap-[24px] md:mb-[14px]  md:gap-[60px]   '>
						<HeroTop />
						<div className='md:mx-[60px]   '>
							<div className='flex flex-col  items-start justify-between space-y-[8px] md:space-y-0 '>
								<div className='flex flex-col space-y-[24px] mb-[16px]  border-transparent border-b-[#D7D7D7] border-[1.5px] pb-[16px] md:pb-[24px] w-full'>
									<h1 className='text-black text-[38px] md:text-[46px] leading-[46px] md:leading-[54px] tracking-[-2px] libre-reg '>
										{" "}
										{project.name}{" "}
									</h1>
								</div>

								<div className='flex flex-col space-y-[4px] '>
									<div className='flex space-x-2 items-center'>
												<h1 className=' text-[16px] leading-[24px] tracking-[-0.01px] md:text-[18px] text-[#212121] md:leading-[24px] md:tracking-[-0.1px] neue-md  '>
											Role:
										</h1>
										<p className='text-[#212121] text-[16px] leading-[24px]  neue-reg md:text-[16px] md:leading-[24px] md:tracking-[-0.1px] neue-reg  '>
											{" "}
											UI Designer{" "}
										</p>
									</div>
									<div className='flex space-x-2 items-center'>
												<h1 className=' text-[16px] leading-[24px] tracking-[-0.01px] md:text-[18px] text-[#212121] md:leading-[24px] md:tracking-[-0.1px] neue-md  '>
											Deliverables:
										</h1>
										<p className='text-[#212121] text-[16px] leading-[24px]  neue-reg md:text-[16px] md:leading-[24px] md:tracking-[-0.1px] neue-reg  '>
											{" "}
											Website design{" "}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='md:mx-[60px] flex flex-col space-y-[40px] md:space-y-[48px] '>
						<div className='   bg-[#D9D9D9] rounded-[2px]  my-[20px]  '>
							<img src='/Ezomon Glory.png' alt='dd' className='w-full' />
						</div>

						<div className='  flex flex-col space-y-[32px] '>
							<ProjectText
								heading='Overview'
								text="I had the pleasure of collaborating on the interface design for a  portfolio website with a frontend developer. What made this project particularly enjoyable was the numerous iterations we went through. The initial version (v1) of the portfolio didn't make it online because we came up with a revised version (v2) right after the developer had completed the first version. You can check out the interface design below or click the CTA to visit the site."
							/>
								<div className='bg-gradient !md:p-0 !md:py-[10px] !md:px-[20px] tracking-[-0.01px] md:tracking-normal   w-[140px] h-[48px] flex items-center justify-center !px-[16px]  md:w-[160px] text-center cursor-pointer '>
								View Site
							</div>
						</div>

						<div className='flex flex-col space-y-[24px]'>
							<ProjectText heading='Design Preview' />

							<img src='/Design Preview.png' alt='dd' className='w-full' />

							<ProjectText heading='Ideas that didnt make it to the live site' />

							<div>
								<div className='bg-gray-500 h-[300px] w-full '></div>
								<p className='neue-reg text-[#646464] neue-md mt-[16px] '>
									Loading State
								</p>
							</div>

							<div>
								<div className='bg-gray-500 h-[300px] w-full '></div>

								<p className='neue-reg text-[#646464] neue-md mt-[16px] '>
									Landing Page
								</p>
							</div>
						</div>

						<div className="!md:mt-[64px] !mt-[48px]" >
							<ProjectFooter prev="/AttendX" next="/CSC21" />
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default EzomonGlory;
