
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] =  useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success" );
      // blinking title!!!!!
      // setInterval(() => {
      //   document.title = 'textutils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'new features';
      // }, 1500);


    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success" );
    }

  }
  
  return (
    <>
     <Navbar title="Textutils" abouttext = "About Textutils" mode ={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}></Alert>
     <div className="container">
      <Textform showAlert={showAlert} head=" Enter the text to analyze" mode ={mode} />
      </div>
      <div>
      <About/>
      </div>
      
      
     
  </> 
  );
}

export default App;
