import React from 'react'
import HomePAge from './Pages/HomePAge'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePAge/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
