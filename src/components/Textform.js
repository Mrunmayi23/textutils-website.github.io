import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
//Hooks  !!!!!!!


export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText =  text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Upper case", "success");
    }
    const handleonChange = (event)=>{
        console.log("on Change");
        setText(event.target.value);
        
    }
    const handleDownClick = (event)=>{
        console.log("Lowercase was clicked" + text);
        let newtext1 = text.toLowerCase();
        setText(newtext1);
        props.showAlert(" Converted to lower case", "success");
    }
    const handleClearClick = (event)=>{
        
        let newtext = "";
        setText(newtext)
        props.showAlert(" Text Cleared", "success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to clipboard", "success");
    }
    const [text, setText] = useState('');
    
  return (
    <>
<div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} > 
<h1 style={{ margin:"3rem"}}>{props.head}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange ={handleonChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleDownClick} >Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear </button>
<button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
<button className="btn btn-primary mx-2" id = "myBox" onClick={handleCopy} >Copy </button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
    <h2>Your text summary</h2>
    <p>{text.split(" ").length } words and {text.length} characters</p>
    <p>{0.008* text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something  in checkbox"}</p>
</div>
</>
  )
}

Textform.propTypes = {
    head : PropTypes.string.isRequired
    
}
