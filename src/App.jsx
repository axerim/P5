import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Logements from './components/Logements';
import Footer from './components/Footer';
import './App.css'; // Import des styles fusionnés

const App = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Logements />
            <Footer />
        </div>
    );
};

export default App;