import React, { useState } from "react";
export default function TextForm(props) {
  const handleUperCase = () => {
    setText(text.toUpperCase());
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
    let newText = e.target.value;
    const newWordCount = newText.trim().split(/\s+/).length;
    setWordCount(newWordCount);
  };

  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myText" class="form-label">
          Enter Your Text
        </label> */}
          <textarea
            className="form-control"
            value={text}
            id="myText"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUperCase}>
          Convert To Usercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert To Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          You have {wordCount} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes need to read</p>
        <h2> Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
