import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';

export default function Cabecalho() {
    return (
        <header className={styles.containerPrincipal}>
            <div className={styles.containerMenu}>
                <h1 className={styles.t1}>PYPO</h1>
                <div className={styles.containerMenu2}>
                    <Link to="/login" className={`${styles.menuItem} ${styles.item1}`}>Logar</Link>
                    <Link to="/cadastrar" className={`${styles.menuItem} ${styles.item1}`}>Cadastrar</Link>
                    <Link to="/principal" className={`${styles.menuItem} ${styles.item1}`}>Game</Link>
                </div>
            </div>
        </header>
    );
}