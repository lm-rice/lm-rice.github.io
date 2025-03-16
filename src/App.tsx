import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './layouts/NavBar';
import NotFound from './components/NotFound';
import './App.css';
import Home from './pages/home/Home';
import ScrollingImages from './pages/experiments/scrolling-images/ScrollingImages';
import Projects from './pages/projects/Projects';
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

const App: React.FC = () => {
    return (
        <Router>
            <NavBar />
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experiments/scrolling-images" element={<ScrollingImages />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;