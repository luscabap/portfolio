import * as Styles from './styles';
import ContainerKnowledge from './ContainerKnowledge/ContainerKnowledge';
import { dataKnowledge } from './data';

export default function Knowledge(){
    return(
        <Styles.Container>
            <h2>Conhecimentos</h2>
            <Styles.teste>            
            {
                dataKnowledge.map((item, i) => <ContainerKnowledge title={item.title} key={i} icon={item.icon}/>)
            }
            </Styles.teste>
        </Styles.Container>
    )
}