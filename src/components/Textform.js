import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Uppercase Syntax" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log('handled on change')
    setText(event.target.value);
  };

  const handlelowerClick = () => {
    // console.log("Uppercase Syntax" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleclearClick = () => {
    let newText = ''
    setText(newText);
  }

  const speakText = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my-box"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={speakText}>
          Speak
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(' ').length} words, {text.length} charcters</p>
        <p>{0.008 * text.split(' ').length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
