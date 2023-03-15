import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h3 className="text">{props.phonetic}</h3>
    </div>
  );
}
