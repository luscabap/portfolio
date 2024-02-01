import TechsProject from './TechsProject/TechsProject';
import * as Styles from './style';

interface IProjectProps{
    title: string,
    description: string,
    img: string,
    id: number,
    techs: string[];
}

export default function Project({ title, description, img, techs, id }: IProjectProps){

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
                                    key={id}
                                    techs={item}
                                    id={id}
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