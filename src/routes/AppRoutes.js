import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Buy from '../views/buy';
import Home from '../views/home'
import Transfers from '../views/transfers'
import AboutUs from '../views/aboutUs';
import Process from '../views/process';
import Contact from '../views/contact';
import Security from '../views/security';


const AppRoutes = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/funcionalidades/transferencias' element={<Transfers />} />
          <Route exact path='/funcionalidades/compras' element={<Buy />} />
          <Route exact path='/nosotros/equipo' element={<AboutUs />} />
          <Route exact path='/nosotros/proceso' element={<Process />} />
          <Route exact path='/contactoyseguridad/contacto' element={<Contact />} />
          <Route exact path='/contactoyseguridad/seguridad' element={<Security />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes;