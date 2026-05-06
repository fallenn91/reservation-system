import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import FormContact from './components/Form';
import Footer from './components/Footer';
import CookieBanner from './components/BannerCookie';
import PoliticaPrivacidad from './pages/Privacidad';
import PoliticaCookies from './pages/Cookies';
import AvisoLegal from './pages/AvisoLegal';
import GoUpArrow from './components/GoUpArrow';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookieBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <FormContact />
            <GoUpArrow />
          </>
        } />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
