import React, { useEffect, useState } from 'react';
import '../App.css'; // Chemin relatif correct vers Logements.css

const Logements = () => {
    const [logements, setLogements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
                );
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }
                const data = await response.json();
                setLogements(data);
            } catch (error) {
                setError(error.message);
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