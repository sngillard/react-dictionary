import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log({ props });
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition(s):</strong> {definition.definition}
              <br />
              <strong>Example(s):</strong> {definition.example}
              <br />
              <Synonyms synonyms={definition.synonyms} />
              {definition.synonyms}
            </p>
          </div>
        );
      })}
    </div>
  );
}
