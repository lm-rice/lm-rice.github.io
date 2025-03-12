import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './layouts/NavBar';
import ScrollingImages from './pages/gems/ScrollingImages';
import Home from './pages/home/Home';
import NotFound from "./components/NotFound";
import './App.css';
import Projects from "./pages/projects/Projects";

const App: React.FC = () => {
    return (
        <Router>
            <NavBar />
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gems/scrolling-images" element={<ScrollingImages />} />
                    <Route path="/projects" element={<Projects />} />
                    {/* Other routes for /about, /projects, etc. can go here */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;