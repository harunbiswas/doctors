import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/style.scss'
import Roots from './roots/Roots'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Roots />
      </BrowserRouter>
    </div>
  )
}

export default App
