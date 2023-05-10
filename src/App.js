import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/summary/:id" element={<SecondScreen />} />
      </Routes>
    </Router>
  );
}

export default App;


