import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import Header from "./components/Header"; // Importing the Header component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Including the Header component */}
          <Header />
        </header>

        {/* Define Routes for each page */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

