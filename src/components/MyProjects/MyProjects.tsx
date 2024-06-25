import * as Styles from './styles';
import { projects } from './dataProjects.ts';
import Project from './Projects/Project';
import { useTranslation } from 'react-i18next';

export default function MyProjects(){
    const { t } = useTranslation();
    return (
        <Styles.ContainerProject id="project">
            <h2 className='containerProject__title'>&lt;{t("myProjectsTitle")} /&gt;</h2>
            {
                projects.dataProjects.map(item => 
                    <Project
                        key={item.id} 
                        title={item.title} 
                        description={item.description} 
                        img={item.img} techs={item.techs} 
                        deploy={item.deploy} 
                        repo={item.repo} id={item.id}
                        concluido={item?.concluido}
                    />)
            }
        </Styles.ContainerProject>
        
    )
}