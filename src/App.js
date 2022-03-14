import React from 'react';
import Home from './pages/Home/Home';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import PageTitle from './components/Page-Title/pageTitle';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Routes, Route } from 'react-router-dom';

config.autoAddCss = false;

const pathname = window.location.pathname;
const objectPath = {
  '/': 'Homepage',
  '/shop': 'Books',
  '/about': 'About us',
  '/cart': 'Cart'
};

function App() {
  const { useRef } = React;
  const headerRef = useRef();

  return (
    <React.Fragment>
      <div className="d-flex flex-column m-height-100">
        <Header ref={headerRef} />
        {pathname === '/about' ? <PageTitle title={objectPath[pathname]} /> : ''}

        {/* Config Routes pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/cart"
            element={<Cart 
                openModal={() => headerRef.current.handleModal()}  
                checkCart={() => headerRef.current.checkCart()}
            />}
          />
          <Route
            path="/shop/:id"
            element={<Product checkCart={() => headerRef.current.checkCart()} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;