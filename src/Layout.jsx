import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Home/Footer'; 

const Layout = () => {
  return (
    <div className="layout">
      <div className="content">
        <Outlet /> 
      </div>
      <Footer /> 
      
    </div>
    
  );
};

export default Layout;
