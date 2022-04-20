import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import { isElementOfType } from 'react-dom/test-utils';
function App() {

  const [mode,setmode]=useState('light')

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background='black'
      showAlert('Dark Mode Enabled','success')
    } else {
      setmode("light");
      document.body.style.background='white'
      showAlert('Light Mode Enabled','success')
    }
  };

  const [alert,setalert]=useState(null)

  const showAlert=(message,type)=>
  {
    setalert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setalert(null)
      
    }, 2000);
  }

return (
    <>
    <Navbar title='TextUtils'  about='AboutTextUtils' toggle={togglemode} navmode={mode} />
    <Alert alert={alert} />
    <div className="container"><TextForm showAlert={showAlert}  toggle={togglemode} heading='Enter Text To analize'/></div>
    
    </>
  
  );
}

export default App;
