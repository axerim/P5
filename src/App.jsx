import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const articles = [
        "Titre de la location 1",
        "Titre de la location 2",
        "Titre de la location 3",
        "Titre de la location 4"
    ];

    return (
        <div>
            <Header />
            <Hero />
            <section className="articles">
                {articles.map((title, index) => (
                    <Article key={index} title={title} />
                ))}
            </section>
            <Footer />
        </div>
    );
};

export default App;