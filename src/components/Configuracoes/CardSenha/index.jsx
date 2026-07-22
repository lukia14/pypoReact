import React from 'react';
import styles from './CardSenha.module.css';

export default function CardSenha({
    senhaAntiga,
    setSenhaAntiga,
    novaSenha,
    setNovaSenha,
    confirmarSenha,
    setConfirmarSenha,
    onAlterarSenha
}) {
    return (
        <div className={styles.configCard}>
            <div className={styles.cardHeaderPypo}>
                <h3><i className="fa-solid fa-lock"></i> Alterar Senha</h3>
                <p>Mantenha sua conta segura atualizando sua senha regularmente.</p>
            </div>

            <form onSubmit={onAlterarSenha}>
                <div className={`${styles.formGrupo} ${styles.mb3}`}>
                    <label className={styles.formLabel}>Senha Antiga</label>
                    <input
                        type="password"
                        className={styles.inputPypo}
                        placeholder="••••••••"
                        value={senhaAntiga}
                        onChange={(e) => setSenhaAntiga(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.formLinha}>
                    <div className={styles.formGrupo}>
                        <label className={styles.formLabel}>Nova Senha</label>
                        <input
                            type="password"
                            className={styles.inputPypo}
                            placeholder="Mínimo 6 caracteres"
                            value={novaSenha}
                            onChange={(e) => setNovaSenha(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formGrupo}>
                        <label className={styles.formLabel}>Confirmar Nova Senha</label>
                        <input
                            type="password"
                            className={styles.inputPypo}
                            placeholder="Repita a nova senha"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className={styles.formAcoesSalvar}>
                    <button type="submit" className={styles.btnSalvar}>
                        <i className="fa-solid fa-key"></i> Atualizar Senha
                    </button>
                </div>
            </form>
        </div>
    );
}