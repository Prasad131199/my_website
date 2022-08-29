import React from "react";
import Service from "./Service";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Globalstyle";



const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)",

    },
    media: { mobile: "768px", tab: "998px" },

  };
  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
      <GlobalStyle />
        <Header />
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>

  );

};

export default App;