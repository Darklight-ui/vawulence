/** @format */

import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
	const styles = {
		customBg: {
			backgroundColor: "#555",
		},
		color: {
			color: "#fff",
			textDecoration: "none",
		},
	};
	return (
		<div>
			<Navbar style={styles.customBg} collapseOnSelect expand='lg'>
				<Container>
					<Navbar.Brand href='#home' style={styles.color} to='/'>
						<Link to='/' className='a'>
							{" "}
							Computer Science Gallery{" "}
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'></Nav>
						<Nav>
							<Nav.Link href='#deets' className='hover'>
								Trenches
							</Nav.Link>
							<NavDropdown
								title='Gallery'
								id='collasible-nav-dropdown'
								className='hover'>
								<NavDropdown.Item href='#action/3.1'>
									<Link to='/nd-1-splash' className='no-deco'>
										ND 1 Gallery
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									ND 2 Gallery
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Matriculation Gallery
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									<Link to='Graduation-Splash' className='no-deco'>
										Graduation Gallery
									</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href='#deets' className='hover'>
								About Develope
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</div>
	);
}

export default NavbarComponent;
