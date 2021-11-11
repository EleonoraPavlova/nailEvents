import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "./App.scss"

import Home from "./pages/home/Home";
import resources from './resources';

import Nav from './components/common/Nav';
import Footer from './components/common/Footer';


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ua",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default function BasicExample() {
  return (

    <div>
      <Nav />
      <Home />
      <Footer />
    </div>

  )
}