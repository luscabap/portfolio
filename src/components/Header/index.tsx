import { List, MoonStars, SunDim } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import { MdTranslate } from "react-icons/md";
import { Link } from "react-scroll";
import { DefaultTheme } from "styled-components/dist/types";
import light from "../../styles/themes/light";
import { MenuMobile } from "../MenuMobile";
import { Container, ContainerIcon } from "./styles";

interface Props {
  toggleTheme(): void;
  position?: string;
  themeSite: DefaultTheme;
  handleLanguage: () => void;
}

const Header: React.FC<Props> = ({
  toggleTheme,
  themeSite,
  handleLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevValue => !prevValue)
  }

  const iconPropsLight = {
    size: 40,
    color: "black",
  };

  const iconPropsDark = {
    size: 40,
    color: "yellow",
  };

  const { t } = useTranslation();

  const valueToString = String(isOpen)

  return (
    <Container 
      isopen={valueToString}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className="container__display_default">
        <Link 
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
            className="containerTitle"
        ><h1 className="title">&lt;LUSCABAP /&gt;</h1>
        </Link>
        <ul className='lista__desktop'>
          <li className="lista__item">
            <Link 
                to="home"
                smooth={true}
                duration={500}
                offset={-100}
            >{t("link1")}</Link>
          </li>
          <li className="lista__item">
            <Link 
                to="about-me"
                smooth={true}
                duration={500}
                offset={-100}
            >{t("link2")}</Link>
          </li>
          <li className="lista__item">
            <Link 
                to="knowledge"
                smooth={true}
                duration={500}
                offset={-100}
            >{t("link3")}</Link>
          </li>
          <li className="lista__item">
            <Link 
                to="project"
                smooth={true}
                duration={500}
                offset={-100}
            >{t("link4")}</Link>
          </li>
          <li className="lista__item">
            <Link 
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
            >{t("link5")}</Link>
          </li>
        </ul>
        <ContainerIcon>
          <div onClick={toggleTheme} className="containerIconTheme">
            {themeSite === light ? (
              <MoonStars {...iconPropsLight} />
            ) : (
              <SunDim {...iconPropsDark} />
            )}
          </div>
          <div className="containerIconTranslate" onClick={handleLanguage}>
            {themeSite === light ? (
              <MdTranslate {...iconPropsLight} />
            ) : (
              <MdTranslate {...iconPropsDark} />
            )}
          </div>
        </ContainerIcon>
        <div className="container_menuMobile">
          { isOpen ? <IoClose size={50} className="menuburguer" onClick={toggleMenu}/> : <List size={50} className="menuburguer" onClick={toggleMenu} />}
          <AnimatePresence>
            { isOpen && <MenuMobile />}
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
};

export default Header;
