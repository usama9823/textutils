import React, {useState} from 'react'

function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = ()=> {
    setText(text.toUpperCase())

  }
  const handleLowClick = ()=> {
    setText(text.toLowerCase())

  }
  const handleClearClick = ()=> {
    setText("")

  }
  const handleOnChange = (event) => {

    setText(event.target.value)

  }
  const handleCopyClick = () => {
    let copyText = document.getElementById('myBox')
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

  }
  return (
    <div>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="5" onChange={handleOnChange} value={text}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      
      </div>
      <div className="container mb-3">
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").length} and characters are {text.length}</p>
          <p> {0.008 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      
    </div>
  )
}

export default TextForm
