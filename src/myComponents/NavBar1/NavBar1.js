import React from 'react'
import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import MobileMenu from './components/MobileMenu';
// import MobileMenu from './components/MobileMenu';
// import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
// import Home from './pages/Home';

export default function NavBar1() {
  return (
      <div className='NavBar1'>
        <BrowserRouter>
          <nav className="navigation">
            <MobileMenu />
            <img className='logo' src="http://localhost/img/party-disc2.png" alt="logo" />
            <div className='links'>
              <Link className="btn" to="/">Home </Link>
              <Link className="btn" to="page1">Page 1</Link>
              <Link className="btn" to="page2">Page 2</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>

        </BrowserRouter>
      </div>

  )
}