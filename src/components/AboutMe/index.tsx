import * as Styles from './styles';
import FotoLucas from '../../../public/lucas.png'

export default function AboutMe() {
    return (
        <Styles.Container>
            <div className='infos'>
                <h1>Sobre mim</h1>
                <h3>Lucas Baptista da Silva</h3>
                <p>Tenho 19 anos de idade, estou cursando o último semestre de Análise e Desenvolvimento de Sistema na faculdade UNIBR e sempre fui apaixonado pela área da tecnologia.</p>
                <p>Acredito que esse mundo tecnológico está em constante evolução, portanto aproveito para dedicar 110% do meu tempo e vontade, pois o que tenho como objetivo da vida é fazer o que eu amo, programar!</p>
            </div>
            <div className='photo'>
                <img src={FotoLucas} alt="Foto do Lucas Baptista" />
            </div>
            
        </Styles.Container >
        
    )
}