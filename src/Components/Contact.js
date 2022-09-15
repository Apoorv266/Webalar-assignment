import React from "react";
import Navbar from "./Navbar";
import "../Styles/Contact.css";
import Footer from "./Footer";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ejqxk7a', 'template_eonqucl', e.target, 'PZzeuWKUZ6eRBsSTc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
        });
        e.target.reset()
        window.alert("Form submitted successfully")
  };
  return (
    <>
      <Navbar />
      <form onSubmit={sendEmail}>
        <div className="contact">
          <div className="contact-head">
            <h1>Connect with us</h1>
          </div>

          <div className="contact-mid">

            <div className="form">
              <h3>Tell us about your projects</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
                lobortis mi vulputate potenti orci.
              </p>

              <div className="first-input">
                <h4>Your Name</h4>
                <input type="text" className="input1" name="name" />
              </div>

              <div className="second-input">
                <div>
                  <h4>Your Email</h4>
                  <input type="text" className="input2" name="email"/>
                </div>

                <div>
                  <h4>Your Phone number</h4>
                  <input type="text" className="input2" name="number"/>
                </div>
              </div>

              <div className="textarea">
                <h4>Your Message</h4>
                <textarea className="textarea" name="message"></textarea>
              </div>

              <div>
                <input
                  type="submit"
                  className="form-btn"
                  value="Submit"
                ></input>
              </div>
            </div>

            <div className="notes">
              <div className="add1">
                <h4>Address</h4>
                <p>0199 Taylor Park, North Dakota, USA</p>
              </div>

              <div className="add2">
                <h4>Call us on</h4>
                <p>+1 98723 42023 info@logoipsum.com</p>
              </div>

              <div className="add3">
                <h4>Social Media</h4>
                <div className="social">
                  <i class="devicon-linkedin-plain"></i>
                  <i class="devicon-twitter-original"></i>
                  <i class="devicon-facebook-plain"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Contact;
