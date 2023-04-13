import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    if(text.length>0){
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success")
    }
    else{
      props.showAlert("Please! Enter the text","warning")
    }
  }
  const handleLoClick = () =>{
    if(text.length>0){
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success")
    }
    else{props.showAlert("Please! Enter the text","warning")}
  }
  const clearText = () =>{
    
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success")
  }
  const handleCopyText=()=>{
    if(text.length>0){
    let txt= document.getElementById("myBox");
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Text Copied","success")
    }
    else{props.showAlert("Please! Enter the text","warning")}


  }
  
  const handleExtraSpace=()=>{
    if(text.length>0){
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces are removed","success")
    }
    else{
      props.showAlert("Please! Enter the text","warning")
    }

  }
  const handleOnChange = (event) =>{
    
    setText(event.target.value);
  }
  
  
  const [text,setText]= useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}> 
        <h2>{props.heading}</h2>     
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#1b3b50', color:props.mode==='light'?'black':'white'}} id="myBox" rows="8">Enter Text Here</textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowerCase</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your Test Summary</h1>
      <p>{(text.split(" ").length)} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Your Text To Preview Here"}</p>
    </div> 
    </>
  );
} 
