import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import UserDashboard from '../views/UserDasboard';
import PrivateRoute from './PrivateRoutes';

export const RoutesTree = () => {
  return (
    <BrowserRouter>  
      <Routes >
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        {/* Private Routes */}
        <>
        
        <Route path="/userDashboard" element={<PrivateRoute component={UserDashboard} />} />
        </>
      </Routes>
    </BrowserRouter>
  );
};
