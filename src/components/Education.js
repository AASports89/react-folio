import React,{ Component } from 'react';
import './css/Education.css';

class Education extends Component {
render() {
  return (
    <div class="component-container" id="education">
    <div class="row" id="achievements">
    <h4 class="section-title" id="title"><img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484175/public/images/education_na5jxe.png" alt="Education"></img></h4>
    </div>
     <div class="row" id="educate">

     <div data-aos="zoom-in" class="col-12 col-sm-8 col-md-6 col-lg-4">
         <div class="card border-0">
           <img class="card-img custom-card-image" id="bootcamp" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484175/public/images/background5_qfqtxa.jpg' alt="Bootcamp"></img>
           <div class="card-body" id="boot">
            <h4 class="card-title about-heading" id="card-heading">Coding Bootcamp - UCLA Extension</h4>
             <p class="card-text" id="card-text">
              <strong><li>Full-stack developer certificate - Nov. 2022</li></strong>
              <strong><li>Successfully developed & deployed 20+ applications</li></strong>
              <strong><li>Collaborated on 3 full-stack web-based applications</li></strong>
           </p>
           </div>
         </div>
       </div>
       <div data-aos="slide-right" class="col-12 col-sm-8 col-md-6 col-lg-4">
         <div class="card border-0">
           <img class="card-img custom-card-image" id="kgi" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484176/public/images/kgi_c0pxbe.jpg' alt="KGI"></img>
           <div class="card-body" id="keck">
             <h4 class="card-title about-heading" id="card-heading">Keck Graduate Institute</h4>
             <p class="card-text" id="card-text">
              <strong><li>CVS Bilingual Scholorship Recipient - May 2018</li></strong>
              <strong><li>President of Health Information Technology Student Organization - Sept. 2017 - May 2019</li></strong>
              <strong><li>Poster presentor in CSHP 2019 - Importance of HIT in HIV Treatments - Las Vegas, NV - Oct. 2018</li></strong>
              </p>
           
           </div>
         </div>
       </div>

       <div data-aos="zoom-in" class="col-12 col-sm-8 col-md-6 col-lg-4">
         <div class="card border-0">
           <img class="card-img custom-card-image" id="uci" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484181/public/images/uci_wkuvzi.jpg' alt="UC Irvine"></img>
           <div class="card-body" id="irvine">
            <h4 class="card-title about-heading" id="card-heading">University of CA - Irvine</h4>
             <p class="card-text" id="card-text">
              <strong><li>B.S. Biological Sciences - June 2015</li></strong>
              <strong><li>B.A. Econonics - June 2015</li></strong>
              <strong><li>Dean's List - GPA 3.6/4.0 - Fall Semester 2014</li></strong>
              <strong><li>Flying SAMARITANS - EMR - Jose Lemus Clinic - El Testerazo, Mexico - 2013</li></strong>
           </p>
           </div>
         </div>
       </div>
     </div>
</div>
  );
}
}

export default Education;