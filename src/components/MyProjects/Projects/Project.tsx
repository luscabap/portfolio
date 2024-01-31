import TechsProject from './TechsProject/TechsProject';
import * as Styles from './style';

interface IProjectProps{
    title: string,
    description: string,
    img: string,
    id?: number,
    techs: string[];
}

export default function Project({ title, description, img, techs }: IProjectProps){

    return (
        <Styles.ProjectContainer>
            <Styles.InfosContainer>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='techs_project'>
                    <h4>Tecnologias usadas</h4>
                    <Styles.TechsContainer>
                        {
                            techs.map(item => (
                            <TechsProject 
                                key={item}
                                teste={item}
                            />
                            ))
                        }
                    </Styles.TechsContainer>
                </div>
            </Styles.InfosContainer>
            <Styles.ImgContainer>
                <img src={img} alt={title} />
            </Styles.ImgContainer>
        </Styles.ProjectContainer>
    )
}