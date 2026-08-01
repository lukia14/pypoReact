import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BotaoFase.module.css';

export default function BotaoFase({ numero, titulo, idFase, posicao = 'center' }) {
    // Aplica dinamicamente a classe de alinhamento (left, right, center) caso use o zigue-zague da trilha
    const classePosicao = styles[posicao] || styles.center;

    return (
        <Link 
            to={`/material/${idFase}`} 
            className={`${styles.phase} ${classePosicao}`}
        >
            <div className={styles.bubble}>
                {numero}
            </div>
            <span className={styles.phaseTooltip}>
                Fase {numero}: {titulo}
            </span>
        </Link>
    );
}