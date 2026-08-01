import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CardMundo.module.css';

export default function CardMundo({ icone, titulo, descricao, link }) {
    return (
        <div className={styles.cardMundo}>
            <div className={styles.iconeMundo}>
                <i className={`fa-solid ${icone}`}></i>
            </div>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <Link to={link} className={styles.botaoEntrar}>Entrar</Link>
        </div>
    );
}