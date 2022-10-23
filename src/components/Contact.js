import React,{ Component } from 'react';
import './css/Contact.css';

class Contact extends Component {
  
render() {
  return (
    <div class="container contact-form" id="contact-form">
        <h4 class="section-title" id="contact"><img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484175/public/images/contact_h0qhqv.png" alt="Contact Me"></img></h4>
            <div class="contact-image">
                <img id="profile" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1666484180/public/images/profile-pic_fjr1ny.png' alt="Aram Avakyan"/>
            </div>
            <form method="post">
               <div class="row">
                    <div data-aos="fade-left" class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Enter Name..." value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Enter Email..." value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Enter Phone Number..." value="" />
                        </div>
                    </div>
                    <div data-aos="flip-up" class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Enter Message..." rows="6" columns="30"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" id="btn" value="Send Message" />
                        </div>
                    </div>
                </div>
            </form>
</div>
  );
}
}

export default Contact;