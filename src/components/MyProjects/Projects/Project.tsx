import * as Styles from './style'

interface IProjectProps{
    title: string,
    description: string,
    img: string
}

export default function Project({ title, description, img }: IProjectProps){
    return (
        <Styles.ProjectContainer>
            <Styles.InfosContainer>
                <h3>{title}</h3>
                <p>{description}</p>
            </Styles.InfosContainer>
            <Styles.ImgContainer>
                <img src={img} alt={title}/>
            </Styles.ImgContainer>
        </Styles.ProjectContainer>
    )
}