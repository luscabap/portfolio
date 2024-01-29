import * as Styles from './styles';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Conctact() {
    return (
        <Styles.ContainerContact>
            <h2>Contato</h2>
            <Styles.ContainerContactIcons>
                <a className='containerContact_Icon' href='https://github.com/luscabap' target='_blank'>
                    <FaGithub size={60} color={"#94c6d1"} />
                    <h4>GitHub</h4>
                    <p>@luscabap</p>
                </a>
                <a className='containerContact_Icon' href='https://www.linkedin.com/in/lucas-baptista-da-silva-133779233/' target='_blank'>
                    <FaLinkedin size={60} color={"#94c6d1"} />
                    <h4>Linkedin</h4>
                    <p>Lucas Baptista da Silva</p>
                </a>
                <a className='containerContact_Icon' href='' target='_blank'>
                    <MdEmail size={60} color={"#94c6d1"} />
                    <h4>E-mail</h4>
                    <p>lucasbaptistasilva.dev@gmail.com</p>
                </a>
            </Styles.ContainerContactIcons>

        </Styles.ContainerContact>
    )
}