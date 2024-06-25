import { MoonStars, SunDim, List } from '@phosphor-icons/react';
import { MdTranslate } from "react-icons/md";
import React, { useState } from 'react';
import { Container, ContainerIcon } from './styles';
import light from '../../styles/themes/light';
import { DefaultTheme } from 'styled-components/dist/types';
import { useTranslation } from 'react-i18next';

interface Props {
    toggleTheme(): void;
    position?: string;
    themeSite: DefaultTheme,
    handleLanguage: () => void;
}

const Header: React.FC<Props> = ({ toggleTheme, themeSite, handleLanguage }) => {
    const [menu, setMenu] = useState("lista__desktop");

    function handleMenuBurguer(){
        setMenu(prevMenu => prevMenu === "lista__desktop" ? "lista__mobile" : "lista__desktop")
    }

    const iconPropsLight = {
        size: 40,
        color: "black"
    }

    const iconPropsDark = {
        size: 40,
        color: "yellow"
    }

    const { t } = useTranslation();

    return (
        <Container>
            <div className="container__display_default">
                <a href='#home' className='containerTitle'><h1 className='title'>&lt;LUSCABAP /&gt;</h1></a>
                <ul className={menu}>
                    <a href='#home'><li className="lista__item">{t("link1")}</li></a>
                    <a href='#about-me'><li className="lista__item">{t("link2")}</li></a>
                    <a href='#knowledge'><li className="lista__item">{t("link3")}</li></a>
                    <a href='#project'><li className="lista__item">{t("link4")}</li></a>
                    <a href='#contact'><li className="lista__item">{t("link5")}</li></a>
                </ul>
                <ContainerIcon>
                    <div onClick={toggleTheme} className="containerIconTheme">
                        {
                            themeSite === light ? <MoonStars {...iconPropsLight} />
                            : <SunDim {...iconPropsDark}/>
                        }
                    </div>
                    <div className="containerIconTranslate" onClick={handleLanguage}>
                        {
                            themeSite === light ? <MdTranslate {...iconPropsLight}/> : <MdTranslate {...iconPropsDark}/>
                        }
                    </div>
                </ContainerIcon>
                <List
                    size={32} 
                    className='menuburguer' 
                    onClick={handleMenuBurguer}
                />
            </div>
        </Container>
    )
}

export default Header;