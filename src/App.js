import Home from './components/layout/Home/Home';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Shop from './components/layout/Shop/Shop';
import About from './components/layout/About/About';
import Cart from './components/layout/Cart/Cart';
import Title from './components/layout/Page-Title/pageTitle';
import Product from './components/layout/Product/Product';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>  
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
    </>
  );
}

export default App;
