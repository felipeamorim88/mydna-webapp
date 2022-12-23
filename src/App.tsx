import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
  return (
<>
<Routes>
        <Route path="/" element={<Professional />}>
          <Route path="about" element={<ProfessionalProfile />} />
        </Route>
      </Routes></>
  );
}

export default App;
