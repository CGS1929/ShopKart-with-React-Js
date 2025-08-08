import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import ProductCard from './components/ProductCard'
import ProductDetail from './pages/ProductDetail'


function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
