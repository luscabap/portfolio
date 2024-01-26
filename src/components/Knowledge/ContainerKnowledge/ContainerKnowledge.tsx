import * as Styles from './styles';

interface IKnowledgeProps {
    title: string,
    icon: string
}

export default function ContainerKnowledge({ title, icon}: IKnowledgeProps){
    return (
        <Styles.Container>
            <img src={icon}/>
            <h1>{title}</h1>
        </Styles.Container>
    )
}