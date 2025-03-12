import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav>
            <div className="nav-container">
                <Link to="/" className="nav-brand">Lucy Rice</Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/gems/scrolling-images" className="nav-link">Gems</Link>
                    <Link to="/journal" className="nav-link">Journal</Link>
                    <Link to="/resume" className="nav-link">Resume</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    ☰
                </button>
                {mobileMenuOpen && (
                    <div className="mobile-menu show">
                        <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
                        <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
                        <Link to="/projects" className="nav-link" onClick={handleLinkClick}>Projects</Link>
                        <Link to="/gems/scrolling-images" className="nav-link" onClick={handleLinkClick}>Gems</Link>
                        <Link to="/journal" className="nav-link" onClick={handleLinkClick}>Journal</Link>
                        <Link to="/resume" className="nav-link" onClick={handleLinkClick}>Resume</Link>
                        <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;