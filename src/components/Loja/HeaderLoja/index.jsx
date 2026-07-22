import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderLoja.module.css';

export default function HeaderLoja({ pontuacao, onSalvar }) {
    return (
        <div className={styles.lojaHeaderActions}>
            <div className={styles.grupoBotoesSair}>
                <Link to="/modulo" className={styles.botaoSairCancelar} title="Sair sem salvar">
                    <i className="fa-solid fa-xmark"></i> Sair
                </Link>

                <button onClick={onSalvar} className={styles.botaoSairSalvar} title="Salvar compras e sair">
                    <i className="fa-solid fa-floppy-disk"></i> Salvar
                </button>
            </div>

            <div className={styles.saldoUsuario}>
                <i className="fa-solid fa-coins" style={{ color: '#ffd700' }}></i>
                <span id={styles.pontuacao}>pontuação: {pontuacao}</span>
            </div>
        </div>
    );
}