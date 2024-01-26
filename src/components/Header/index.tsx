import { MoonStars, SunDim } from '@phosphor-icons/react';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, ContainerIcon } from './styles';


interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const {colors, title} = useContext(ThemeContext);

    return (
        <Container>
            <h1>LUSCABAP</h1>
            <ul className={"lista"}>
                <li className={"lista__item"}>HOME</li>
                <li className={"lista__item"}>SOBRE MIM</li>
                <li className={"lista__item"}>CONHECIMENTOS</li>
                <li className={"lista__item"}>PROJETOS</li>
                <li className={"lista__item"}>CONTATO</li>
            </ul>
            <ContainerIcon onClick={toggleTheme}>
                {
                    title === "darkTheme" ? <MoonStars size={35} color='black' /> : <SunDim size={35} color='yellow'/>
                }
            </ContainerIcon>
        </Container>
    )
}

export default Header;