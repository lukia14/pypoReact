import React, { useState } from 'react';
import styles from './Configuracoes.module.css';

import HeaderConfig from '../../components/Configuracoes/HeaderConfig';
import CardPerfil from '../../components/Configuracoes/CardPerfil';
import CardSenha from '../../components/Configuracoes/CardSenha';
import CardZonaPerigo from '../../components/Configuracoes/CardZonaPerigo';

export default function Configuracoes() {
    // Estados do Formulário de Perfil
    const [email, setEmail] = useState('usuario@pypo.com');

    // Estados do Formulário de Senha
    const [senhaAntiga, setSenhaAntiga] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    // Handlers de submissão
    const handleSalvarPerfil = (e) => {
        e.preventDefault();
        alert('Dados do perfil atualizados!');
    };

    const handleAlterarSenha = (e) => {
        e.preventDefault();
        if (novaSenha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }
        alert('Senha alterada com sucesso!');
    };

    const handleDeletarConta = (e) => {
        e.preventDefault();
        const confirmacao = window.confirm(
            'ATENÇÃO: Tem certeza absoluta que deseja deletar sua conta? Todos os seus dados serão apagados permanentemente.'
        );
        if (confirmacao) {
            alert('Conta excluída.');
        }
    };

    return (
        <div className={styles.crudContainer}>
            <HeaderConfig />

            <div className={styles.configEstrutura}>
                <CardPerfil
                    email={email}
                    setEmail={setEmail}
                    onSalvar={handleSalvarPerfil}
                />

                <CardSenha
                    senhaAntiga={senhaAntiga}
                    setSenhaAntiga={setSenhaAntiga}
                    novaSenha={novaSenha}
                    setNovaSenha={setNovaSenha}
                    confirmarSenha={confirmarSenha}
                    setConfirmarSenha={setConfirmarSenha}
                    onAlterarSenha={handleAlterarSenha}
                />

                <CardZonaPerigo
                    onDeletarConta={handleDeletarConta}
                />
            </div>
        </div>
    );
}