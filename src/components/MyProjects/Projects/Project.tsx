import TechsProject from './TechsProject/TechsProject';
import * as Styles from './style';
import { Rocket, Code } from '@phosphor-icons/react';

interface IProjectProps {
    title: string,
    description: string,
    img: string,
    id: number,
    techs: string[],
    deploy: string,
    repo: string
}

export default function Project({ title, description, img, techs, id, deploy, repo }: IProjectProps) {

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

                <div className='anchors'>
                    <a href={deploy} target='_blank'>
                        <Rocket size={32} className='anchor__icon' />
                        <h5>Deploy</h5>
                    </a>

                    <a href={repo} target='_blank'>
                        <Code size={32} className='anchor__icon' />
                        <h5>Repositório</h5>
                    </a>
                </div>
            </Styles.ImgContainer>
        </Styles.ProjectContainer>
    )
}