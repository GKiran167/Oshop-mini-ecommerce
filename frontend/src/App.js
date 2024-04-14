import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function App() {



  // const getDataFromLS = () => {
  //   const data = localStorage.getItem('cartData');
  //   if (data) {
  //     return JSON.stringify(data);
  //   }
  //   else {
  //     return []
  //   }
  // }
  // const [localData, setLocalData] = useState(getDataFromLS)
  const [cartItems, setCartItems] = useState([]);

  return (

    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center' />
          <Header cartItems={cartItems} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            {/* <Route path='/product/:id' element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} localData={localData} setLocalData={setLocalData} />} />
            <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} localData={localData} setLocalData={setLocalData} />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
