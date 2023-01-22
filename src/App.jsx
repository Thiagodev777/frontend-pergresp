import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Header from "./Components/Header";
import Login from "./Pages/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/question" element={<Home />} />
        <Route path="/question/new" element={<Home />} />
        <Route path="/pergunta/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
