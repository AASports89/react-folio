import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "aos/dist/aos.css"; 
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//ADDING ALL OF IMPORTS --> VIEWS --> BUILD --> PAGES//
import Background from './views/background';
import Navbar from "./components/Navbar.js";
import Footer from "./components/footer.js";
import About from './views/about';
import Project from './views/projects';
import Educations from './views/education';
import ContactMe from './views/contact';
import Experience from './views/experience';

import "./styles/index.scss";

//NEW IMPORT FOR REACT 18.0+//
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.Fragment>
		<Background />
		<Navbar />	
		<About />
		<Experience />
		<Project />
		<Educations />
		<ContactMe/>
		<Footer />
	</React.Fragment>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
