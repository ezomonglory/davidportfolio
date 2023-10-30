import React from "react";
import HeroTop from "./HeroTop";
import HeroMiddle from "./HeroMiddle";
import HeroFooter from "./HeroFooter";
// import LineTop from './LineTop'
import LineBottom from "./LineBottom";
import IntersectingLines from "./IntersectingLines";

const Hero = () => {
	return (
		<div
			className=' w-full py-[24px] px-[16px] mb-[41px] flex flex-col space-y-[44px] md:space-y-[125px] rounded-[28px] '
			style={{
				backgroundImage: 'url("/Background.jpg")',
				backgroundPosition: "cover",
				backgroundSize: "cover",
			}}
		>
			<HeroTop />

			<HeroMiddle />

            <div className="text-center hidden md:block" >
                Scroll Down
            </div>
		</div>
	);
};

export default Hero;
