import React from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import PageIntro from "./components/PageIntro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <PageIntro />
      <ProductList />
      <Footer />
    </>
  );
};

export default App;
