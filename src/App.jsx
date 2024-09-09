import { Header, Footer } from "./components"
import { AboutMe, Portfolio, Contact, Resume } from './pages'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/aboutme' element={<AboutMe />} /> 
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route exact path='/' element={<Navigate to='/aboutme' />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

