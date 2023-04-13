import React, { useState } from "react";
export default function TextForm(props) {
  const handleUperCase = () => {
    console.log(text.toUpperCase());
    setText(text.toUpperCase());
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (e) => {
    console.log("onChange");
    setText(e.target.value);
  };
  const [text, setText] = useState("Enter text Here");
  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleUperCase}>
        Convert To Usercase
      </button>

      <button className="btn btn-primary" onClick={handleLowerCase}>
        Convert To Lowercase
      </button>
    </div>
  );
}
