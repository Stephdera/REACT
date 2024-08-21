import React, { useEffect } from 'react'
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Banner from './components/Banner';
import Product from './components/Product';
import ProductData from './data/ProductData';
import { useState } from 'react';
import Footer from './components/Footer';
import FeaturedProduct from './components/FeaturedProduct';
import TopSelling from './components/TopSelling';
import ProductDetails from './components/pages/ProductDetails';
import ProductCart from './components/pages/ProductCart';
import ProductCheckOut from './components/pages/ProductCheckOut';
import About from './components/pages/About';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import { EcomProvider } from './context/EcomContext';
import Alert from './components/Alert';
import Loaders from './components/Loaders';
import useLocalStorage from './hooks/useLocalStorage';
import { AuthProvider } from './context/AuthContext';

function App() {
  const { getItem } = useLocalStorage("auth-token");
  const token = getItem();
  const authInitialToken = { accessToken: token ?? null };
  const [ loader, setLoader ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(()=> {
      setLoader(false)
    }, 5000)

    return () => timer;
  }, [])
  
  return (
    <> 
    {loader ? <Loaders/> : (
      <AuthProvider defaultState={authInitialToken}>
        <EcomProvider>
          <Router>
            <Header/>
            <Alert />
              <Routes>
                <Route path="/" element={<>
                  <Banner/>
                  <FeaturedProduct />
                  <TopSelling />
                </>}/>
                <Route path="/product" element={<>
                  <Banner/>
                  <Product/>
                </>} />
                <Route path="/details/:name" element={<ProductDetails/>}/>
                <Route path="/cart" element={<ProductCart/>}/>
                <Route path="/checkout" element={<ProductCheckOut/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/sign" element={<SignUp/>}/>
              </Routes>
            <Footer/>
            </Router>
          </EcomProvider>
        </AuthProvider>
       )}
      
    </>
  )
}

export default App;

