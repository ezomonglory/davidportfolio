import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";

const HeroTop = () => {
	const [date, setDate] = useState(new Date());
	const [pathname, setPathname] = useState("");
	const getDate = () => {
		setDate(new Date());
	};

	const Minutes = () => {
		if (date) {
			const minute = date.getMinutes();
			const string = minute.toString();
			if (string.length === 1) {
				return `0${string}`;
			} else {
				return string;
			}
		}
	};

    const Hours = () => {
		if (date) {
			const minute = date.getHours();
			const string = minute.toString();
			if (string.length === 1) {
				return `0${string}`;
			} else {
				return string;
			}
		}
	};

	useEffect(() => {
		setPathname(window.location.pathname);
		setInterval(() => {
			getDate();
		}, 6000);
	}, [date]);

    const router = useRouter()

	return (
		<div className='flex justify-between p-[4px] david'>
			{pathname === "/" ? (
				<h1 className='neue-md md:text-[18px] text-[16px] leading-[24px] tracking-[-0.5px] md:leading-[28px] md:tracking-[-0.5px]   '>
					David Otu
				</h1>
			) : (
				<h1 className='neue-md md:text-[18px] text-[16px] leading-[24px] tracking-[-0.5px] md:leading-[28px] md:tracking-[-0.5px] text-gradient cursor-pointer  '
                onClick={()=> {
                    router.push("/")
                }}
                >
					Exit Project
				</h1>
			)}

			<div className='flex order-1 items-center space-x-[8px] md:space-x-[8px] '>
				<p className='md:leading-[28px] md:tracking-[-0.5px] neue-md text-[16px] leading-[24px]  tracking-[-0.5px] md:text-[18px] text-[#000] order-1 '>
					{Hours()}:{Minutes()}{" "}
				</p>

				<p className='text-[#787878] text-[16px] tracking-[-0.5px] leading-[24px] neue-reg md:text-[18px] md:leading-[28px] md:tracking-[-0.5px] neue-md order-2 '>
					Lagos, NG
				</p>
			</div>
		</div>
	);
};

export default HeroTop;
