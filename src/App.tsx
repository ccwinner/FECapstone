import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { MainContent } from "./Components/MainContent";
import { FooterContent } from "./Components/FooterContent";
import { AlertProvider } from "./Context/alertContext";

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <div className="App">
          <Header />
          <Navigation />
          <MainContent />
          <FooterContent />
        </div>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
