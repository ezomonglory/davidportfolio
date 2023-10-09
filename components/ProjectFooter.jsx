import { useRouter } from "next/navigation";
import React from "react";

const ProjectFooter = ({ prev, next }) => {
	const router = useRouter();

	return (
		<div className='flex justify-between items-center mt-[16px]'>
			<div
				className='flex space-x-[8px] items-center'
				onClick={() => {
					router.push(`/${prev}`);
				}}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
				>
					<circle cx='12' cy='12' r='10' stroke='#D7D7D7' stroke-width='1.5' />
					<path
						d='M15 15L9 9M9 9H13.5M9 9V13.5'
						stroke='#D7D7D7'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
				<h1 className='text-[#D7D7D7] md:leading-[28px] md:text-[18px] neue-md tracking-[-0.5px] '>
					Previous Project{" "}
				</h1>
			</div>

			<div
				className='flex space-x-[8px] items-center'
				onClick={() => {
					router.push(`/${next}`);
				}}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
				>
					<circle cx='12' cy='12' r='10' stroke='#212121' stroke-width='1.5' />
					<path
						d='M9 15L15 9M15 9H10.5M15 9V13.5'
						stroke='#212121'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
				<h1 className='text-[#212121] md:leading-[28px] md:text-[18px] neue-md tracking-[-0.5px] '>
					Next Project{" "}
				</h1>
			</div>
		</div>
	);
};

export default ProjectFooter;
