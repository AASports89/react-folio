import React, {useEffect} from "react";
//IMPORT EFFECTS & MOVEMENT PACKAGES --> NAVBAR & ELEMENTS//
import Aos from "aos";
import SmoothScrollTo from "../hooks/smoothScrollTo";
//IMPORT CSS --> NAVBAR//
import './css/Navbar.css';


export default function Navbar() {
	
    useEffect(() => {
		Aos.init({duration:2000});
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}, [])

    return (
		<div>
			<nav
				id="navbar"
				className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<a
						className="home-style navbar-brand"
						onClick={() => {
							window.scrollTo({
								top: 0,
								behavior: "smooth"
							});
						}}>
     					<img src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484176/public/images/nav-brand_ob1ew4.png' id="nav" class="d-inline-block align-top" alt=""></img>
					</a>
					{/* <button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button> */}
					{/* <div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup"> */}
						<div className="navbar-nav">
							<a onClick={() => SmoothScrollTo("about-container")} className="btn-style nav-item nav-link">ABOUT</a>
							<a onClick={() => SmoothScrollTo("my-projects")}className="btn-style nav-item nav-link">PROJECTS</a>
							<a onClick={() => SmoothScrollTo("my-experience")}className="btn-style nav-item nav-link">WORK EXPERIENCE</a>
							<a onClick={() => SmoothScrollTo("my-education")}className="btn-style nav-item nav-link">EDUCATION</a>
							<a onClick={() => SmoothScrollTo("my-contact")}className="btn-style nav-item nav-link">CONTACT ME</a>
						</div>
					</div>
				{/* </div> */}
			</nav>
		</div>
	);
}