import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MaterialDidatico.module.css';

export default function MaterialDidatico({ fase }) {
    // Gerencia qual aba está ativa ('material', 'videos' ou 'exercicios')
    const [abaAtiva, setAbaAtiva] = useState('material');

    // Mock de dados caso a prop fase não seja passada
    const faseDados = fase || {
        idFase: 1,
        materialApoio: `
            <h2>Introdução ao Output com Python</h2>
            <p>O comando mais fundamental em qualquer linguagem de programação é a exibição de dados na tela. Em Python, fazemos isso utilizando a função embutida <code>print()</code>.</p>
            <div class="destaque-nota">
                <i class="fa-solid fa-lightbulb"></i> <strong>Regra de Ouro:</strong> Tudo o que for texto (também chamado de String) deve ser colocado entre aspas simples ( '...' ) ou aspas duplas ( "..." ).
            </div>
            <p>Por exemplo, se você deseja que o computador diga "Olá Mundo", a sintaxe exata e correta que o interpretador espera ler é:</p>
            <div class="codigo-bloco">print("Olá Mundo")</div>
        `
    };

    return (
        <div className={styles.wrapper}>
            <Link to="/modulo" className={styles.btnVoltar}>
                <i className="fa-solid fa-chevron-left"></i> Voltar
            </Link>

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.titulo}>
                        <i className="fa-solid fa-book-bookmark"></i> Trilhas de Aprendizado
                    </h1>
                    <p className={styles.subtitulo}>
                        Acesse conteúdos, assista às aulas e pratique direto no Sandbox
                    </p>
                </div>

                <div className={styles.abasContainer}>
                    {/* Barra de Navegação das Abas */}
                    <div className={styles.barraNavegador}>
                        <button 
                            className={`${styles.abaLabel} ${abaAtiva === 'material' ? styles.abaAtiva : ''}`}
                            onClick={() => setAbaAtiva('material')}
                        >
                            <i className="fa-solid fa-file-lines"></i> Conteúdo Escrito
                        </button>
                        
                        <button 
                            className={`${styles.abaLabel} ${abaAtiva === 'videos' ? styles.abaAtiva : ''}`}
                            onClick={() => setAbaAtiva('videos')}
                        >
                            <i className="fa-solid fa-video"></i> Videoaulas
                        </button>
                        
                        <button 
                            className={`${styles.abaLabel} ${abaAtiva === 'exercicios' ? styles.abaAtiva : ''}`}
                            onClick={() => setAbaAtiva('exercicios')}
                        >
                            <i className="fa-solid fa-code"></i> Praticar Exercícios
                        </button>
                    </div>

                    {/* Conteúdo Dinâmico das Abas */}
                    <div className={styles.painelConteudo}>
                        
                        {/* ABA 1: MATERIAL */}
                        {abaAtiva === 'material' && (
                            <div 
                                className={styles.artigoDidatico}
                                dangerouslySetInnerHTML={{ __html: faseDados.materialApoio }}
                            />
                        )}

                        {/* ABA 2: VÍDEOS */}
                        {abaAtiva === 'videos' && (
                            <div className={styles.videoGrid}>
                                <div className={styles.videoCard}>
                                    <div className={styles.videoContainer}>
                                        <iframe 
                                            src="https://www.youtube.com/embed/5qap5aO4i9A" 
                                            allowFullScreen
                                            title="Videoaula da Fase"
                                        ></iframe>
                                    </div>
                                    <div className={styles.videoInfo}>
                                        <h4>Aula 1: Configurando o Ambiente e Primeiro Print</h4>
                                        <p className={styles.videoDescricao}>
                                            Duração: 12 minutos • Nesta aula aprenderemos os conceitos iniciais da sintaxe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ABA 3: EXERCÍCIOS */}
                        {abaAtiva === 'exercicios' && (
                            <div className={styles.listaExercicios}>
                                <div className={styles.exercicioItem}>
                                    <div className={styles.exercicioInfo}>
                                        <h4>Exercícios</h4>
                                        <p className={styles.exercicioDescricao}>Pratique o que você aprendeu nesta fase.</p>
                                    </div>
                                    <Link to={`/fase/${faseDados.idFase}`} className={styles.btnResolver}>
                                        <i className="fa-solid fa-play"></i> Resolver
                                    </Link>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}