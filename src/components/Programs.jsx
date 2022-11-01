/** @format */

import React from "react";
import { FaCrown } from "react-icons/fa";
import Sectionhead from "./Sectionhead";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

function Programs() {
	return (
		<section className='programs'>
			<div className='container programs__container'>
				<Sectionhead icon={<FaCrown />} title='program' />

				<div className='program__wrapper'>
					{programs.map(({ id, icon, title, info, path }) => {
						return (
							<Card className='programs__program' key={id}>
								<span>{icon}</span>
								<h4>{title}</h4>
								<small>{info}</small>
								<Link to={path} className='btn sm'>
									{" "}
									Learn More <AiFillCaretRight />
								</Link>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Programs;
