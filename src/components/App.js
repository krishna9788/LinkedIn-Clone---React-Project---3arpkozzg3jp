import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false);
      }, 2000);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login handleLoading={handleLoading} />} />
          <Route path="/home" element={<Dashboard loading={loading} />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
