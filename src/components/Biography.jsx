import Fade from "react-reveal/Fade";

function Biography() {
  return (
    <div className="card">
      <div className="card-header">
        <Fade top>
          <h3>
            <span>Bio</span>graphy
          </h3>
        </Fade>
      </div>
      <div className="cards">
        <div className="cards-img">
          <Fade right>
            <img
              src={process.env.PUBLIC_URL + "/images/abhi_bio2.png"}
              alt=""
            />
          </Fade>
        </div>
        <div className="cards-text">
          <Fade left>
            <p>
              “One good thing about music, when it hits you, you feel no pain.”
            </p>
          </Fade>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Biography;
