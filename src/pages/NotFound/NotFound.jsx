/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
	return (
		<section>
			<div className='container notfound__container'>
				<h2>Page Not Found </h2>
				<Link to='/' className='btn'>
					Go to Home
				</Link>
			</div>
		</section>
	);
}

export default NotFound;
