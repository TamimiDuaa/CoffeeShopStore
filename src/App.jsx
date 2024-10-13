// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CoffeeProvider } from './context/CoffeeContext';
import { MenuProvider } from './context/MenuContext'; // Import MenuProvider
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Order from './components/Order';
import Header from './components/Header';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
    return (
        <CoffeeProvider>
            <MenuProvider> {/* Wrap your app with MenuProvider */}
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/CoffeeShopStore" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/order" element={<Order />} />
                    </Routes>
                </Router>
            </MenuProvider>
        </CoffeeProvider>
    );
};

export default App;
