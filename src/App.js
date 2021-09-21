import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑":
    "annoyance" /** add some more to show how the app now expands when there's new data */
};

var key = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function onChangeInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }

  function onClickHandler(emoji) {
    var userInput = emoji;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <h2>Enter emoji</h2>
      <input onChange={onChangeInputHandler} />
      <p>
        <span style={{ color: "grey" }}>Meaning: </span>
        {meaning}
      </p>
      <h2>List of emojis</h2>
      {key.map((item) => {
        return (
          <span
            onClick={() => onClickHandler(item)}
            style={{ padding: "1rem", fontSize: "30px" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
