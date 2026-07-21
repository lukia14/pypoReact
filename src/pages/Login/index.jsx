import React from 'react';
import FormularioAuth from '../../components/Auth/FormularioAuth';
import Mascote from '../../components/Auth/Mascote';
import styles from './Login.module.css';

export default function Login() {
    return (
        <div className={styles.wrapper}>
            <main className={styles.containerAuth}>
                <FormularioAuth tipo="login" />
                <Mascote />
            </main>
        </div>
    );
}