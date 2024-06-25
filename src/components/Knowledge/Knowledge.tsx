import * as Styles from './styles';
import ContainerKnowledge from './ContainerKnowledge/ContainerKnowledge';
import { dataKnowledge } from './data';
import { useTranslation } from 'react-i18next';

export default function Knowledge(){
    const { t } = useTranslation();

    return(
        <Styles.Container id="knowledge">
            <h2 className='containerKnowledge__title'>&lt;{t("knowledgeTitle")} /&gt;</h2>
            <Styles.ContainerItemKnowledge className=''>            
            {
                dataKnowledge.map((item, i) => <ContainerKnowledge title={item.title} key={i} icon={item.icon}/>)
            }
            </Styles.ContainerItemKnowledge>
        </Styles.Container>
    )
}