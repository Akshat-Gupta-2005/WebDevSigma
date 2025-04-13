import React, { useState } from 'react'

const HooksStates = (props) => {
    const [text, setText] = useState("This is the default value which you can change");
    const [value, setValue] = useState(0);

    const handleUpClick = () => {
        console.log("Upclick");
        setText(text.toUpperCase())
    }

    const handleLoClick = () => {
        console.log("Upclick");
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        console.log("OnClick");
        setText(event.target.value)
    }


    return (
        <div className='container bg-danger p-3 rounded'>
            <h1>{props.heading} - {text}</h1>

            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>

            <button className='btn btn-primary m-2' onClick={handleUpClick}>Convert To Uppercase</button>
            <button className='btn btn-primary m-2' onClick={handleLoClick}>Convert To Lowercase</button>

            <div className='container bg-info p-2 my-2 rounded'>
                This is a Counter
                <div className="value">
                    {value}
                </div>
                <button onClick={() => { setValue(value + 1) }}>Add</button>
            </div>

            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
    )
}

export default HooksStates
