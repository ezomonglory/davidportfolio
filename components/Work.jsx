import React from "react";
import { Workdata } from "../data";
import { useRouter } from "next/navigation";

const Work = () => {
	const router = useRouter();

	return (
		<div className="md:py-[80px]" >
			<h1 className="md:text-[30px] text-[24px] leading-[30px]  text-[#505050] neue-reg md:leading-[38px] tracking-[-0.5px] md:w-[550px] md:mb-[56px] mb-[40px] w-[300px] " >
				The featured projects include fun projects, client work, and
				explorations.
			</h1>
			<div className=' works gap-y-[32px] md:gap-y-[100px] gap-x-[24px] '>
				{Workdata.map((work, i) => (
					<div key={i} className={work.style}>
						<div
							className='flex flex-col h-full space-y-[16px] cursor-pointer '
							onClick={() => {
								if (i !== 5) {
									router.push(`/${work.id}`);
								}
							}}
						>
							<img className='w-full h-full' src={`${work.image}`} />
							<div>
								<h1 className='text-[20px] neue-md leading-[28px] tracking-[-0.5px]  text-[#212121]  '>
									{work.name}
								</h1>

								<p className='text-[#787878] neue-reg text-[14px] '>
									{work.text}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Work;
