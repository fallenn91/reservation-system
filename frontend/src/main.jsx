import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import FormContact from './components/Form';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Main />    
    <FormContact />
  </React.StrictMode>
);
