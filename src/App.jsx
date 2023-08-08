import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Acceuil from './pages/Acceuil'
import Cours from './pages/Cours'
import Contact from './pages/Contact'
import Logout from './components/Logout'
import Authentification from './pages/Authentification'
import Admin from './pages/Admin'
import { BrowserRouter } from 'react-router-dom'
import { PrivateRoute } from './helpers/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <PrivateRoute path="/cours" element={<Cours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Authentification />} />
        <Route path="/logout" element={<Logout />} />
        <PrivateRoute path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
