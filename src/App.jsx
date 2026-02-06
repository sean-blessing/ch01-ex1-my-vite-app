import { useState } from 'react'
import './App.css'
import CountDisplay from './components/CountDisplay.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sean's React App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <CountDisplay count={count} />
      </div>
    </>
  )
}

export default App
