import { useState } from 'react';
import * as Styles from './style';
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

interface IProjectProps{
    title: string,
    description: string,
    img: string
}

export default function Project({ title, description, img }: IProjectProps){
    const [state, setState] = useState("");

    function exibiOpcoes(){
        setState("teste");
    }

    return (
        <Styles.ProjectContainer>
            <Styles.InfosContainer>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='techs_project'>
                    <h4>Tecnologias usadas</h4>
                    <FaReact />
                    <SiTypescript />
                </div>
            </Styles.InfosContainer>
            <Styles.ImgContainer onMouseEnter={exibiOpcoes} onMouseOut={() => setState("")} className={state}>
                <img src={img} alt={title} />
            </Styles.ImgContainer>
        </Styles.ProjectContainer>
    )
}