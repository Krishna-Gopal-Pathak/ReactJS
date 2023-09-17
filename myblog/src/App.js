import React from 'react'
import Header from './components/header/Header'
import Home from './pages/home/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Write from './pages/write/Write'
import Setting from './pages/setting/Setting'
import Singlepost from '../src/pages/singlepost/Singlepost'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/write' element={<Write/>}/>
      <Route path='/singlepost/:singlepostId' element={<Singlepost/>}/>
      <Route path='/setting' element={<Setting/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
