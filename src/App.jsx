import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './Components/DaisyUi/DaisyNav'
import Nav from './Components/Navbar/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
    </>
  )
}

export default App
