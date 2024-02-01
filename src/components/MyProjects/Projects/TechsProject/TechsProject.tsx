import { Tooltip, IconButton, Zoom } from "@mui/material";
import { techIcons } from "../../../TechIcons";
import * as Styles from './style';

interface ITechsProps{
    techs: string,
    id: number
}

export default function TechsProject({ techs, id }: ITechsProps){
    return (
        <>
        <Styles.Container>
            <Tooltip 
                key={id} 
                title={techs}
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 400 }}
            >
                <IconButton className="icon__Tech">      
                {
                    techIcons[techs]
                }
                </IconButton>
            </Tooltip>
        </Styles.Container>
        </>
    )
}