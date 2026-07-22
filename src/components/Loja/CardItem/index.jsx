import React from 'react';
import styles from './cardItem.module.css';

export default function CardItem({ item, onComprar }) {
    return (
        <div className={styles.cardItem}>
            <div className={styles.areaInterativa}>
                <div className={styles.iconeItem}>
                    <i className={`fa-solid ${item.icone}`}></i>
                </div>
                <div className={styles.descricaoItem}>
                    <p>{item.descricao}</p>
                </div>
            </div>
            <h3 className={styles.nomeItem}>{item.nome}</h3>
            <div className={styles.precoItem}>
                <i className="fa-solid fa-coins"></i>
                <span>{item.valor}</span>
            </div>
            <button
                className={styles.botaoComprar}
                onClick={() => onComprar(item)}
            >
                Comprar
            </button>
        </div>
    );
}