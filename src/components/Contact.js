import React from "react";
//IMPORT CSS --> CONTACT//
import './css/Contact.css';

export default function ContactForm() {
    return(
        <div class="container contact-form" id="contact-form">
        <div class="contact-image">
        <img id="profile" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484180/public/images/profile-pic_fjr1ny.png' alt="Aram Avakyan"/>
        </div>
        <form className="wow pulse" action="https://formspree.io/f/maykpnjz" method="POST">
            <div className="form-group">
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-4 mx-auto">
                        <input
                            type="text"
                            name="name"
                            className="form-control form-control-lg"
                            id="name"
                            placeholder="Enter name..."
                        />
                    </div>
                    </div>
            </div>
            <div className="form-group hidden">
                    <div className="col-md-4 mx-auto">
                        <input
                            type="email"
                            name="_replyto"
                            className="form-control form-control-lg"
                            id="email"
                            placeholder="Enter email..."
                        />
                    </div>
                    </div>
            </div>
            <div className="form-group hiddenRight">
                    <div className="col-md-6 mx-auto">
                        <textarea
                            name="message"
                            className="form-control form-control-lg"
                            id="message"
                            rows="3"
                            placeholder="Enter message here..."
                        />
                    </div>
            </div>
            <div className="row text-md-right text-sm-center">
                <div className="col-12 col-md-6 mx-auto">
                    <button id="btn"
                        type="submit"
                        className="btn btn-primary mb-2 hidden">
                        Submit 📬
                    </button>
                </div>
            </div>
        </form>
        </div>
    )
}