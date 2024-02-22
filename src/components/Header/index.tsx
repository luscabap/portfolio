import { MoonStars, SunDim, List } from '@phosphor-icons/react';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { BotaoTeste, Container, ContainerHeader, ContainerIcon } from './styles';

interface Props {
    toggleTheme(): void;
    position: string;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const {colors, title} = useContext(ThemeContext);
    const [menu, setMenu] = useState("lista__desktop")

    function handleMenuBurguer(){
        setMenu(prevMenu => prevMenu === "lista__desktop" ? "lista__mobile" : "lista__desktop")
    }

    return (
        <Container>
            <div className="container__display_default">
                <a href='#home'><h1 className='title'>&lt;LUSCABAP /&gt;</h1></a>
                <ul className={menu}>
                    <a href='#home'><li className="lista__item">HOME</li></a>
                    <a href='#about-me'><li className="lista__item">SOBRE MIM</li></a>
                    <a href='#knowledge'><li className="lista__item">CONHECIMENTOS</li></a>
                    <a href='#project'><li className="lista__item">PROJETOS</li></a>
                    <a href='#contact'><li className="lista__item">CONTATO</li></a>
                </ul>
                <ContainerIcon onClick={toggleTheme}>
                    {
                        title === "darkTheme" ? <MoonStars size={35} color='black' /> : <SunDim size={35} color='yellow'/>
                    }
                </ContainerIcon>
                <List 
                    size={32} 
                    className='menuburguer' 
                    onClick={handleMenuBurguer}/>
            </div>
        </Container>
    )
}

export default Header;