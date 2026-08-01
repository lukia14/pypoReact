import React from 'react';
import styles from './CardZonaPerigo.module.css';

export default function CardZonaPerigo({ onDeletarConta }) {
    return (
        <div className={styles.configCard}>
            <div className={styles.cardHeaderPypo}>
                <h3><i className="fa-solid fa-triangle-exclamation"></i> Zona de Perigo</h3>
                <p>Ações irreversíveis para a exclusão do seu perfil no sistema.</p>
            </div>

            <div className={styles.perigoConteudo}>
                <div className={styles.perigoTexto}>
                    <strong>Deletar a minha conta PYPO</strong>
                    <p>
                        A exclusão da conta apagará permanentemente todo o seu progresso,
                        estatísticas e acessos. Esta ação não poderá ser desfeita.
                    </p>
                </div>
                <form onSubmit={onDeletarConta}>
                    <button type="submit" className={styles.btnDeletarConta}>
                        <i className="fa-solid fa-user-xmark"></i> Excluir Conta
                    </button>
                </form>
            </div>
        </div>
    );
}