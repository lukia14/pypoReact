import React from 'react';
import styles from './Mascote.module.css';
import mascoteImg from '../../../assets/mascote.png'; 

// Certifique-se de que o "export default" está aqui:
export default function Mascote() {
    return (
        <div className={styles.containerMascote}>
            <img 
                src={mascoteImg} 
                alt="Mascote PYPO" 
                className={styles.imagem} 
            />
        </div>
    );
}