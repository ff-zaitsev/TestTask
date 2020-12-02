import React from "react";
import './App.css';
import Logo from "./components/Logo/Logo"
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Greeting from "./components/Greeting";

const App = () => {
  return (
      <body>
        <div id="page">
            <Logo />
            <Greeting />
            <Cards />
            <Footer />
        </div>
      </body>
  );
}

export default App
