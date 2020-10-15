import React from "react"; 
import Routes from "./services/routes";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { BrowserRouter } from "react-router-dom";
 
import "./assets/global.css";

function App() {
  return (
    <BrowserRouter>
      <Header/> 
      <Routes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;