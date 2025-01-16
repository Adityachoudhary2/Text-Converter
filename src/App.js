// import { useCallback, useState } from "react";
// import Button from "./components/Button";
// import Comp from "./components/Comp";
import About from "./components/About";
import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [navbtn, setNavBtn] = useState("Enable Dark Mode ")
  const [Mode, setMode] = useState("light"); //Whether dark mode is enable or not
  const [alert, setAlert] = useState(null); //Alert  method  
    
  
  // const bluemode =()=>{
  //   document.body.style.background = 'blue'
  //   showAlert("Blue mode has been enabled", 'success')

  // }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }     

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.background = '#042743'
      setNavBtn('Enable light Mode')
      showAlert("Dark mode has been enabled", 'success')
    } else {
      setMode("light");
      document.body.style.background = 'white'
      setNavBtn('Enable dark Mode')
      showAlert("light mode has been enabled", 'success')
    }
  };

  return (
    <>
  <Router>
      <Navbar title="TextUtils"   mode={Mode} toggleMode={toggleMode} NavBtn={navbtn} />
      <Alert alert={alert}></Alert>
      <div className="container">

        <TextForm showAlert={showAlert} heading=" Try TextUtils Word Counter Character Counter" mode={Mode} />

      {/* <About mode={Mode}></About> */}

      </div>
      </Router>
    </>
  );
}

export default App;
