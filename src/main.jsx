// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import routes from './routes';
import './index.css';  // Your global styles

const mainElement = document.getElementById('root');

ReactDOM.createRoot(mainElement).render(
  <Router>
    <NavBar />
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Router>
);
