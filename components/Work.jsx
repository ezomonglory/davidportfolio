import React from "react";
import { Workdata } from "../data";
import { useRouter } from "next/navigation";

const Work = () => {
	const router = useRouter();

	return (
		<div className='bg-[#F5F5F5] px-[16px] pt-[32px] pb-[80px] md:pb-[132px] md:pt-[40px] md:px-[70px]  grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[32px] relative z-20 '>
			{Workdata.map((work, i) => (
				<div
					key={i}
					className='flex flex-col space-y-[16px] cursor-pointer '
					onClick={() => {
						router.push(`/${work.id}`);
					}}
				>
					{/* <div className='bg-[#D9D9D9] rounded-[8px] w-full h-[280px] md:h-[435px]  ' 
                // style={{
                //     backgroundImage:`url('/${work.image}')`,
                //     backgrounPosition:"contain",
                //     backgroundSize:"contain",
                //     backgroundRepeat:"no-repeat"
                // }}
                >
                    </div> */}
					<img className='w-full h-full' src={`${work.image}`} />
					<div>
						<h1 className='text-[20px] neue-md leading-[28px] tracking-[-0.5px]  text-[#212121]  '>
							{work.name}
						</h1>

						<p className='text-[#787878] neue-reg text-[14px] '>{work.text}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Work;
