import React from 'react';
import styles from './Inventario.module.css';

export default function Inventario({ itens }) {
    return (
        <aside className={styles.secaoInventario}>
            <h2><i className="fa-solid fa-box-open"></i> Meu Inventário</h2>

            <div className={styles.inventarioCabecalho}>
                <span className={styles.txtColuna}>Item</span>
                <span className={styles.txtColuna}>Qtd</span>
            </div>

            <div id={styles.inventarioDados}>
                {itens.length === 0 ? (
                    <p className={styles.inventarioVazio}>Seu inventário está vazio.</p>
                ) : (
                    itens.map((item) => (
                        <div key={item.id} className={styles.itemInventario}>
                            <span className={styles.nomeItemInventario}>{item.nome}</span>
                            <span className={styles.qtdItemInventario}>{item.qtd}</span>
                        </div>
                    ))
                )}
            </div>
        </aside>
    );
}