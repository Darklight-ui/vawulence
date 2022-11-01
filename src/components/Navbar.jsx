/** @format */

import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import Logo from "../images/logo.png";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
	const [isNavShow, setIsNavShow] = React.useState(false);
	return (
		<nav>
			<div className='container nav__container'>
				<Link to='/' className='logo' onClick={() => setIsNavShow(false)}>
					<img src={Logo} alt='Nav Logo' />
				</Link>
				<ul className={`nav__links ${isNavShow ? "show__nav" : "hide__nav"}`}>
					{links.map(({ name, path }, index) => {
						return (
							<li key={index}>
								<NavLink
									to={path}
									className={({ isActive }) => (isActive ? "active-nav" : "")}
									onClick={() => setIsNavShow((prevState) => !isNavShow)}>
									{name}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<button
					className='nav__toggle-btn'
					onClick={() => setIsNavShow((prevState) => !isNavShow)}>
					{isNavShow ? <MdOutlineClose /> : <GoThreeBars />}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
