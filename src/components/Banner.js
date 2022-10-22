import React,{useEffect} from 'react';
import Aos from "aos";
import './css/Banner.css';
import $ from "jquery";

function Banner() {
  useEffect(()=>{
   Aos.init({duration:2000});
   
   $('.carousel').carousel();
  },[]);

  return (

    <div class="row custom-row" id="custom">
      
     <div data-aos="zoom-in" class="col-sm-3" id="custom-row">
        <h2 class="name-heading">
          <img id="profile-pic" src='/images/profile-pic.png' alt="Aram Avakyan" class="img-fluid profile-img">
            </img></h2>
      </div>

      <div data-aos="slide-up" class="col-sm-6">
        <div class="bio">
            <h3><img id="my-story" src="/images/my-story.png" alt="My Story"></img></h3>
           <p>
            I grew up in Los Angeles, CA enjoying the beach, hiking, and all
            of the other numerous aesthetic environments available throughout
            Golden State. Although, technology had always fascinated me I never
            imagined the possibility of pursuing a career tied to computer science.
            My background is tightly bound to the field of healthcare as I am a
            Pharmacist by trade, feel free to take a peak at my <a class="CV" href="https://aasports89.github.io/my-portfolio-space/CV.html">
            <strong>Resume</strong></a> via the provided link.
          </p>
          <p>
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
      </div>

      <div data-aos="flip-down" class="col-sm-3" id="contact-card">
        <div class="card border-0">
          <div class="card-body" id="card-body">
          <h3 id="title">Contact & GitHUB</h3>
            <p class="email"><b>Email:</b> aavakyan16@students.kgi.edu</p>
            <p class="phone"><b>Direct:</b> (818) ###-####</p>
            <div class="row">
            <a href="https://aasports89.github.io/my-portfolio-space/CV.html">
                <img src='/images/magnify.png' alt="..." id="download-icon"></img>
            </a>
            </div>
            <div class="row">
              <a href="https://github.com/AASports89"><img src='/images/github-icon.png' alt="github-icon" id="github"/></a>
           </div>
          </div>
        </div>
      </div> 
      

   </div>
  
  );
}

export default Banner;