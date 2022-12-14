import React,{ Component } from 'react';
//IMPORT CSS --> PROJECTS//
import './css/Projects.css';

class Projects extends Component {
render() {
  return (
    <div class="component-container" id="project">
       <div class="row" id="top">
       </div>
        <div class="row">
          <div data-aos="slide-right" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
            <a href="https://shrouded-temple-26204.herokuapp.com/">
            <img class="card-img custom-card-image" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666561039/public/images/blog_bm7g9f.gif' alt="Blog Git"></img>
              </a>
              <div class="card-body" id="blog">
                <h4 class="card-title about-heading" id="card-heading">Blog Git</h4>
                <p class="card-text">
                  <strong>Blog Git</strong> is a CMS-style blog was designed based on 
                  the MVC concept, specifically utilizing the dynamic JavaScript and HTML 
                  languages with dependencies on MySQL, Express.js, Handlebars, Dotenv, Bcrypt & Sequelize
                  bringing the client-side to life.
                </p>
              </div>
            </div>
          </div>
          

          <div data-aos="zoom-in" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
            <a href="https://aasports89.github.io/Event-Fan-Follow/">
              <img class="card-img custom-card-image" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666561444/public/images/event_wzcd3g.gif' alt="Event Fan Follow"></img>
              </a>
              <div class="card-body" id="event">
                <h4 class="card-title about-heading" id="card-heading">Event Fan Follow</h4>
                <p class="card-text">
                  <strong>Event Fan Follow</strong> is a web-based application utilizing HTML, 
                  CSS, JavaScript, JQuery, TicketMaster, and Google Maps APIs. 
                  This application centers on retrieving and processing data from the API URLs, making it a 
                  user-friendly method to simultaneously display event ticket information 
                  combined with geolocation directly on the client side.
                </p>
              
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
            <a href="https://aasports89.github.io/secret-password-generator/">
              <img class="card-img custom-card-image" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484180/public/images/passgen_qgzz4h.gif' alt="Password Generator"></img>
              </a>
              <div class="card-body" id="passgen">
                <h4 class="card-title about-heading" id="card-heading">SecRet PassWord GeneRator</h4>
                <p class="card-text">
                  <strong>SecRet PassWord GeneRator</strong> is an easy to use application designed 
                  to generate random passwords using letters, 
                  numbers, and special characters with a possible length of 8-128 characters! 
                  Prompted alerts inform the user of:
                    <li>Password length</li>
                    <li>Use of specific characters</li>
                    <li>Any potential error flags</li>
                </p>
              </div>
            </div>
          </div>
          <div class="row" id="bottom">
          <div data-aos="slide-right" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
            <a href="https://git-your-notes.herokuapp.com/">
              <img class="card-img custom-card-image" 
              src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666561067/public/images/note-taker_chprvx.gif' alt="Git Your Notes"></img>
              </a>
              <div class="card-body" id="notes">
                <h4 class="card-title about-heading" id="card-heading">Git Your Notes</h4>
                <p class="card-text"><strong>Git Your Notes</strong> is a note taker application 
                powered by Express.js and JSON files to store, 
                retrieve and organize a user's notes. 
                Additionally, http://localhost:3001/api/notes can be used to run app locally 
                and to access the JSON files.</p>
              </div>
            </div>
          </div>
          

          <div data-aos="zoom-in" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
            <a href="https://pill-git-it.herokuapp.com/">
              <img class="card-img custom-card-image" 
              src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666561068/public/images/pill_nni5xv.gif' alt="Pill Git It"></img>
              </a>
              <div class="card-body" id="pill">
                <h4 class="card-title about-heading" id="card-heading">Pill Git It</h4>
                <p class="card-text">
                  <strong>Pill Git It</strong> is a web-based application providing medication 
                  related data for average daily consumers, 
                  designed using the MVC concept w/ a dynamic JavaScript "back-end" 
                  data is organized & routed utilizing Express.js, Sequelize, 
                  MySQL, and a "front-end" 
                  powered by dynamic HTML using Handlebars.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="slide-left" class="col-12 col-sm-8 col-md-6 col-lg-4" id="weather">
            <div class="card border-0">
            <a href="https://aasports89.github.io/Git-Your-Weather/">
              <img class="card-img custom-card-image" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484176/public/images/gitweather_ezoces.gif' alt="Git Your Weather"></img>
              </a>
              <div class="card-body" id="weathers">
                <h4 class="card-title about-heading" id="card-heading">Git Your Weather</h4>
                <p class="card-text">
                  <strong>Git Your Weather</strong> is a simple web-based application that 
                  provides live weather updates corresponding to a geolocation utilizing 
                  third-party API routes.
                </p>
              </div>
            </div>
          </div>
          </div>

        </div>
   </div>
  );
}
}

export default Projects;