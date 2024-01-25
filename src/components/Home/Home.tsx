import * as Styles from './styles';
import { Robot } from '@phosphor-icons/react'

export default function Home(){
    return (
        <Styles.Container>
            <h1><Robot size={50} />Olá, o meu nome é <strong>Lucas Baptista</strong></h1>
            <h2>Desenvolvedor Front-End</h2>
            <Styles.ContainerBotoes>
                <button className='btn_github'>GitHub</button>
                <button className='btn_cv'>Download CV</button>
            </Styles.ContainerBotoes>
        </Styles.Container>
        
    )
}