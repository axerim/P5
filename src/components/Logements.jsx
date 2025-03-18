import React, { useEffect, useState } from 'react';
import '../App.css'; 
import logementsData from '../data/logements.json'; // Import des données locales

const Logements = () => {
    const [logements, setLogements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Tentative de récupération des données depuis l'URL...");
                const response = await fetch(
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
                );
                console.log("Réponse reçue :", response);

                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }

                const data = await response.json();
                console.log("Données récupérées depuis l'URL :", data);
                setLogements(data); // Utilise les données de l'URL
            } catch (error) {
                console.error("Erreur lors de la récupération des données depuis l'URL :", error);

                // Si la requête fetch échoue, utilise les données locales
                console.log("Utilisation des données locales...");
                setLogements(logementsData); // Utilise les données locales
                setError(null); // Réinitialise l'erreur car on utilise les données locales
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <section className="logements">
            {logements.map((logement) => (
                <div key={logement.id} className="logement-card">
                    <img src={logement.cover} alt={logement.title} className="logement-image" />
                    <h3 className="logement-title">{logement.title}</h3>
                </div>
            ))}
        </section>
    );
};

export default Logements;