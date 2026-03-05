import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Main from './components/main/Main';
import Article from './components/main/Article';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Article />
  </React.StrictMode>
);
