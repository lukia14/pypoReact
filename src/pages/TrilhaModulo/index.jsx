import React from 'react';
import CabecalhoTrilha from '../../components/Modulo/CabecalhoTrilha';
import BotaoFase from '../../components/Modulo/BotaoFase';
import styles from './TrilhaModulo.module.css';

export default function TrilhaModulo({ listaFases = [] }) {
    const fasesExemplo = [
        { idFase: 1, titulo: "Introdução às Variáveis" },
        { idFase: 2, titulo: "Estruturas Condicionais" },
        { idFase: 3, titulo: "Laços de Repetição" }
    ];

    const fasesParaExibir = listaFases.length > 0 ? listaFases : fasesExemplo;

    return (
        <div className={styles.wrapper}>
            {/* Novo cabeçalho em pílula exclusivo da área do módulo */}
            <CabecalhoTrilha />

            <main className={styles.content}>
                <div className={styles.pathContainer}>
                    {fasesParaExibir.map((fase, index) => (
                        <BotaoFase
                            key={fase.idFase}
                            idFase={fase.idFase}
                            numero={index + 1}
                            titulo={fase.titulo}
                            posicao="center"
                        />
                    ))}
                </div>
            </main>

        </div>
    );
}