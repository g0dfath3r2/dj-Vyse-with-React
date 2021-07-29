import React, { useState } from "react";
import Footer from "./Footer";
import CloseIcon from "@material-ui/icons/Close";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";

function Photos() {
  const images = [
    {
      id: 1,
      imgSrc: `${process.env.PUBLIC_URL + "/images/pressKit/2.jpg"}`,
    },
    {
      id: 2,
      imgSrc: `${process.env.PUBLIC_URL + "/images/pressKit/8.jpg"}`,
    },
    {
      id: 3,
      imgSrc: `${process.env.PUBLIC_URL + "/images/pressKit/15.jpg"}`,
    },
    {
      id: 4,
      imgSrc: `${process.env.PUBLIC_URL + "/images/pressKit/18.jpg"}`,
    },
    {
      id: 5,
      imgSrc: `${process.env.PUBLIC_URL + "/images/pressKit/20.jpg"}`,
    },
    {
      id: 6,
      imgSrc: `${process.env.PUBLIC_URL + "/images/pressKit/22.jpg"}`,
    },
    {
      id: 7,
      imgSrc: `${process.env.PUBLIC_URL + "/images/pressKit/23.jpg"}`,
    },
    {
      id: 8,
      imgSrc: `${process.env.PUBLIC_URL + "/images/pressKit/24a.jpg"}`,
    },
    {
      id: 9,
      imgSrc: `${process.env.PUBLIC_URL + "/images/pressKit/28.jpg"}`,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(" ");

  function getImg(imgSrc) {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <motion.div exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}>
      <div className="photos-container">
        <Zoom>
          <h1>Press Kit</h1>
        </Zoom>
        <div className={model ? "model open" : "model"}>
          <img src={tempImgSrc} alt="" />
          <CloseIcon
            onClick={() => {
              setModel(false);
            }}
          />
        </div>

        <div className="photos">
          {images.map((img, index) => {
            return (
              <div className="photo" key={img.id}>
                <img
                  src={img.imgSrc}
                  alt="my-img"
                  onClick={() => {
                    getImg(img.imgSrc);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Photos;
