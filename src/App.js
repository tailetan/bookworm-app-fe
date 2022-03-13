import React from 'react';
// import ReactDOM from 'react-dom';
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
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Routes, Route } from 'react-router-dom';

config.autoAddCss = false;

const pathname = window.location.pathname;


function App() {
  return (
    <React.Fragment>
      <div className="d-flex flex-column m-height-100">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />

        {/* Authenticate Modal */}
      </div>
    </React.Fragment>
  );
}

export default App;
