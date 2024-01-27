import * as Styles from './styles';
import projects from './dataProjects.json';
import Project from './Projects/Project';

export default function MyProjects(){
    return (
        <Styles.ContainerProject>
            <h2>Meus Projetos</h2>
            {
                projects.map((item, i) => <Project key={i} title={item.title} description={item.description} img={item.img}/>)
            }
        </Styles.ContainerProject>
        
    )
}