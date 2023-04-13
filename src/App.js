import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"



function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] =useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      typ: type
    });
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);

  }
  

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#051726f2';
      showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar  title="My App" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-4">
    
      <Routes>   
          
          <Route  exact path="/about" element={<About/>}/>
           
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text Below." mode={mode}/>}/>
                      
                   
      </Routes>     
    
    
    
    </div>
    </Router>
    </>
    
  );
}

export default App;
