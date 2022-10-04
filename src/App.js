import React, { useEffect, useState } from "react";

const data = [
  "ALBUM",
  "HINGE",
  "MONEY",
  "SCRAP",
  "GAMER",
  "GLASS",
  "SCOUR",
  "BEING",
  "DELVE",
  "YIELD",
  "METAL",
  "TIPSY",
  "SLUNG",
  "FARCE",
  "GECKO",
  "SHINE",
  "CANNY",
  "MIDST",
  "BADGE",
  "HOMER",
  "TRAIN",
  "STORY",
  "HAIRY",
  "FORGO",
  "LARVA",
  "TRASH",
  "ZESTY",
  "SHOWN",
  "HEIST",
  "ASKEW",
  "INERT",
  "OLIVE",
  "PLANT",
  "OXIDE",
  "CARGO",
];

function App() {
  const [word, setWord] = useState("");
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [res, setRes] = useState([0, 0, 0, 0, 0]);
  const [display, setDisplay] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    setWord(data[Math.floor(Math.random() * data.length)]);
  }, []);
  console.log(word);

  useEffect(() => {
    let cnt = 0;
    res.forEach((word) => {
      if (word === 1) cnt++;
    });
    if (cnt === 5) {
      setResult("Won");
      reset();
    }
  }, [res]);

  const process = () => {
    if (count === 5) {
      setResult("Lost");
      setInput("");
      reset();
      return;
    }

    const disp = [];
    const split = input.split("");
    let arr = [];
    for (let j = 0; j < 5; j++) {
      if (split[j] === word[j]) {
        arr.push(1);
        disp.push(
          <span
            key={Math.floor(Math.random(0, 999) * 1000)}
            style={{ textDecoration: "underline" }}
          >
            {split[j]}
          </span>
        );
      } else {
        disp.push(
          <span key={Math.floor(Math.random(0, 999) * 1000)}>{split[j]}</span>
        );
        if (res[j] === 0) {
          arr.push(0);
        } else {
          arr.push(1);
        }
      }
    }
    setDisplay([...display, disp]);
    setRes(arr);
    setInput("");
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
    setRes([0, 0, 0, 0, 0]);
    setDisplay([]);
  };

  const restart = () => {
    setResult("");
    setWord(data[Math.floor(Math.random() * data.length)]);
  };
  return (
    <div>
      <h1>Wordle</h1>
      {result !== "" ? <h1>{word}</h1> : <h1>*****</h1>}

      {display.map((item) => (
        <div key={Math.floor(Math.random(0, 999) * 1000)}>{item}</div>
      ))}

      <input
        value={input}
        maxLength="5"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={process}>Submit</button>
      {result !== "" ? (
        <>
          <h1>{result}</h1> <button onClick={restart}>Restart</button>
        </>
      ) : null}
    </div>
  );
}

export default App;
