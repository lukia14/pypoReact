import React from 'react';
import styles from './FlashMessage.module.css';

export default function FlashMessage({ flash }) {
    if (!flash) return null;

    const tipoClasse = styles[`flash${flash.tipo.charAt(0).toUpperCase() + flash.tipo.slice(1)}`].toLowerCase();

    return (
        <div id={styles.flashContainer}>
            <div className={`${styles.flashMessage} ${tipoClasse}`}>
                {flash.mensagem}
            </div>
        </div>
    );
}