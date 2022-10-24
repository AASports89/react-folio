import React from "react";
//IMPORT COMPONENTS --> CONTACT FORM//
import Contact from "../components/Contact";

export default function ContactMe() {
    return (
        <div id="my-contact" className="container text-center my-5">
            <h1 id="contact" className={"mb-3 wow fadeInLeft"}>
            <img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484175/public/images/contact_h0qhqv.png" alt="Contact Me"></img>
            </h1>
            <Contact />
		</div>
    )
}