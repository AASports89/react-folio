import React, {useState} from "react";

export default function SkillBars() {

    const [technologies] = useState([
        {
            name: "HTML5",
            percentage: 80
        },
        {
            name: "CSS3",
            percentage: 80
        },
        {
            name: "Javascript",
            percentage: 90
        },
        {
            name: "PHP",
            percentage: 60
        },
        {
            name: "ReactJS",
            percentage: 90
        },
        {
            name: "NodeJS",
            percentage: 60
        },
        {
            name: "JQuery",
            percentage: 70
        },
    ]);

    return(
        <div className={"col-12 col-sm-12 col-md-12 col-lg-6 wow fadeIn"}>
             <h1
				className={"text-center wow fadeInRight"}>
			<img id="skill" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484179/public/images/skills_zelnsq.png" alt="Skills Statuses"></img>
			</h1>
            {
                technologies.map((tech, index) => {
                    return (
                        <div class component-container>
                        <div className="progress mb-3" key={index}>
                            <div
                                className={"progress-bar fill-"+ tech.percentage.toString() +"-bar"}
                                role="progressbar"
                                style={{ width: tech.percentage + "%" }}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                {tech.name}

                            </div>
                        </div>
                        </div>
                    );
                })
            }
        </div>
    );
}