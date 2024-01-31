import { techIcons } from "../../../TechIcons";
import * as Styles from './style'

interface ITechsProps{
    teste: string
}

export default function TechsProject({ teste }: ITechsProps){
    return (
        <>
        <Styles.Container>  
            {
                techIcons[teste]
            }
        </Styles.Container>
        </>
    )
}