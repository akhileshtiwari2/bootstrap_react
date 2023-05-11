import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text,setText] = useState("Enter Text Here");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} id="TextForm" rows="8"></textarea>
        </div>
        
        <button type="submit" onClick={handleUpClick} className="btn btn-primary mb-3">Convert to UpperCase</button>
    </div>
  )
}
