import { useState } from 'react'
import Home from './pages/Home'

import './css/Home.css'

function App() {
  const [mode, setMode] = useState('light')

  function handleModeChange(modeState){
    setMode(modeState)
    console.log(mode)
  }

  return (
    <>
      <div className={`home ${mode}`}>
      <Home handleModeChange={setMode} mode={mode}/>
      </div>
    </>
  )
}

export default App
