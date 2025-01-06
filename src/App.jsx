import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './welcome'
import Header from './header'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header title="Simple React Project" description="Testing How promts/Proprieties work"/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <Header description="This is a test of a USESTATE HOOK" />
        <button onClick={() => setCount((count) => count + 1)}>
          Click ME
        </button>
        <h3>{count}</h3>
        <div>
          <Welcome />
          <p>This is rendered from the App component.</p>
        </div>
      </div>
    </>
  )
}

export default App
