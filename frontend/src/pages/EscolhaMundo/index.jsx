import React from 'react';
import Cabecalho from '../../components/Home/Cabecalho';
import Rodape from '../../components/Home/Rodape';
import CardMundo from '../../components/EscolhaMundo/CardMundo';
import styles from './EscolhaMundo.module.css';

export default function EscolhaMundo() {
    return (
        <div className={styles.wrapper}>

            <main className={styles.telaMundosContainer}>
                <h1 className={styles.tituloPagina}>ESCOLHA SEU MUNDO</h1>

                <div className={styles.containerMundos}>
                    <CardMundo 
                        icone="fa-lightbulb"
                        titulo="Mundo Portugol"
                        descricao="Domine os conceitos básicos e a lógica de programação usando pseudo-código de forma simples e intuitiva."
                        link="/modulo"
                    />

                    <CardMundo 
                        icone="fa-code"
                        titulo="Mundo Python"
                        descricao="Entre no universo da linguagem real! Escreva scripts potentes, use variáveis avançadas e crie seus primeiros programas."
                        link="/modulo"
                    />
                </div>
            </main>
        </div>
    );
}