import Footer from "./Footer";
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";

function ContactMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}>
      <div
        className="contact-me-container"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/abhi-footer2.png"
          })`,
        }}
      >
        <div className="contact-me">
          <Fade left>
            <div className="whatareyouwaitingfor">
              <h1>What Are You Waiting For?</h1>
            </div>
          </Fade>
          <div className="contact-details">
            <Fade top>
              <div className="booking">
                <h1>Contact Details</h1>
                <h3>For Booking Call Us At</h3>
                <p>+91 - 8728 016 482</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="email">
                <h1>Mail Us At:</h1>
                <p>CONTACTVYSE@GMAIL.COM</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default ContactMe;
