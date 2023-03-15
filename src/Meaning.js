import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>

      {props.meanings.definition.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{props.meanings.definition}</div>

            <div className="example">{props.meanings.example}</div>
          </div>
        );
      })}
    </div>
  );
}
