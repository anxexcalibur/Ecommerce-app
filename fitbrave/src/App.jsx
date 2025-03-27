// Importa a biblioteca React, necessária para criar componentes
import React from 'react'

// Importa os componentes de roteamento do react-router-dom
import { Routes, Route } from 'react-router-dom'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
// Importe corretamente os outros componentes
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'

// Define o componente principal App
const App = () => {
  return (
    // Div que define margens laterais responsivas usando Tailwind CSS
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <Navbar />
      {/* Define o sistema de rotas do aplicativo */}
      <Routes>
        {/* Define uma rota para a página inicial "/" e associa o componente <Home/> */}
        <Route path='/' element={<Home />} />

        {/* Define uma rota para "/collection" e associa o componente <Collection/> */}
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer/>

    </div>
  )
}

// Exporta o componente App para ser usado em outros arquivos
export default App
