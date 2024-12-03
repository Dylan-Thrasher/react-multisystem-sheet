import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { DnD5e } from './components/DnD5e/DnD5e'
import { Persona } from './components/Persona/Persona'
import { MotW } from './components/MotW/MotW'
import { Footer } from './components/Footer/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='sections'>
    <Header />
    <Navbar />
    <Footer />
    </div>
  )
}

export default App
