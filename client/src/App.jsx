import { useState } from 'react'
import { ButtonContainer } from './components/ButtonContainer'
import './App.css'

function App() {
  const [color, setColor] = useState("white");
  const appStyle ={
    backgroundColor: color
  }
  return (
    <div id="app" style={appStyle}>
      <ButtonContainer setColor={setColor}/>
    </div>
  )
}

export default App
