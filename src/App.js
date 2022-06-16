import React from 'react';
import AppHeader from './components/AppHeader';
import LoginHeader from './components/LoginHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main'
import LoginPage from './components/LoginPage'
import RegistrPage from './components/RegistrPage'

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="reg" element={<RegistrPage />} />
      </Routes>2
  </Router>
  );
}

export default App;
