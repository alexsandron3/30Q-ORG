import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import Index from './pages/Index';

function Routes() {
  return (
    <Router>
      <Route path="/" element={<Index />} />
    </Router>
  );
}

export default Routes;
