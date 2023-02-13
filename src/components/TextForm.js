import React, { useState } from 'react'
import PropTypes from 'prop-types'





export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleDoClick = () => {
        const fileData = JSON.stringify(text);
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "myTextFile.txt";
        link.href = url;
        link.click();
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="mb-3 mt-5">
                            <h1 style={{ color: props.mode === 'light' ? "black" : 'white' }}>{props.title}</h1>
                            <textarea className={`form-control border border-dark text-${props.mode === 'light' ? "dark" : 'light'}`} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }} value={text} onChange={handleOnChange} id="myTextBox" rows="19"></textarea>
                        </div>
                    </div>
                    <div className="col align-self-center -md-3 ">
                        <div className={`card text-${props.mode === 'light' ? "dark" : 'light'} bg-${props.mode} mb-3 mt-5`} style={{ border: '1.5px solid white' }}>
                            <h2 className='mx-2'>Perform</h2>
                            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Uppercase</button>
                            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Lowercase</button>
                            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy To ClipBoard</button>
                            <button disabled={text.length === 0} className='btn btn-warning mx-2 my-2' onClick={handleClClick}>Clear</button>
                            <button disabled={text.length === 0} className='btn btn-success mx-2 my-2' onClick={handleDoClick}>Download Text File</button>

                        </div>
                        <div className={`card text-${props.mode === 'light' ? "dark" : 'light'} bg-${props.mode} mb-3`} style={{ border: '1.5px solid white' }}>
                            <h2 className='mx-2 my-2'>Your Text Summary</h2>
                            <p className='mx-2 my-2'>{(text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} words and {(text.length) - (text.split(" ").length - 1)} charecters</p>
                            <p className='mx-2 my-2'>It takes {(((text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.0041)) * 60).toFixed(2)} seconds to read your Text.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

TextForm.propTypes = { title: PropTypes.string.isRequired };
