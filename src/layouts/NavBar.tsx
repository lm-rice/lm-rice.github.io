import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/resume', label: 'Resume'},
    { to: '/projects', label: 'Projects' },
    { to: '/experiments/scrolling-images', label: 'Experiments' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' }
];

const NavBar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <nav>
            <div className="nav-container">
                <Link to="/" className="nav-brand">Lucy Rice</Link>
                <div className="nav-links">
                    {navLinks.map(link => (
                        <Link key={link.to} to={link.to} className="nav-link">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    ☰
                </button>
                {mobileMenuOpen && (
                    <div className="mobile-menu show">
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;