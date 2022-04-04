import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import data from "./data";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazona
            </a>
          </div>
          <div>
            <a href="/Cart">Cart</a>
            <a href="/SignIn">Sign In</a>
          </div>
        </header>
        <main>
          
          <Routes>
          <Route path="/product/:id" element={<ProductScreen/>}></Route>
          <Route path="/" element={<HomeScreen/>}></Route>
          
          
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
