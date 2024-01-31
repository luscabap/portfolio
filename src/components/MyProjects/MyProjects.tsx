import * as Styles from './styles';
import { dataProjects } from './dataProjects.ts';
import Project from './Projects/Project';

export default function MyProjects(){
    return (
        <Styles.ContainerProject>
            <h2>Meus Projetos</h2>
            {
                dataProjects.map((item, i) => <Project key={i} title={item.title} description={item.description} img={item.img}/>)
            }
        </Styles.ContainerProject>
        
    )
}