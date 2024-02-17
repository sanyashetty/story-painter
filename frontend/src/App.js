import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSketch from "./pages/HomeSketch";
import HomeUpload from "./pages/HomeUpload";
import Landing from "./pages/Landing";
import './App.css';


export default function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/sketch" element={<HomeSketch />} />
                    <Route path="/upload" element={<HomeUpload />} />
                </Routes>
            </div>
        </Router>
    );
}
