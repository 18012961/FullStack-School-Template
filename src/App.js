import AboutUs from "./component/AboutUs";
import AboutDisplay from "./component/AboutDisplay";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { useRef } from 'react';


  function App() {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<AboutDisplay />} />
            <Route path="/contact" element={<AboutUs />} />
          </Routes>
        </Router>
      // <Nav />
    );
  }


export default App;
