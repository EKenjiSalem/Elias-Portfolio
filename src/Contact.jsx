import React, { useRef } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { fadeIn } from './FadeIn.jsx';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("manywjdn");
  const formRef = useRef(null);

  const onSubmit = async (e) => {
    await handleSubmit(e);
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <section className="contact-form-1" id="contact">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="contact-container-1"
        >
          <h1 className="contact-form">Contact Form</h1>
          <form ref={formRef} onSubmit={onSubmit} action="https://formspree.io/f/manywjdn" method="POST">
            <div className="contact-row">
              <div className="col">
                <div className="contact-box">
                  <input type="text" name="fname" required />
                  <span className="text">First Name</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="contact-box">
                  <input type="text" name="lname" required />
                  <span className="text">Last Name</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="col">
                <div className="contact-box">
                  <input type="email" name="email" required />
                  <ValidationError field="email" prefix="Email" errors={state.errors} />
                  <span className="text">Email</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="contact-box">
                  <input type="tel" name="phone" required />
                  <span className="text">Phone Number</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="col">
                <div className="contact-box textarea">
                  <textarea name="message" required></textarea>
                  <ValidationError field="message" prefix="Message" errors={state.errors} />
                  <span className="text">Message</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="col">
                <input type="submit" value="Send" className="contact-btn" disabled={state.submitting} />
              </div>
            </div>
            {state.succeeded && <p className="success-message">Thank you for your message!</p>}
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
