import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
    <Navbar title='TextUtils'  about='AboutTextUtils'/>
    <div className="container"><TextForm heading='Your Text Here To Check'/></div>
    
    </>
  
  );
}

export default App;
