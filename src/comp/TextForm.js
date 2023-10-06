import React, { useState } from 'react'

export default function TextForm(props) {
    const[text, setText]= useState("")

    const textOnChange=(event)=>{
        setText(event.target.value)
        // console.log("user typed in textbox")
    }
    const buttonUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        // console.log("uppercase button clicked" )
        props.showAlert("converted to uppercase","success")
    }
    const buttonDownClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("converted to lowercase","success")

    }
    const buttonRemoveSpace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("extra spaces has been removed","success")

    }
    const buttonCopy=()=>{
        let text = document.getElementById("TextBox")
        text.select() 
        navigator.clipboard.writeText(text.value)
        props.showAlert("text copied","success")

    }


    return (
        <div
            className="mb-3">
            <div className="container my-3" style={{color:props.mode==='dark'?'#042743':'white'}}>

                <h1>{props.heading}</h1><br/>

                <textarea className="form-control" value={text} onChange={textOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} id="TextBox" rows="8"></textarea>
                
                <button className="btn btn-primary mx-2" onClick={buttonUpClick}>convert into UPPERCASE</button>
                <button className="btn btn-primary mx-2" onClick={buttonDownClick}>convert into LOWERCASE</button>
                <button className="btn btn-primary mx-2" onClick={buttonRemoveSpace}>remove extra spaces</button>
                <button className="btn btn-primary mx-2" onClick={buttonCopy}>copy text</button>

            </div>
            <div className="summary mx-4"style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} minutes to read</p>
                <h5>preview</h5>
                <p>{text.length>0?text:"enter the text to preview here"}</p>
            </div>
        </div>
    )
}
