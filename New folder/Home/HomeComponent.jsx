/** @format */

import React from "react";
import BannerComponent from "./BannerComponent";
import HeroComponent from "./HeroComponent";
import CourseRepsComponent from "./CourseRepsComponent";
import RandomImageComponent from "./RandomImageComponent";

function HomeComponent(data) {
	return (
		<div>
			<HeroComponent />
			<CourseRepsComponent />
			<BannerComponent />
			<RandomImageComponent data={data} />
		</div>
	);
}

export default HomeComponent;
