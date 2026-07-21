import React from 'react';
import FormularioAuth from '../../components/Auth/FormularioAuth';
import Mascote from '../../components/Auth/Mascote';
import styles from './Cadastrar.module.css';

export default function Cadastrar() {
    return (
        <div className={styles.wrapper}>
            <main className={styles.containerAuth}>
                <FormularioAuth tipo="cadastro" />
                <Mascote />
            </main>
        </div>
    );
}