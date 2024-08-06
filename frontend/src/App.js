import React from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import PageIntro from "./components/PageIntro";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CHUNKLEBYTES</h1>
      </header>
      <PageIntro />
      <ProductList />
    </div>
  );
};

export default App;
