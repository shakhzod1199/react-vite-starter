import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import NotFound from './pages/Notfound';
import User from './pages/User';

const App = () => {
  
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user' element={<User />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;