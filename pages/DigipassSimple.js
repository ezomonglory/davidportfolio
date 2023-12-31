/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Head from "next/head";
import HeroTop from "../components/HeroTop";
import ProjectText from "../components/ProjectText";
import Footer from "../components/Footer";
import ProjectFooter from "../components/ProjectFooter";
import Link from "next/link";

const DigipassSimple = () => {
	const project = {
		name: "Digipass",
		id: 2,
		text: "Attendance Management System",
		image: "AttendX Web.png",
	};

	return (
		<>
			<Head>
				<title> {project.name} </title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='overflow-hidden md:pb-[24px] pb-[24px] '>
				{/* <hr className='w-screen h-[1px] md:h-[1.5px] bg-[#D7D7D7] mt-[34px] ' /> */}
				<div className='md:mx-[80px] mx-[16px] mt-[34px]  '>
					<div className=' flex flex-col gap-[24px] md:mb-[24px]  md:gap-[60px]   '>
						<HeroTop />
						<div className='md:mx-[60px]   '>
							<div className='flex flex-col  items-start justify-between space-y-[8px] md:space-y-0 '>
								<div className='flex flex-col space-y-[24px] mb-[16px]  border-transparent border-b-[#D7D7D7] border-[1.5px] pb-[16px] md:pb-[24px] w-full'>
									<h1 className='text-black text-[38px] md:text-[46px] leading-[46px] md:leading-[54px] tracking-[-2px] libre-reg '>
										{" "}
										{project.name}{" "}
									</h1>
								</div>

								<div className='flex flex-col space-y-[4px] md:space-y-[8px] '>
									<div className='flex space-x-2 items-center'>
										<h1 className=' text-[16px] leading-[24px] tracking-[-0.01px] md:text-[18px] text-[#212121] md:leading-[24px] md:tracking-[-0.1px] neue-md  '>
											Role:
										</h1>
										<p className='text-[#212121] text-[16px] leading-[24px]  neue-reg md:text-[16px] md:leading-[24px] md:tracking-[-0.1px] neue-reg  '>
											{" "}
											UI Designer, Researcher{" "}
										</p>
									</div>
									<div className='flex space-x-2 items-center'>
										<h1 className=' text-[16px] leading-[24px] tracking-[-0.01px] md:text-[18px] text-[#212121] md:leading-[24px] md:tracking-[-0.1px] neue-md  '>
											Deliverables:
										</h1>
										<p className='text-[#212121] text-[16px] leading-[24px]  neue-reg md:text-[16px] md:leading-[24px] md:tracking-[-0.1px] neue-reg  '>
											{" "}
											Dashboard Design, App Design{" "}
										</p>
									</div>
								</div>

								<Link
									href='/DigipassFull'
									className='text-gradient leading-[28px] neue-md cursor-pointer font-[500] md:!mt-[16px] mt-[24px] '
								>
									View Full Case Study
								</Link>
							</div>
						</div>
					</div>
					<div className='md:mx-[60px] flex flex-col space-y-[40px] md:space-y-[48px] '>
						<div className='   rounded-[2px]  my-[20px]  '>
							<img src='/DigiPass Web.png' alt='dd' className='w-full' />
						</div>

						<div className='  flex flex-col  '>
							<ProjectText
								heading='Overview'
								text='As a final year university student majoring in Computer Science, for my final year project I focused on enhancing the verification process for granting students access to the examination hall within my department'
							/>
						</div>

						<div className=''>
							<ProjectText
								heading='The Existing System'
								text='In previous academic sessions, the Department used paper-based examination passes to verify students before allowing them into the exam hall. The passes contained important student details like their name, academic level, and registered courses.'
							/>
						</div>

						<div className=''>
							<ProjectText
								heading='The Goal'
								text="Based on the insights I gathered, I formulated the project's goal, which is to enhance the methods of student identification during examinations within my department."
							/>
						</div>

						<div className='flex flex-col space-y-[8px] md:space-y-[16px]'>
							<ProjectText
								heading='Approaching The Problem'
								text='The proposed system was named "Digipass." This name is a fusion of "Digital" and "Pass," signifying its role in revolutionizing the exam screening process. Digipass harnesses the potentials of Near Field Communication (NFC) Technology to enhance this process.'
							/>

							
						</div>

						<div className=' flex flex-col space-y-[24px] '>
							<ProjectText
								heading='Registering Students'
								text='Before students can be verified, their details must have been registered on the dashboard to link the NFC card with their information before they are assigned an NFC card. Part of the registration process on the dashboard includes entering the NFC card number assigned to the NFC card. Please refer to the video below for a visual demonstration.'
							/>

							<div>
								<div className=' bg-[#D9D9D9] rounded-[2px]   video-container  '>
									<video src='/First.mp4' controls></video>
								</div>
								<h1 className='neue-reg text-[#646464] neue-md mt-[16px] '>
									Obtaining the NFC card serial number from the live mobile
									authenticator.
								</h1>
							</div>

							<div>
								<div className=' bg-[#D9D9D9] rounded-[2px]   video-container  '>
									<video src='/Second.mp4' controls></video>
								</div>
								<h1 className='neue-reg text-[#646464] neue-md mt-[16px] '>
									Registering the NFC Card on the live dashboard.
								</h1>
							</div>
						</div>

						<div className=' flex flex-col space-y-[32px] '>
							<ProjectText
								heading='Verifying Students'
								text="The card displays the same information as the traditional exam pass used by my department. The key distinction lies in its automated and highly secure approach to verifying student identities before granting them access to the examination hall.
                                If the student's identity is confirmed, their photograph matches their appearance, and the course exam they intend to write aligns with their registered courses, they can then be clocked in for that course. Please refer to the video below for a visual demonstration"
							/>

							<div>
								<div className=' bg-[#D9D9D9] rounded-[2px]   video-container  '>
									<video src='/Third.mp4' controls></video>
								</div>
								<h1 className='neue-reg text-[#646464] neue-md mt-[16px] '>
									Scanning the NFC Card to verify the student’s detail
								</h1>
							</div>
						</div>

						<div className=' flex flex-col space-y-[32px] '>
							<ProjectText
								heading='Managing Exam Attendance'
								text='The system records students as they clock in to take an exam, and this information is reflected on the dashboard.
                                To enhance the security of the platform, once a student has clocked in for an exam, they cannot clock in for another exam unless they have previously clocked out from the previous exam. Please refer to the video below for further clarification.'
							/>

							<div>
								<div className=' bg-[#D9D9D9] rounded-[2px]   video-container  '>
                                    <video src="/Fourth.mp4" controls></video>
                                </div>
								<h1 className='neue-reg text-[#646464] neue-md mt-[16px] '>
									Clocking in a student that has already been clocked in
								</h1>
							</div>
						</div>

						<div>
							<h1 className='text-[#212121] neue-md md:leading-[32px] md:text-[24px] mb-[24px] '>
								Application Design
							</h1>
							<div className='bg-[#F9F9F9] rounded-[4px] md:py-[64px] md:px-[81px] '>
								<img
									src='/Application Design Digipass Web.png'
									alt='Application Design Digipass Web'
									className='w-full'
								/>
							</div>
						</div>

						<div>
							<h1 className='text-[#212121] neue-md md:leading-[32px] md:text-[24px] mb-[24px]  '>
								Dashboard Design
							</h1>
							<div className='bg-[#F9F9F9] rounded-[4px] md:py-[64px] md:px-[81px] '>
								<img
									src='/Dashboard design Digipass Web.png'
									className='w-full'
								/>
							</div>
						</div>

						<div className='!md:mt-[64px] !mt-[48px] '>
							<ProjectFooter prev='null' next='/AttendX' />
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default DigipassSimple;
