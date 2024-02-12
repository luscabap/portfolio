import * as Styles from './styles';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Conctact() {
    return (
        <Styles.ContainerContact id='contact'>
            <h2 className='containerContact__title'>Contato</h2>
            <Styles.ContainerContactIcons>
                <a className='containerContact_Icon' href='https://github.com/luscabap' target='_blank'>
                    <FaGithub size={70} color={"#94c6d1"} />
                    <h4>GitHub</h4>
                    <p>@luscabap</p>
                </a>
                <a className='containerContact_Icon'>
                    <MdEmail size={70} color={"#94c6d1"} />
                    <h4>E-mail</h4>
                    <p>lucasbaptistasilva.dev@gmail.com</p>
                </a>
                <a className='containerContact_Icon' href='https://www.linkedin.com/in/lucas-baptista-da-silva-133779233/' target='_blank'>
                    <FaLinkedin size={70} color={"#94c6d1"} />
                    <h4>LinkedIn</h4>
                    <p>Lucas Baptista da Silva</p>
                </a>
               
            </Styles.ContainerContactIcons>

        </Styles.ContainerContact>
    )
}