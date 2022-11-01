/** @format */

import React from "react";
import FAQs from "../../components/FAQs";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import Testimonials from "../../components/Testimonials";
import "./Home.css";

function HomePage() {
	return (
		<>
			<MainHeader />
			<Programs />
			<Values />
			<FAQs />
			<Testimonials />
		</>
	);
}

export default HomePage;
