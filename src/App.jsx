import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Article from './components/Article';
import Footer from './components/Footer';
import Logements from './components/Logements'; // Import du nouveau composant Logements
import './App.css';

const App = () => {
    // Données pour les articles
    const articles = [
        "Titre de la location 1",
        "Titre de la location 2",
        "Titre de la location 3",
        "Titre de la location 4"
    ];

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Hero */}
            <Hero />

            {/* Section des articles */}
            <section className="articles">
                {articles.map((title, index) => (
                    <Article key={index} title={title} />
                ))}
            </section>

            {/* Section des logements */}
            <Logements />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;