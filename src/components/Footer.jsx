import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";

import { Link } from "react-router-dom";

const buttonVariant = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(167,209,41)",
    textShadow: "0px 0px 8px rgb(167,209,41)",
    cursor: "pointer",
    transition: {
      yoyo: Infinity,
    },
  },
};

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="follow-me">
          <Fade left>
            <h1>Follow Me</h1>
            <div className="footer-icons">
              <motion.a
                whileHover={{ scale: 1.3 }}
                href="https://www.instagram.com/vysemusic/"
                className="nav-link"
              >
                <InstagramIcon />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.3 }}
                className="nav-link"
                href="https://www.facebook.com/vysefanpage"
              >
                <FacebookIcon />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.3 }}
                className="nav-link"
                href="https://twitter.com/vysemusic?lang=en"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.3,
                }}
                className="nav-link"
                href="https://www.mixcloud.com/VYSE/"
              >
                <i class="fab fa-mixcloud fa-2x"></i>
              </motion.a>
            </div>
          </Fade>
        </div>
        <div className="booking-and-contact">
          <Fade right>
            <h1>For Bookings And Contact</h1>
            <motion.button variants={buttonVariant} whileHover="hover">
              <Link to="/contactme" className="first-btn">
                Book Now
              </Link>
            </motion.button>
          </Fade>
        </div>
      </div>
      <div>
        <p>Copyright ⓒ {year}</p>
      </div>
    </div>
  );
}

export default Footer;
