import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Rodape.module.css';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodapeConteudo}>
                <p>
                    Desenvolvido por Lucas Silva Fernandes e Marco Antônio Pedroso Junqueira. 
                    <Link to="/sobre" className={styles.saibamais}> Clique aqui</Link> para saber mais.
                </p>
                {/* Links externos continuam como <a> */}
                <a href="https://facebook.com/projectPypo" target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <i className="fa-brands fa-facebook"></i>projectPypo
                </a>
                <a href="https://instagram.com/pypo.project" target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <i className="fa-brands fa-instagram"></i>pypo.project
                </a>
                <a href="https://github.com/Pypo_project" target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <i className="fa-brands fa-github"></i>Pypo_project
                </a>
            </div>
        </footer>
    );
}