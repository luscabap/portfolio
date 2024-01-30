import * as Styles from './styles';
import FotoLucas from '../../../public/lucas.png'

export default function AboutMe() {
    return (
        <Styles.Container>
            <div className='infos'>
                <h2>Sobre mim</h2>
                <h3>Lucas Baptista da Silva</h3>
                <p>Tenho 19 anos de idade e estou trabalhando como estagiário de Analista de Suporte na empresa Softcase. Atualmente estou cursando o 5° e último semestre de Análise e Desenvolvimento de Sistema na faculdade UNIBR no período noturno e no meu tempo livre estudo as tecnologias voltadas à área de front-end.</p>
                <p>Acredito que o cenário tecnológico mundial está em permanente evolução. Por esse motivo, empenho 110% do meu tempo e energia, uma vez que meu objetivo de vida é seguir minha paixão: a PROGRAMAÇÃO!</p>
            </div>
            <div className='photo'>
                <img src={FotoLucas} alt="Foto do Lucas Baptista" />
            </div>
            
        </Styles.Container >
        
    )
}