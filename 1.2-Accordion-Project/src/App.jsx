import { useState } from 'react'
import './App.css'
import { accoData  } from "../accordionData"

function App() {
  const [multiAcc, setMultiAcc] = useState(false)
  const [selected, setSelected] = useState(null)
  const [multiSelected, setMultiSelected] = useState([])


  const handleMultiAcc = () => {
    setMultiAcc((prev) => !prev);
  }
  const toggleDisplay = (id) => {
    if(multiAcc){
      setSelected(null)
      const index = multiSelected.indexOf(id);
      let cpyArr = [...multiSelected];
      if(index === -1){
        cpyArr.push(id)
      }
      else{
          cpyArr.splice(index, 1);
      }
      setMultiSelected(cpyArr);
    }
    else{
      if(selected === id)
        setSelected(null);
      else
        setSelected(id);
    }
  }
  console.log(multiSelected);
  return (
    <>
      <div>
        <h1>Accordion Project</h1>
        <button onClick={handleMultiAcc}>{multiAcc?"Disable":"Enable"} Multiple Accordion</button>

        {accoData.map( (acc) => (
          <div id="boxCont" key={acc.id}>
                <div id="titleCont">
                    <p id="boxHeading">{acc.title}</p>
                    <button id="boxBtn" onClick={() => toggleDisplay(acc.id)}>{selected === acc.id?"↑":"↓"}</button>
                </div>
                {
                  multiAcc ? (multiSelected.indexOf(acc.id) != -1 ? <p id="boxInfo">{acc.info}</p> : null) : (selected === acc.id ? <p id="boxInfo">{acc.info}</p>: null)
                }
                
            </div>
            ))
          }
      </div>
    </>
  )
}

export default App
