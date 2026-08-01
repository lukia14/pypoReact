import React from 'react';
import styles from './Carrossel.module.css';

// Importando as imagens do assets
import fundo1 from '../../../assets/fundo1.jpg';
import fundo2 from '../../../assets/fundo2.jpg';
import mascote from '../../../assets/mascote.png';

export default function Carrossel() {
    return (
        <main className={styles.mainPrincipal}>
            <div className={styles.slogan}>
                <p></p>
            </div>
            <div className={styles.slideshow}>
                <div className={styles.slide} style={{ backgroundImage: `url(${fundo1})` }}></div>
                <div className={styles.slide} style={{ backgroundImage: `url(${fundo2})` }}></div>
                <div className={styles.slide} style={{ backgroundImage: `url(${mascote})` }}></div>
            </div>
        </main>
    );
}