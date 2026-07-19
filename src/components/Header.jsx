"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container nav-container">
                <a href="#hero" className="logo" onClick={handleLinkClick}>
                    <span className="logo-accent">&lt;</span>ARESH<span className="logo-accent">.AI /&gt;</span>
                </a>
                
                <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#about" className="nav-link" onClick={handleLinkClick}>About</a>
                    <a href="#skills" className="nav-link" onClick={handleLinkClick}>Skills</a>
                    <a href="#experience" className="nav-link" onClick={handleLinkClick}>Experience</a>
                    <a href="#projects" className="nav-link" onClick={handleLinkClick}>Projects</a>
                    <a href="#agent-playground" className="nav-link" onClick={handleLinkClick}>AI Agent Chat</a>
                    <a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a>
                </nav>

                <div className="nav-actions">
                    <a href="#contact" className="btn btn-outline nav-btn">
                        <span>Hire Me</span>
                    </a>
                    <button 
                        className="mobile-nav-toggle" 
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
