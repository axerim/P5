import React from 'react';
import logo from '../assets/accueil-desktop.png'; // Assure-toi que le chemin est correct
import '../App.css'; // Chemin relatif correct vers App.css

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Kasa Logo" className="header-logo" />
            {/* <nav className="header-nav">
                <a href="/" className="header-link">Accueil</a>
                <a href="/about" className="header-link">À Propos</a>
            </nav> */}
        </header>
    );
};

export default Header;