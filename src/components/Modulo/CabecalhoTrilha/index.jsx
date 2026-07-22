import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CabecalhoTrilha.module.css';

export default function CabecalhoTrilha() {
    const navigate = useNavigate();

    return (
        <header className={styles.headerContainer}>
            <nav className={styles.sidebar}>
                <div className={styles.logo}>PYPO</div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/escolha-mundo">
                            <i className="fa-solid fa-arrow-left"></i>
                            Voltar
                        </Link>
                    </li>
                    <li>
                        <Link to="/perfil">
                            <i className="fa-solid fa-user"></i>
                            Perfil
                        </Link>
                    </li>
                    <li>
                        <Link to="/loja">
                            <i className="fa-solid fa-store"></i>
                            Loja
                        </Link>
                    </li>
                    <li>
                        <Link to="/conquistas">
                            <i className="fa-solid fa-trophy"></i>
                            Conquistas
                        </Link>
                    </li>
                    <li>
                        <button 
                            onClick={() => navigate('/login')} 
                            className={styles.btnLogout}
                        >
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Sair
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}