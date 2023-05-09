import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="header">
        <Header></Header>
      </div>
      <div className="main">
        <Outlet></Outlet>
      </div>
      <div className="Footer">
       <Footer></Footer>
      </div>
    </div>
  )
}

export default App
