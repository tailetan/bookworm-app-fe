import React from 'react';
// import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import Title from './components/Page-Title/pageTitle';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
return (
<React.Fragment>
    <div className='d-flex flex-column m-height-100'>
        <Header />

        <Title title="About" />

        {/* Config Routes pages */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/1" element={<Product />} />
            <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
    </div>
</React.Fragment>
);
}

export default App;