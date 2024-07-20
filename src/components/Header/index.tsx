import { MoonStars, SunDim, List } from "@phosphor-icons/react";
import { MdTranslate } from "react-icons/md";
import React, { useState } from "react";
import { Container, ContainerIcon } from "./styles";
import light from "../../styles/themes/light";
import { DefaultTheme } from "styled-components/dist/types";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

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
  const [menu, setMenu] = useState("lista__desktop");

  function handleMenuBurguer() {
    setMenu((prevMenu) =>
      prevMenu === "lista__desktop" ? "lista__mobile" : "lista__desktop"
    );
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

  return (
    <Container>
      <div className="container__display_default">
        <Link 
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
            className="containerTitle"
        ><h1 className="title">&lt;LUSCABAP /&gt;</h1>
        </Link>
        <ul className={menu}>
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
        <List size={50} className="menuburguer" onClick={handleMenuBurguer} />
      </div>
    </Container>
  );
};

export default Header;
