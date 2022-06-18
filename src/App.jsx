import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/style.scss'
import Footer from './layouts/footers/Footer'
import Roots from './roots/Roots'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Roots />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
