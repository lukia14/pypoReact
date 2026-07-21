import React from 'react';
import Cabecalho from '../../components/Home/Cabecalho';
import Carrossel from '../../components/Home/Carrossel';
import BotaoResumo from '../../components/Home/BotaoResumo';
import Rodape from '../../components/Home/Rodape';
import styles from './Home.module.css';

export default function Home() {
    return (
        <>
            <Cabecalho />
            
            <Carrossel />

            <main className={styles.container2}>
                <div className={styles.containerPrincipalCaixas}>
                    <BotaoResumo 
                        icone="fa-gamepad" 
                        titulo="Gamificação" 
                        descricao="Aprenda de forma divertida com desafios interativos e recompensas." 
                    />
                    
                    <BotaoResumo 
                        icone="fa-lightbulb" 
                        titulo="Portugol" 
                        descricao="Domine lógica de programação com uma linguagem simples e educativa." 
                    />
                    
                    <BotaoResumo 
                        icone="fa-clipboard-list" 
                        titulo="Exercícios" 
                        descricao="Avance por níveis progressivos e aumente suas habilidades passo a passo." 
                        link="/exercicios"
                    />
                    
                    <BotaoResumo 
                        icone="fa-puzzle-piece" 
                        titulo="Desafios" 
                        descricao="Teste seus conhecimentos com exercícios práticos e estimulantes." 
                    />
                </div>
            </main>

            <Rodape />
        </>
    );
}