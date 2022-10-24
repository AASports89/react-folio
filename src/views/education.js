import React from "react";
import Education from "../components/Education";

export default function Educations() {

		return (
			<React.Fragment>
				<div id="my-education" className="container-fluid bg-light mt-5">
					<div className="education-container container bg-light pb-5">
						<h1
							id="education"
							className={"text-center wow fadeInRight"}>
							<img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484175/public/images/education_na5jxe.png" alt="Education"></img>
						</h1>

						<Education />
						
					</div>
				</div>

			</React.Fragment>
		);
}