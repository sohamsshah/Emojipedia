import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./emoji";
import Card from "./Card";

function data(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      name={emojipedia.name}
      emoji={emojipedia.emoji}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(data)}
    </div>
  );
}

export default App;
