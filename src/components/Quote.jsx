import Zoom from "react-reveal/Zoom";

function Quote(props) {
  return (
    <div className="quote-container">
      <div>
        <Zoom>
          <h1>{props.text} </h1>
        </Zoom>
      </div>

      <hr />
    </div>
  );
}

export default Quote;
