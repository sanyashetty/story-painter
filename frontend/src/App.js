import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryPage from "./pages/StoryPage";
import './App.css';


export default function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/StoryPage" element={<StoryPage />} />
                </Routes>
            </div>
        </Router>
    );
}
