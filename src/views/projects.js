import React from "react";

import Projects from "../components/Projects";

export default function Project() {

		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className="project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center wow fadeInRight"}>
							<img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484179/public/images/projects_n09lht.png" alt="Notable Projects"></img>
						</h1>

						<Projects />
						
					</div>
				</div>

			</React.Fragment>
		);
}