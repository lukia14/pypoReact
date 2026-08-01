import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderConfig.module.css';

export default function HeaderConfig() {
    return (
        <div className={styles.crudHeader}>
            <div>
                <h1 className={styles.crudTitulo}>
                    <i className="fa-solid fa-gear"></i> Configurações
                </h1>
                <p className={styles.crudSubtitulo}>
                    Gerencie suas informações de perfil, credenciais de acesso e conta.
                </p>
            </div>
            <Link to="/principal" className={styles.btnVoltar}>
                <i className="fa-solid fa-house"></i> Voltar Principal
            </Link>
        </div>
    );
}