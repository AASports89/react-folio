import React,{ Component } from 'react';
import './css/About.css';

class About extends Component {
render() {
  return (

     <div class="component-container">
       <div class="row">
        <h4 class="section-title" id="section-title"><img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484180/public/images/work-experience_zizfty.png" alt="Work Experience"></img></h4>
       </div>
        <div class="row">
          <div data-aos="slide-right" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0" id="border">
              <img class="card-img custom-card-image" id="ligolab" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484175/public/images/ligologo_ehatzh.png' alt="LigoLab Information Systems"></img>
              <div class="card-body" id="ligo">
                <h4 class="card-title about-heading">Junior Developer</h4>
              <li>Perform troubleshooting based on submitted tickets by medical laboratory clients regarding software bugs.</li>
              <li>Updating platform dashboard, query, and reporting databases.</li>
              <li>Documenting and presenting refactor updates for each new version of the laboratory information system platform.</li>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
              <img class="card-img custom-card-image" id="kaiser" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484176/public/images/kaiser_r0pwoj.png' alt="Kaiser"></img>
              <div class="card-body" id="kp">
                <h4 class="card-title about-heading">Health Information Technologist</h4>
                <li>Gathered data using the EPIC EMR platform.</li>
                <li>Monitored the reporting of adverse drug effects by hospital staff.</li>
                <li>Prepared a full report outlining the functionality of data tracking throughout the entire hospital every fiscal quarter.</li>
              </div>
            </div>
          </div>


          <div data-aos="slide-left" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
              <img class="card-img custom-card-image" id="cvs" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484175/public/images/cvs_bnkjko.png' alt="CVS"></img>
              <div class="card-body" id="intern">
                <h4 class="card-title about-heading">Pharmacist Intern</h4>
                <li>Administered immunizations to the general public.</li>
                <li>Processed, adjudicated, and dispensed prescriptions for the community.</li>
                <li>Maintained accurate inventory levels for all medication classes.</li>
              </div>

            </div>
          </div>

        </div>
   </div>
    
  );
}
}

export default About;