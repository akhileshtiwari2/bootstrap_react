import React, { useState } from "react";

export default function TextForm(props) {
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    // 👇️ clear input value
    setText("");
    props.showAlert("All Clear", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!" , "success");
  };
  
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#504848" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="TextForm"
            rows="8"
          ></textarea>
        </div>

        <button
          disabled={text.length===0}
          type="submit"
          onClick={speak}
          className="btn btn-primary mb-3 mx-2"
        >
          Speak
        </button>

        <button
        disabled={text.length===0}
          type="submit"
          onClick={handleUpClick}
          className="btn btn-primary mb-3 mx-2"
        >
          Convert to UpperCase
        </button>

        <button
        disabled={text.length===0}
          type="submit"
          onClick={handleLoClick}
          className="btn btn-primary mb-3 mx-2"
        >
          Convert to LowerCase
        </button>
        <button
        disabled={text.length===0}
          type="submit"
          onClick={handleClearClick}
          className="btn btn-primary mb-3 mx-2"
        >
          Clear
        </button>
        <button
        disabled={text.length===0}
          type="submit"
          onClick={handleCopy}
          className="btn btn-primary mb-3 mx-2"
        >
          Copy Text
        </button>
      </div>

      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters
        </p>
        <p>{text.trim() === '' ? 0 : 0.008 * text.split(/\S+/g).length} Minute read</p>
        <h3> Preview</h3>
        {/* <p>{text}</p> */}
        <p>
          {text.length > 0
            ? text
            : "You must enter text in the text area above."}
        </p>
      </div>
    </>
  );
}
