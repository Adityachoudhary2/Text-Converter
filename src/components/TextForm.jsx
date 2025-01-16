
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpRemove = () => {
    let texxt = " ";
    setText(texxt);
       props.showAlert("Remove  the Text " ,"success")
  };

  const handleUpLowerCase = () => {
    let newLower = text.toLowerCase();
    setText(newLower);
    props.showAlert("Convert to LowerCase" ,"success")
  };

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to UpperCase" ,"success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
    
      <div className="container"  style={{color:props.mode ==='dark' ?'white':'black'}}>
        <h1 className="mb-2">{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode ==='dark' ?'#5c349d26':'white', color:props.mode ==='dark' ?'white':'black'}}
          ></textarea>
        </div>
        <div className="button">
          <button disabled={text.length===0} onClick={handleUpclick} className="btn btn-primary    mx-1 my-1">
            Convert to upper Case
          </button>

          <button disabled={text.length===0} onClick={handleUpLowerCase} className="btn btn-primary  mx-1 my-1">
            Convert to lower case
          </button>
          <button disabled={text.length===0}  onClick={handleUpRemove} className="btn btn-success  mx-1 my-1 ">
            Rmove Text
          </button>
        </div>
      </div>
      <div className="container m-3" style={{color:props.mode ==='dark' ?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters{""}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
      </div>
    </>
  );
}
