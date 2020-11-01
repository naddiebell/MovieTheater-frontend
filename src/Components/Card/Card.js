import React from "react";
import "./card.css";
function Card(props) {
  return (
    <div className="background">
    <div className="card">
      <img
        src={require('../../movies/pippi.jpg')}
        alt="The Princess Bride"
      />
      <div className="container">
        <h4>
          <b>Pippi Långstrumpor</b>
        </h4>
        <p>1997</p>
      </div>
    </div>
    </div>
  );
}

export default Card;
