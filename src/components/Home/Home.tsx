import * as Styles from './styles';
import { FaDev } from "react-icons/fa";

export default function Home(){
    return (
        <Styles.Container>
            <h1><FaDev size={50} className='icone_dev'/>Olá, o meu nome é <strong>Lucas Baptista</strong></h1>
            <h2>Desenvolvedor Front-End</h2>
            <Styles.ContainerBotoes>
                <a href='https://github.com/luscabap' target='_blank'><button className='btn_github'>GitHub</button></a>
                <button className='btn_cv'>Download CV</button>
            </Styles.ContainerBotoes>
        </Styles.Container>
    )
}
