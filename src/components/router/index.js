import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from '../dashboard';

const BaseRouter = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRouter;
