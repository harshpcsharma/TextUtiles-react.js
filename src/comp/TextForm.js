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
        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges();
        props.showAlert("text copied","success")

    }
    const buttonclear=()=>{
        let newText=text.replaceAll(text, "")
        setText(newText)
    }

    return (
        <div className="mb-3">
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={textOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} id="TextBox" rows="8"></textarea>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={buttonUpClick}>convert into UPPERCASE</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={buttonDownClick}>convert into LOWERCASE</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={buttonRemoveSpace}>remove extra spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={buttonCopy}>copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={buttonclear}>clear</button>

            </div>
            <div className="summary mx-4"style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0 }).length} minutes to read</p>
                <h5>preview</h5>
                <p>{text.length>0?text:"enter the text to preview here"}</p>
            </div>
        </div>
    )
}
