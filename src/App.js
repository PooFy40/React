import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
    <Navbar title='TextUtils'  about='AboutTextUtils'/>
    <div className="container"><TextForm heading='Enter Text To analize'/></div>
    
    </>
    
  );
}

export default App;
