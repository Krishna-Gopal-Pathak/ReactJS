import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Services from './pages/services/Services'
import Header from './components/Header/Header'
import Products from './pages/products/Products'


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='services' element={<Services/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
