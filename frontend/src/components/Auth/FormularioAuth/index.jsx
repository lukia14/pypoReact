import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FormularioAuth.module.css';

export default function FormularioAuth({ tipo }) {
    const isCadastro = tipo === 'cadastro';

    return (
        <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
            <h1 className={styles.titulo}>
                {isCadastro ? 'Cadastro' : 'Login'}
            </h1>

            {/* Botões Social Link */}
            <div className={styles.socialButtons}>
                <button type="button" className={styles.botaoLink}>
                    <i className="fa-brands fa-google"></i> Google
                </button>
                <button type="button" className={styles.botaoLink}>
                    <i className="fa-brands fa-github"></i> GitHub
                </button>
            </div>

            {/* Inputs */}
           <div className={styles.inputsContainer}>
                {isCadastro && (
                    <div className={styles.inputGrupo}>
                        <label htmlFor="nickname">Nickname</label>
                        <input type="text" id="nickname" name="nickname" required />
                    </div>
                )}

                <div className={styles.inputGrupo}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className={styles.inputGrupo}>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" name="senha" required />
                </div>
            </div>  

            {/* Botão Enviar */}
            <button type="submit" className={styles.botaoEnviar}>
                Enviar
            </button>

            {/* Links Auxiliares */}
            <div className={styles.esqueceuSenha}>
                {!isCadastro ? (
                    <p>Esqueceu a senha? <Link to="/recuperar-senha" className={styles.link}>Clique aqui</Link></p>
                ) : (
                    <p>Já possui uma conta? <Link to="/login" className={styles.link}>Logar</Link></p>
                )}
            </div>
        </form>
    );
}