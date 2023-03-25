import { useState } from 'react'
import './App.css'
import Cosmetics from './Components/Cosmetics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cosmetics />
    </div>
  )
}

export default App
