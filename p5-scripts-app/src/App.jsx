import { useState } from 'react'
import './App.css'

import P5Wrapper from './components/P5Wrapper';
import redCircles from './sketches/red-circles';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>p5.js Script Sandbox</h1>
      <P5Wrapper sketch={redCircles}/>
    </>
  )
}

export default App
