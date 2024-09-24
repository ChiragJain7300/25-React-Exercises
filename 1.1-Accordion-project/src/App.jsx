import './App.css'
import {accoData} from "../accordianData"
import Accordion from './components/Accordion'
import { useState } from 'react'

function App() {
  const [singleAcc, setSingleAcc] = useState(false)
  const [selected, setSelected] = useState(null)
  return (
    <>
      <div>
        <button onClick={() => setSingleAcc((prev) => !prev)}>Enable Single Accordion</button>
        <h1>Accordion Project</h1>
      
        { accoData && accoData.length > 0 ? 
          accoData.map((acc) => <Accordion acc= {acc} singleAcc = {singleAcc}/>) : 
          <div>No data Available</div>
        }
      </div>
    </>
  )
}

export default App
