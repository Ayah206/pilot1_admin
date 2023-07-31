import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar';
import Dashboard from './screens/dashboard';
import Admins from './screens/adminsManagement';
import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <SideBar>
      <Router>
        <Routes>
          <Route path = '/' element = {<Navigate to= "/dashboard" />} />
          <Route path = '/admins-management' element = {<Admins/>} />
          <Route path = '/dashboard' element = {<Dashboard/>} />
        </Routes>
      </Router>
    </SideBar>
  );
} 

export default App;
