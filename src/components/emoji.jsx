import React from "react";
import emojipedia from "../emojipedia";
import Meaning from "./meaning";

function Emoji(props) {
  return (
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emoji}
      </span>
      <span>{props.name}</span>
    </dt>
  );
}

export default Emoji;
