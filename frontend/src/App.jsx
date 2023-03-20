import React from 'react'
// import './App.css'
import Nav from './component/Nav'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Footer from './component/Footer'
import Signup from './component/Signup'
import Privatecomponent from './component/Privatecomponent'
import Login from './component/Login'
import Addproduct from './component/Addproduct'
import Productlist from './component/Productlist'
import Updateproduct from './component/Updateproduct'

function App() {

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>

        <Route  element={<Privatecomponent />}>
        {/* <Route path="/" element={<h1 className='font-bold text-3xl'>Home</h1>}></Route> */}
        <Route path="/" element={<Productlist />}></Route>
        <Route path="/add" element={<Addproduct />}></Route>
        <Route path="/update/:id" element={<Updateproduct />}></Route>
        <Route path="/logout" element={<h1 className='font-bold text-3xl'>Logout</h1>}></Route>
        {/* <Route path="/profile" element={<h1 className='font-bold text-3xl'>Profile</h1>}></Route> */}
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  )
}

export default App
