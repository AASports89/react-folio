import React from "react";

import AboutDescription from "./../components/about/about.description";

export default function About(props) {
	return (
		<div id="about-container" className="content-containers container text-center mt-5">
			<h1 id="about" className="wow bounceInLeft"><img id="my-story" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484176/public/images/my-story_girujv.png" alt="My Story"></img></h1>

			<AboutDescription />
		</div>
	);
}