import { MoonStars, SunDim, List } from '@phosphor-icons/react';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { BotaoTeste, Container, ContainerHeader, ContainerIcon } from './styles';

interface Props {
    toggleTheme(): void;
    position: string;
}

const Header: React.FC<Props> = ({ toggleTheme, position }) => {
    const {colors, title} = useContext(ThemeContext);

    return (
        <Container>
            <div className={position}>          
                <a href='#home'><h1>LUSCABAP</h1></a>
                <ul className={"lista"}>
                    <a href='#home'><li className={"lista__item"}>HOME</li></a>
                    <a href='#about-me'><li className={"lista__item"}>SOBRE MIM</li></a>
                    <a href='#knowledge'><li className={"lista__item"}>CONHECIMENTOS</li></a>
                    <a href='#project'><li className={"lista__item"}>PROJETOS</li></a>
                    <a href='#contact'><li className={"lista__item"}>CONTATO</li></a>
                </ul>
                <ContainerIcon onClick={toggleTheme}>
                    {
                        title === "darkTheme" ? <MoonStars size={35} color='black' /> : <SunDim size={35} color='yellow'/>
                    }
                </ContainerIcon>
                <List size={32} className={"menuburguer"}/>
            </div>
        </Container>
    )
}

export default Header;