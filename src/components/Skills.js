import React,{Component } from 'react';
import './css/Skills.css';


class Skills extends Component {
render() {

  return (
   <div class="component-container" id="skills">
   <div class="row">
       <h4 class="section-title"><img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484179/public/images/skills_zelnsq.png" alt="Skills"></img></h4>
   </div>
   <div class="row">
        <div data-aos="fade-left" class="col-sm-6">
            <div class="card border-0">
            <div class="card-body">
               <h3>Developer Skills</h3><br></br>
               <h5>Junior Developer @LigoLab Information Systems™</h5>
               <p>Currently working closely with Senior Developers on updates for LigoLab's Laboratory Information System (LIS) platform.</p><br></br>
               <h5>Working Cloesly w/ Senior Developers</h5>
               <p>Aram has had significant "hands-on" experience with Java & utilizing IntelliJ for coding and development purposes.</p><br></br>
               <h5>Communication skills</h5>
               <p>Aram has had the opportunity to collaborate on numerous projects w/in his current employer, LigoLab Information Systems™.</p><br></br>
          </div>
      </div>
     </div>
   
     <div data-aos="slide-left" class="col-sm-6">
            <div class="card border-0" data-aos="flip-down">
            <div class="card-body">
            <h3>Current Progress</h3>
              <div class="progress-row">
                    <p>HTML</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100</div>
                    </div>
                    <p>CSS</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90</div>
                    </div>
                    <p>JAVASCRIPT</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75</div>
                    </div>
                    <p>HANDLEBARS</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90</div>
                    </div>
                    <p>DATABASE DESIGN</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60</div>
                    </div>
                    <p>REACT</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50</div>
                    </div>
               
            </div>
          </div>
      </div>
     </div>
    </div>
</div>

  );
}
}

export default Skills;