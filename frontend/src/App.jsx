/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import PageIntro from "./components/PageIntro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { UserChange } from "./Context/NavigationContext";
import Header from "./components/Header";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Login_Signup from "./components/Login_Signup";

const App = () => {
  const { nav } = UserChange();
  return (
    <>
      <Header />
      <Navbar />
      {nav === "auth" ? <Login_Signup /> : ""}
      {nav === "home" ? <PageIntro /> : ""}
      {nav === "product" ? <ProductList /> : ""}
      {nav === "search" ? <Search /> : ""}
      {nav === "cart" ? <Cart /> : ""}
      <Footer />
    </>
  );
};

export default App;
