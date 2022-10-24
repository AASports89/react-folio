import React from "react";
//IMPORT CSS --> FOOTER//
import './css/Footer.css';

export default function Footer() {

		const year = new Date().getFullYear();
		
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								href="https://aasports89.github.io/ligolab-webinar/"
								target="_blank"
								rel="noopener noreferrer">
								<img className="img-fluid" id="ligolab" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1666246134/public/images/ligologo_gk6sut.png" alt=""/>
							</a>
							<a
								className="px-3"
								href="https://github.com/AASports89"
								target="_blank"
								rel="noopener noreferrer">
								<img id="github" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484175/public/images/github-icon_mvuylu.png' alt=""/>
							</a>
							<a
								href="https://aasports89.github.io/my-portfolio-space/CV.html"
								target="_blank"
								rel="noopener noreferrer">
								<img id="resume" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484176/public/images/magnify_cvjrpx.png' alt=""/>
							</a>
						</div>
					</div>
					<h5 id="username" className="pt-4">AASports89 &copy; {year}</h5>
				</div>
			</div>
		);
}
