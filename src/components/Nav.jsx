import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const navVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
};

const navLinkVariant = {
  hidden: {
    y: "-100vw",
  },
  visible: {
    y: 0,
    transition: { type: "spring", duration: 0.6, delay: 0.2, stiffness: 30 },
  },
  hover: {
    scale: 1.2,
  },
};

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <motion.div
      className="nav-container"
      variants={navVariant}
      initial="hidden"
      animate="visible"
    >
      <nav className="nav">
        <div className="nav-img">
          <Link className="nav-link" to="/dj-vyse-with-react">
            <motion.img
              className="navbar-logo"
              src={process.env.PUBLIC_URL + "./images/vyseLogo.png"}
              alt=""
              variants={navLinkVariant}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            />
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <i class={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <motion.ul
          className={click ? "nav-menu active" : "nav-menu"}
          variants={navLinkVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.li
            whileHover={{
              scale: 1.2,
            }}
            className="nav-item"
          >
            <Link className="nav-link" to="/events" onClick={closeMobileMenu}>
              <h2>Media Coverage</h2>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
            }}
            className="nav-item"
          >
            <Link className="nav-link" to="/photos" onClick={closeMobileMenu}>
              <h2>Press Kit</h2>
            </Link>
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.2,
            }}
            className="nav-item"
          >
            <Link
              className="nav-link"
              to="/contactme"
              onClick={closeMobileMenu}
            >
              <h2>Contact Me</h2>
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.div>
  );
}

export default Nav;
