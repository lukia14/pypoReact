import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BotaoResumo.module.css';

export default function BotaoResumo({ icone, titulo, descricao, link }) {
    const conteudo = (
        <>
            <h2><i className={`fa-solid ${icone}`}></i>{titulo}</h2>
            <p>{descricao}</p>
        </>
    );

    if (link) {
        return (
            <Link className={styles.item} to={link}>
                <div>{conteudo}</div>
            </Link>
        );
    }

    return (
        <div className={styles.item}>
            {conteudo}
        </div>
    );
}