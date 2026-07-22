import React, { useState } from 'react';
import styles from './Loja.module.css';

// Importações corrigidas:
import FlashMessage from '../../components/Loja/FlashMessage';
import HeaderLoja from '../../components/Loja/HeaderLoja';
import Inventario from '../../components/Loja/Inventario';
import CardItem from '../../components/Loja/CardItem';

export default function Loja() {
    const [pontuacao, setPontuacao] = useState(100);
    const [inventario, setInventario] = useState([]);
    const [flash, setFlash] = useState(null);

    const [listaItens] = useState([
        {
            idItem: 1,
            nome: 'Óculos',
            descricao: 'Um oculos muito maneiro!',
            valor: 2,
            icone: 'fa-glasses'
        }
    ]);

    const mostrarFlash = (mensagem, tipo = 'sucesso') => {
        setFlash({ mensagem, tipo });
        setTimeout(() => {
            setFlash(null);
        }, 3000);
    };

    const handleComprar = (item) => {
        if (pontuacao < item.valor) {
            mostrarFlash('Pontos insuficientes para realizar a compra!', 'alerta');
            return;
        }

        setPontuacao((prev) => prev - item.valor);

        setInventario((prev) => {
            const itemExistente = prev.find((i) => i.id === item.idItem);
            if (itemExistente) {
                return prev.map((i) =>
                    i.id === item.idItem ? { ...i, qtd: i.qtd + 1 } : i
                );
            }
            return [...prev, { id: item.idItem, nome: item.nome, qtd: 1 }];
        });

        mostrarFlash(`Você comprou ${item.nome} com sucesso!`, 'sucesso');
    };

    const handleSalvar = () => {
        mostrarFlash('Progresso salvo com sucesso!', 'sucesso');
    };

    return (
        <div className={styles.telaLojaContainer}>
            <FlashMessage flash={flash} />

            <HeaderLoja pontuacao={pontuacao} onSalvar={handleSalvar} />

            <h1 className={styles.tituloLoja}>Loja Pypo</h1>
            <p className={styles.subtituloLoja}>Passe o mouse sobre os itens para ver os detalhes!</p>

            <div className={styles.layoutLojaCorpo}>
                <Inventario itens={inventario} />

                <div className={styles.gridLoja}>
                    {listaItens.map((item) => (
                        <CardItem key={item.idItem} item={item} onComprar={handleComprar} />
                    ))}
                </div>
            </div>
        </div>
    );
}