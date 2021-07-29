import Footer from "./Footer";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";

function MediaCoverage() {
  return (
    <motion.div exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}>
      <div className="media-container">
        <Zoom>
          <h1>
            <span>Media Coverage</span>
          </h1>
        </Zoom>

        <div className="first-event">
          <Fade left>
            <img
              src={process.env.PUBLIC_URL + "/images/mediaCoverage/alpha.jpg"}
              alt=""
            />
          </Fade>
          <Fade right>
            <h1>“The only way to do great work is to love what you do.”</h1>
          </Fade>
        </div>
        <div className="second-event">
          <Fade right>
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/mediaCoverage/indian ocean.jpg"
              }
              alt=""
            />
          </Fade>
          <Fade left>
            <h1>“Nothing will work unless you do.” </h1>
          </Fade>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default MediaCoverage;
