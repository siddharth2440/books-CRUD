import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NewBook from './pages/NewBook.jsx'
import UpdateBook from './pages/UpdateBook.jsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addNew" element={<NewBook/>}></Route>
        <Route path="/update" element={<UpdateBook/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;