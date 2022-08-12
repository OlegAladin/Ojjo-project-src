import React, { useState } from 'react';
import Blog from './components/blog/Blog';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import Footer from './components/footer/Footer';
import Mailing from './components/mailing/Mailing';
import Main from './components/main/Main';
import MainCatalog from './components/mainCatalog/MainCatalog';
import OurStores from './components/ourStores/OurStores';
import Social from './components/social/Social';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClose, setMenuClose] = useState(false);

  return (
    <div className="App">
      <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuClose={menuClose} setMenuClose={setMenuClose} />
      <Main menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuClose={menuClose} setMenuClose={setMenuClose} />
      <MainCatalog />
      <OurStores />
      <Blog />
      <Social />
      <Mailing />
      <Footer />
    </div>
  );
}

export default App;
