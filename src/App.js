import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/learningPage/LandingPage";
import Home from "./pages/home/Home";
import "./App.css";
import Roadmap from "./pages/Roadmap";
import Title from "./pages/title/Title";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/roadmap" element={<Roadmap/>}/>
                <Route path="/title" element={<Title/>}/>
            </Routes>
        </Router>
    );
}

export default App;
