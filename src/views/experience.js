import React from "react";

import About from "../components/About";

export default function Experience() {

		return (
			<React.Fragment>
				<div id="my-experience" className="container-fluid bg-light mt-5">
					<div className="experience-container container bg-light pb-5">
						<h1
							id="experience"
							className={"text-center wow fadeInRight"}>
							<img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484180/public/images/work-experience_zizfty.png" alt="Work Experience"></img>
						</h1>

						<About />
						
					</div>
				</div>

			</React.Fragment>
		);
}