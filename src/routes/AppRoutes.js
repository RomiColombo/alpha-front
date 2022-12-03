import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

import AboutUs from '../view/aboutUs'
import Product from '../view/product'

const AppRoutes = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<AboutUs/>} />
          <Route exact path='/digitalAlpha' element={<Product/>} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes;