import React from "react";

import SkillBars from "./about.description.skillBars";

export default function AboutDescription(props) {
    return (
        <div className="row wow fadeIn" id="about" style={{ marginTop: 7 + "rem" }}>
            <div className="col-12 col-lg-6 hidden" id="text">
        <p className="mytext pt-3" id="bio-text">
                I grew up in Los Angeles, CA enjoying the beach, hiking, and all
            of the other numerous aesthetic environments available throughout
            Golden State. Although, technology had always fascinated me I never
            imagined the possibility of pursuing a career tied to computer science.
            My background is tightly bound to the field of healthcare as I am a
            Pharmacist by trade, feel free to take a peak at my <a class="CV" href="https://aasports89.github.io/my-portfolio-space/CV.html">
            <strong>Resume</strong></a> via the provided link.
        </p>
        <p id="bio-text">
            After working as a Pharmacist for nearly 6-years, I decided a career
          change was necessary during the COVID-19 pandemic. As a result of my extensive
          experience with platforms such as EPIC, Cerner, and RxNet combined with
          faith I found myself training at LigoLab Information Systems™, a laboratory and
          medical software developer. About 6-months after getting hired I was
          encouraged by my employer to look into a developer and coding program, I found 
          myself enrolled in the UCLA's Coding Bootcamp three month program! The opportunity to learn coding
          languages such as HTML, CSS, and JavaScript has been invaluable. Overall, I can confidently express,
          the transition from my traditional career to the world of coding and development has
          been amazing!
        </p>
    </div>

            <SkillBars />

        </div>
    );
}