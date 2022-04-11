import React, { useState } from "react";


export default function TextForm(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [theme, setTheme] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setTheme("Enable Light Mode");
      // console.log('light now')
      props.toggle()
      
      
    } else {
      
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setTheme("Enable Dark Mode");
      // console.log('dark now')
      props.toggle()
    }
    
  };

  const upperCase = () => {
    // console.log("upper case button clicked");
    setText(text.toUpperCase());
    props.showAlert("Changed To UPPERCASE",'success')
  };

  const lowerCase = () => {
    // console.log("lower case button clicked");
    setText(text.toLowerCase());
    props.showAlert("Changed To lowercase",'success')
  };

  const handleOnChange = (event) => {
    // console.log("On change fired");
    setText(event.target.value);
  };

  const [text, setText] = useState("Your Text Here");
  //  setText('i changed the text using settext')

  return (
    <>
      <div>
        <div className="mb-3 my-3">
          <h1 style={myStyle} >{props.heading}</h1>
          <textarea
            className="form-control "
            style={myStyle}
            onChange={handleOnChange}
            value={text}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
          <button
            className="btn btn-primary my-3"
            style={myStyle}
            onClick={upperCase}
          >
            Convert to UPPERCASE
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            style={myStyle}
            onClick={lowerCase}
          >
            Convert to lowercase
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            style={myStyle}
            onClick={toggleStyle}
          >
            {theme}
          </button>
        </div>
      </div>

      <div style={myStyle} className="container">
        <h1>Your Text Summary</h1>
        <p>
          Words-{text.split(" ").length} Characters-{text.length}
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <p></p>
      </div>
    </>
  );
}
