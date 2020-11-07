import React, { useState } from "react";
import "./style.css";

function Seat(props) {
  const [click, setClick] = useState(null);

  const i = props.value;
  
  return <button className="square" onClick={() => setClick({value: 'X'})}
  >
  {click}
  </button>;
}

export default Seat;
