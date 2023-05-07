// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

// import TextForm from './components/TextForm';
// import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>
{
  if(mode == 'light'){
    setMode('dark');
    document.body.style.backgroundColor = "#042745";
    document.body.style.color = "#fff";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";

  }
}

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container mb-3">
        <TextForm heading="Enter a text to analyze below"/>
      </div>
      {/* <About/> */}
    </>
  );
}


export default App;