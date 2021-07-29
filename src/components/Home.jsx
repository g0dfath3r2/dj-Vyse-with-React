import Biography from "./Biography";
import Quote from "./Quote";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

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

function Home() {
  return (
    <motion.div exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}>
      <div
        className="header-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/1.jpg"})`,
        }}
      >
        <div className="header">
          <motion.div
            className="firstQuote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              staggerChildren: 0.5,
            }}
          >
            <h1>Lets Party And Dance Our Hearts Out</h1>
            <motion.button variants={buttonVariant} whileHover="hover">
              <Link to="/contactme" className="first-btn">
                Book Now
              </Link>
            </motion.button>
          </motion.div>
          <div className="contact-me-Listen-Now">
            <motion.a
              whileHover={{
                scale: 1.4,
              }}
              className="nav-link"
              href="https://www.mixcloud.com/VYSE/"
            >
              <p>
                Listen Now : Mixcloud <i class="fab fa-mixcloud"></i>
              </p>
            </motion.a>
          </div>
        </div>
      </div>

      <Quote text="Music is life, that's why our hearts have beats." />
      <Biography />
      <Quote text='"Music washes away from the soul the dust of everyday life."' />
      <div className="insta-wrapper">
        <div
          className="insta-section"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/abhishek2.png"
            })`,
          }}
        >
          <Zoom>
            <div className="insta-meta-text">
              <h1>Follow My Story On Instagram</h1>
              <div>
                <motion.button variants={buttonVariant} whileHover="hover">
                  <a
                    href="https://www.instagram.com/vysemusic/"
                    className="insta-btn"
                  >
                    Instagram
                  </a>
                </motion.button>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Home;
