import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Acceuil from './pages/Acceuil'
import Cours from './pages/Cours'
import Contact from './pages/Contact'
import Logout from './components/Logout'
import Authentification from './pages/Authentification'
import Admin from './pages/Admin'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path='/cours' element={<Cours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Authentification />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
