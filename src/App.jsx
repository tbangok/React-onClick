import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-left">{count}</div>
      <div className="top-right">{Math.floor(count / 5)}</div>
      <button className="middle" onClick={() => { setCount((prev) => prev + 1) }} >+</button>
      <button className="bot-left" onClick={() => { setCount((prev) => prev - 1) }}>-</button>
      <button className="bot-right" onClick={() => { setCount((prev) => prev - 5) }} >--</button>
    </>
  )
}

export default App
