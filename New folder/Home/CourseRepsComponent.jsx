/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function CourseRepsComponent() {
	return (
		<div className='coursereps'>
			<div className='courserepCard'>
				<Card style={{ width: "18rem", height: "18rem" }}>
					<Card.Img
						variant='top'
						src={require("../images/IMG-20221003-WA0029.jpg")}
					/>
					<Card.Body>
						<Card.Title> Course Reps wey get doings...</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='dark'>Go somewhere</Button>
					</Card.Body>
				</Card>
			</div>
			<div className='accodion'>
				<Accordion defaultActiveKey={["0"]} alwaysOpen>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>Brendan Shield</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1'>
						<Accordion.Header>Micheal</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	);
}

export default CourseRepsComponent;
