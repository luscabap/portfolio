import { ProjectProps } from '../../../types/ProjectType';
import TechsProject from './TechsProject/TechsProject';
import * as Styles from './style';
import { Rocket, Code } from '@phosphor-icons/react';

export default function Project({ title, description, img, techs, deploy, repo, concluido, repoName, subtitulo, primario = "true" }: ProjectProps) {
    
    return (
        <Styles.ProjectContainer primario={primario}>
            <Styles.InfosContainer>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className='techs_project'>
                    <h4>{subtitulo}</h4>
                    <Styles.TechsContainer>
                        {
                            techs.map((item, index) => (
                                <TechsProject
                                    key={index}
                                    techs={item}
                                    id={index}
                                />
                            ))
                        }
                    </Styles.TechsContainer>
                </div>
            </Styles.InfosContainer>
            <Styles.ImgContainer concluido={concluido}>
                <img src={img} alt={title} />

                <div className='anchors'>
                    <a href={deploy} target='_blank'>
                        <Rocket size={32} className='anchor__icon' />
                        <h5>Deploy</h5>
                    </a>

                    <a href={repo} target='_blank'>
                        <Code size={32} className='anchor__icon' />
                        <h5>{repoName}</h5>
                    </a>
                </div>
            </Styles.ImgContainer>
        </Styles.ProjectContainer>
    )
}