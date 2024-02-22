import * as Styles from './styles';
import ContainerKnowledge from './ContainerKnowledge/ContainerKnowledge';
import { dataKnowledge } from './data';

export default function Knowledge(){
    return(
        <Styles.Container id="knowledge">
            <h2 className='containerKnowledge__title'>&lt;Conhecimentos /&gt;</h2>
            <Styles.ContainerItemKnowledge className=''>            
            {
                dataKnowledge.map((item, i) => <ContainerKnowledge title={item.title} key={i} icon={item.icon}/>)
            }
            </Styles.ContainerItemKnowledge>
        </Styles.Container>
    )
}