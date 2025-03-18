import React from 'react';
import '../App.css'; 

const Article = ({ title }) => {
    return (
        <section className="article">
            <h3>{title}</h3>
            <div className="container">
                <div className="articles-wrapper">
                    <article className="article">
                        <img src="https://via.placeholder.com/340x200" alt="Exemple" />
                        <h3>Titre de la</h3>
                        <p>location</p>
                    </article>
                    <article className="article">
                        <img src="https://via.placeholder.com/340x200" alt="Exemple" />
                        <h3>Titre de la</h3>
                        <p>location</p>
                    </article>
                    <article className="article">
                        <img src="https://via.placeholder.com/340x200" alt="Exemple" />
                        <h3>Titre de la</h3>
                        <p>location</p>
                    </article>
                    <article className="article">
                        <img src="https://via.placeholder.com/340x200" alt="Exemple" />
                        <h3>Titre de la</h3>
                        <p>location</p>
                    </article>
                    <article className="article">
                        <img src="https://via.placeholder.com/340x200" alt="Exemple" />
                        <h3>Titre de la</h3>
                        <p>location</p>
                    </article>
                    <article className="article">
                        <img src="https://via.placeholder.com/340x200" alt="Exemple" />
                        <h3>Titre de la</h3>
                        <p>location</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Article;