import { useEffect, useState, useCallback } from "react";
import "./FlipCard.css";


function App3(props) {
  return (
    <>
      <div className="the-card">
        <div className="front">
          <img src={props.imgsrc} className="flip-img" width="250px" height="150px" />
          <h1 className="content-front"> {props.front}</h1>
        </div>
        <div className="back">
          <h1 className="content-back">{props.back}</h1>
        </div>
      </div>
    </>
  );
}

export default App3;
