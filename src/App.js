import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // document.body.style = 'background: #E94560';

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#282828';
      showAlert("dark mode enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="fixIt" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path='/about' element={<About mode={mode}/>}/>
            <Route exact path='/' element={<TextForm showAlert={showAlert} title="Enter your text here" mode={mode} />}/>
          </Routes>
        </div>
      </Router>



    </>
  );
}

export default App;   