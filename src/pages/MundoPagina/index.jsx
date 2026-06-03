import styles from './Mundo.module.css'
import EscolhaMundo from '../../components/EscolhaMundo';
import NavegacaoMundo from '../../components/NavegacaoMundo';
function Mundo(){
    const listMundo = [
        {
            titulo: 'Mundo Portugol',
            descricao: 'Domine os conceitos básicos e a lógica de programação usando pseudo-código de forma simples e intuitiva.',
            icone:'fa-solid fa-lightbulb'
        },
        {
            titulo: 'Mundo Python',
            descricao: 'Entre no universo da linguagem real! Escreva scripts potentes, use variáveis avançadas e crie seus primeiros programas',
            icone:'fa-solid fa-code'
        }
    ];

    return (
            <div className={styles.telaMundosContainer}>
                <NavegacaoMundo/>
                <h1 className={styles.tituloPagina}>Escolha seu Mundo</h1>
                <div className={styles.containerMundos}>
                    {listMundo.map((mundo, index) => (
                        <EscolhaMundo
                            key={index} 
                            titulo={mundo.titulo} 
                            descricao={mundo.descricao}  
                            icone={mundo.icone}
                        />
                    ))}
                </div>
            </div>
    )
}

export default Mundo;