import React, {useEffect} from "react";
//IMPORT EFFECTS & MOVEMENT PACKAGES --> BACKGROUND//
import SmoothScrollTo from "../hooks/smoothScrollTo";
import WOW from "wowjs";

export default function Background() {

	useEffect(() => {
		new WOW.WOW().init();
	},[]	
	)

	return (
		<div id="my-background" className="background">
			<div id="stars" />
			<div id="stars2" />
			<div id="stars3" />
			<div className="top-container flex" id="background">
				<h1>
				<img id="profile-pic" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484180/public/images/profile-pic_fjr1ny.png' alt="Aram Avakyan" class="img-fluid profile-img">
            	</img>
					<br />
					I&apos;m a Full Stack Web Developer & Pharm.D.
				</h1>
{/* OFFSET CAN BE CHANGE IN NODE MODULES --> DEFAULT */}
				<button className={"work-button wow bounceIn"} data-wow-offset="0"
					onClick={() => SmoothScrollTo("my-projects")}>
					View My Projects
				</button>
			</div>
		</div>
		);
}