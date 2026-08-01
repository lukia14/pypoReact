import React from 'react';
import styles from './CardPerfil.module.css';

export default function CardPerfil({ email, setEmail, onSalvar }) {
    return (
        <div className={styles.configCard}>
            <div className={styles.cardHeaderPypo}>
                <h3><i className="fa-solid fa-user-gear"></i> Dados do Perfil</h3>
                <p>Altere seu e-mail de contato.</p>
            </div>

            <form onSubmit={onSalvar}>
                <div className={styles.formLinha}>
                    <div className={styles.formGrupo}>
                        <label className={styles.formLabel}>E-mail</label>
                        <input
                            type="email"
                            className={styles.inputPypo}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={styles.formAcoesSalvar}>
                    <button type="submit" className={styles.btnSalvar}>
                        <i className="fa-solid fa-floppy-disk"></i> Salvar Alterações
                    </button>
                </div>
            </form>
        </div>
    );
}