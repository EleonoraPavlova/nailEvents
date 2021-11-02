import React from "react";
import "./App.scss"
import Home from "./pages/home/Home";
import Header from "./components/home/Header";


export default function BasicExample() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}