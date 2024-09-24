import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [hexMode, setHexMode] = useState(false);
  const [bgColor, setBgColor] = useState("");

  const setHex = () => {
    setHexMode(true)
  }
  const setRgb = () => {
    setHexMode(false)
  }
  
  const changeBgColor = () => {
    let color="#";
    if(!hexMode){
      color = `rgb( ${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)} )`;
    }
    else {
      const range = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
      let len = range.length;
      for (let i = 0; i < 6; i++) 
        color += range[Math.floor(Math.random() * len)];
    }
    setBgColor(color);
    document.body.style.backgroundColor = color;
    
  }
  useEffect(changeBgColor, [hexMode]);
  return (
    <>
      <div>
          <h2>Random Color Generator</h2>
          <div id="mainHead">
            {hexMode ? "Hex Mode":"RGB Mode"}
            <p>{bgColor}</p>
          </div>
          <button onClick={setHex}>Hex Mode</button>
          <button onClick={setRgb}>RGB Mode</button>
          <button onClick={changeBgColor}>Generate Color</button>
      </div>
    </>
  )
}

export default App
