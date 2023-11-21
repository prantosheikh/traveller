// App.js or your main routing file
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Destinations from './Destinations'; // Import your component

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/destination/:id" element={<Destinations />} />
      </Routes>
    </Router>
  );
}

export default App;
