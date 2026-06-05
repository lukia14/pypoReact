import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconeErro}>
          <i className="fa-solid fa-compass-drafting"></i>
        </div>
        <h1 className={styles.titulo}>404</h1>
        <h2 className={styles.subtitulo}>Mundo não encontrado!</h2>
        <p className={styles.descricao}>
          O caminho que você tentou acessar não existe ou foi removido do sistema de arquivos.
        </p>
        <Link to="/" className={styles.botaoVoltar}>
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}

export default NotFound;