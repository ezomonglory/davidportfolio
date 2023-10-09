/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Head from "next/head";
import HeroTop from "../components/HeroTop";
import ProjectText from "../components/ProjectText";
import Footer from "../components/Footer";
import ProjectFooter from "../components/ProjectFooter";

const CSC21 = () => {
	const project = {
		name: "CSC 2021-2022",
		id: 5,
		text: "Digital Yearbook",
		image: "CSC Web.png",
	};

	return (
		<>
			<Head>
				<title> {project.name} </title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='overflow-hidden md:pb-[40px] pb-[10px] '>
				{/* <hr className='w-screen h-[1px] md:h-[1.5px] bg-[#D7D7D7] mt-[34px] ' /> */}
				<div className='md:mx-[80px] mx-[16px] mt-[34px]  '>
					<div className=' flex flex-col gap-[24px] md:mb-[14px]  md:gap-[60px]   '>
						<HeroTop />
						<div className='md:mx-[60px] mx-[16px]  '>
							<div className='flex flex-col  items-start justify-between '>
								<div className='flex flex-col space-y-[24px] mb-[16px]  border-transparent border-b-[#D7D7D7] border-[1.5px] pb-[24px] w-full'>
									<h1 className='text-black text-[30px] md:text-[46px] leading-[32px] md:leading-[54px] md:tracking-[-2.76px] libre-reg '>
										{" "}
										{project.name}{" "}
									</h1>
								</div>

								{/* <div className='border-[1px] border-[#e22] rounded-[24px] md:px-[20px] md:py-[10px] px-[24px] py-[10px] md:text-[18px] neue-md md:leading-[28px] md:tracking-[-0.54px] text-[#e22]  space-x-[8px] items-center hidden md:flex w-max  '>
									<p>Vist Site</p>
									{redArrWeb}
									{redArrMobile}
								</div> */}
								<div className='flex flex-col space-y-[4px] '>
									<div className='flex space-x-2 items-center'>
										<h1 className=' text-[14px] leading-[20px] tracking-[-0.6px] md:text-[18px] text-black md:leading-[28px] md:tracking-[-1.08px] libre-reg  '>
											Role:
										</h1>
										<p className='text-[#787878] text-[12px] leading-[22px]  neue-reg md:text-[16px] md:leading-[24px] md:tracking-[-0.16px]  '>
											{" "}
											UI Designer{" "}
										</p>
									</div>
									<div className='flex space-x-2 items-center'>
										<h1 className=' text-[14px] leading-[20px] tracking-[-0.6px] md:text-[18px] text-black md:leading-[28px] md:tracking-[-1.08px] libre-reg  '>
											Deliverables:
										</h1>
										<p className='text-[#787878] text-[12px] leading-[22px]  neue-reg md:text-[16px] md:leading-[24px] md:tracking-[-0.16px]  '>
											{" "}
											Website design{" "}
										</p>
									</div>
								</div>

								{/* <h1 className='text-gradient leading-[28px] neue-md cursor-pointer font-[500] mt-[12px] '>
									View Full Case Studies
								</h1> */}

								{/* <div className='border-[1px] border-[#e22] rounded-[24px] md:px-[20px] md:py-[10px] px-[24px] py-[10px] md:text-[18px] neue-md md:leading-[28px] md:tracking-[-0.54px] text-[#e22]  space-x-[8px] items-center flex md:hidden mt-[12px] w-max  '>
									<p>Vist Site</p>
									{redArrWeb}
									{redArrMobile}
								</div> */}
							</div>
						</div>
					</div>
					<div className='md:mx-[60px] flex flex-col space-y-[48px] '>
						<div className='   bg-[#D9D9D9] rounded-[2px]  my-[20px]  '>
							<img src='/CSC Web.png' alt='dd' className='w-full' />
						</div>

						<div className='  flex flex-col space-y-[32px] '>
							<ProjectText
								heading='Overview'
								text='I came up with an idea to create a digital experience for my class where we had a website that housed our memories in form of pictures and videos and luckily, it synced with the fact that it was my final academic year in school and there was a list of activities they had planned for the final year week otherwise known as FYB Week.'
							/>
							<div className='bg-gradient w-[160px] text-center cursor-pointer '>
								View Site
							</div>
						</div>

						<div className=''>
							<ProjectText
								heading='The Concept'
								text='The idea was aimed at preserving the memories of the last days spent together with the website serving as an archive of some sort. To realize this idea, I collaborated with individuals from various fields ranging from web development to brand designing, photography and project management. The initial idea was to have just a gallery section where pictures were featured but we decided to improve the experience by adding a yearbook section, which included pictures taken by the photographers I collaborated with. These pictures were captioned by quotes filled by my course mates.'
							/>
						</div>

						<div className='flex flex-col space-y-[16px]'>
							<ProjectText
								heading='Design Preview'
								text='Note: Visit the website to get the full experience'
							/>
							<div className='bg-gradient w-[160px] text-center cursor-pointer '>
								View Site
							</div>
						</div>

						<div  >
							<h1 className='text-[#212121] neue-md md:text-[24px] mb-[12px] md:leading-[32px] md:tracking-[-0.5px] '>
								Collaborators
							</h1>

							<p className='text-[#646464] neue-reg  mb-[8px] '>
								Ezomon Glory - Frontend Developer
							</p>
							<p className='text-[#646464] neue-reg  mb-[8px] '>
								Blessing Ojadua - Content Writer/PM
							</p>
							<p className='text-[#646464] neue-reg  mb-[8px] '>
								Daniel Kainebi - Photographer
							</p>
							<p className='text-[#646464] neue-reg  mb-[8px] '>
								Victor Akhere - Photographer
							</p>
							<p className='text-[#646464] neue-reg  '>
								Desire Egbon - Brand Designer
							</p>
						</div>

						<div>
							<ProjectFooter />
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default CSC21;