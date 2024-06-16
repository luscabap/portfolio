import * as Styles from './styles';
import { dataProjects } from './dataProjects.ts';
import Project from './Projects/Project';

export default function MyProjects(){
    return (
        <Styles.ContainerProject id="project">
            <h2 className='containerProject__title'>&lt;Meus Projetos /&gt;</h2>
            {
                dataProjects.map(item => 
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