import { useRouter } from "next/navigation";
import React from "react";

const ProjectFooter = ({ prev, next }) => {
	const router = useRouter();

	return (
		<div className='flex  justify-between items-center mt-[16px]'>
			<div
				className='flex space-x-[8px] cursor-pointer items-center'
				onClick={() => {
					prev === "null" ? "" : router.push(`${prev}`);
				}}
			>
				{prev !== "null" ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
					>
						<circle
							cx='12'
							cy='12'
							r='10'
							stroke='url(#paint0_linear_318_1427)'
							stroke-width='1.5'
						/>
						<path
							d='M15 15L9 9M9 9H13.5M9 9V13.5'
							stroke='url(#paint1_linear_318_1427)'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_318_1427'
								x1='12'
								y1='2'
								x2='12'
								y2='22'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#FF6C1A' />
								<stop offset='1' stop-color='#FF443E' />
							</linearGradient>
							<linearGradient
								id='paint1_linear_318_1427'
								x1='12'
								y1='9'
								x2='12'
								y2='15'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#FF6C1A' />
								<stop offset='1' stop-color='#FF443E' />
							</linearGradient>
						</defs>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
					>
						<circle
							cx='12'
							cy='12'
							r='10'
							stroke='#D7D7D7'
							stroke-width='1.5'
						/>
						<path
							d='M15 15L9 9M9 9H13.5M9 9V13.5'
							stroke='#D7D7D7'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				)}
				<h1
					className={`${
						prev !== "null"
							? "text-gradient md:leading-[28px] md:text-[18px] neue-md tracking-[-0.5px] "
							: "text-[#D7D7D7] md:leading-[28px] md:text-[18px] neue-md tracking-[-0.5px] "
					}`}
				>
					Previous Project{" "}
				</h1>
			</div>

			<div
				className='flex space-x-[8px] cursor-pointer items-center'
				onClick={() => {
					next === "null" ? " " : router.push(`${next}`);
				}}
			>
				{next !== "null" ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
					>
						<circle
							cx='12'
							cy='12'
							r='10'
							stroke='url(#paint0_linear_318_1432)'
							stroke-width='1.5'
						/>
						<path
							d='M9 15L15 9M15 9H10.5M15 9V13.5'
							stroke='url(#paint1_linear_318_1432)'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_318_1432'
								x1='12'
								y1='2'
								x2='12'
								y2='22'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#FF6C1A' />
								<stop offset='1' stop-color='#FF443E' />
							</linearGradient>
							<linearGradient
								id='paint1_linear_318_1432'
								x1='12'
								y1='9'
								x2='12'
								y2='15'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#FF6C1A' />
								<stop offset='1' stop-color='#FF443E' />
							</linearGradient>
						</defs>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
					>
						<circle
							cx='12'
							cy='12'
							r='10'
							stroke='#D7D7D7'
							stroke-width='1.5'
						/>
						<path
							d='M9 15L15 9M15 9H10.5M15 9V13.5'
							stroke='#D7D7D7'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				)}
				<h1
					className={`${
						next !== "null"
							? "text-gradient md:leading-[28px] md:text-[18px] neue-md tracking-[-0.5px] "
							: "text-[#D7D7D7] md:leading-[28px] md:text-[18px] neue-md tracking-[-0.5px] "
					}`}
				>
					Next Project{" "}
				</h1>
			</div>
		</div>
	);
};

export default ProjectFooter;
