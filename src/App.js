import './App.css';
import { useState } from 'react';
import Navbar from "./comp/Navbar";
import TextForm from "./comp/TextForm";
import Alert from "./comp/Alert";
// import About from "./comp/About";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  //dark mode//
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }

  //alert//
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  return (
    <>
{/* without about button */}
      <Navbar title="My TextUtils" mode={mode} toggleMode={toggleMode}  />
        <Alert alert={alert} />
        <div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter text below" mode={mode} />
        </div>
{/* about button using router */}
      {/* <Router>
        <Navbar title="textutiles" mode={mode} toggleMode={toggleMode} home="HOME" about="ABOUT"  />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text below" mode={mode} />} />
          <Route path="/About" element={<About/>} />
          </Routes>
        </div>
      </Router > */}
    </>
  );
}

export default App;
