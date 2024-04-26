import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Main from "./pages/main";
import About from "./pages/about";
import Update from "./pages/update";
import Faqs from "./pages/faqs"
import Contact from "./pages/contact";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/update" element={<Update/>}/>
          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
