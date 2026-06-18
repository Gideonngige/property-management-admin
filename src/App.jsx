import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Layout from './Components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Tenants from './pages/Tenants';


function App() {
  return (
    // <AuthProvider>
    <Router>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/tenants" element={<Tenants />} />


      </Routes>
      {/* </Layout> */}
    </Router>
    
  );
}

export default App;