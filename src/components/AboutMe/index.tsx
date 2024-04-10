import * as Styles from './styles';
import FotoLucas from '../../../public/lucas.png'

export default function AboutMe() {
    return (
        <Styles.Container id="about-me">
            <div className='infos'>
                <h2 className='infos__title_aboutme'>&lt;Sobre mim /&gt;</h2>
                <h3 className='infos__name'>Lucas Baptista da Silva</h3>
                <p className='infos__text'>Tenho 19 anos de idade e estou cursando o 5° e último semestre de Análise e Desenvolvimento de Sistema na faculdade UNIBR no período noturno e no meu tempo livre estudo as tecnologias voltadas à área de front-end.</p>
                <p className='infos__text'>Acredito que o cenário tecnológico mundial está em permanente evolução. Por esse motivo, empenho 110% do meu tempo e energia, uma vez que meu objetivo de vida é seguir minha paixão: a PROGRAMAÇÃO!</p>
            </div>
            <div className='photo'>
                <img src={FotoLucas} alt="Foto do Lucas Baptista" />
            </div>
            
        </Styles.Container >
        
    )
}