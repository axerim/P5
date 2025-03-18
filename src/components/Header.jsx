import React from 'react';
import logo from '../assets/accueil-desktop.png'; // Remplace par le chemin de ton logo

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Kasa Logo" />
            <nav>
                <a href="/">Accueil</a>
                <a href="/about">A Propos</a>
            </nav>
        </header>
    );
};

export default Header;