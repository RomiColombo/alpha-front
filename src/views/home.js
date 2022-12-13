import React from 'react'
import BodyHome from '../components/BodyHome';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar'

const Home = () => {

  return (
    <body>
      <header className='header'>
        <NavBar />
        <div className="header__container">
          <h1 className="header__title">
            Construímos nuevos mundos
          </h1>
          <h3 className="header__subtitle">Somos <span>Alpha</span></h3>
        </div>
      </header>
      <main>
        <BodyHome />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  )

}

export default Home;