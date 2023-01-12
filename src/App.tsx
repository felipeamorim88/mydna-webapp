import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Professional from './pages/professional/';
import Header from './pages/shared/header';
import ProfessionalType from './pages/professional-type';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
        <Route path="/professional" element={<Professional />}/>
        <Route path="/professional-type" element={<ProfessionalType />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
