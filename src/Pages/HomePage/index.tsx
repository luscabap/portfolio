import { ThemeProvider, DefaultTheme } from "styled-components";
import Header from "../../components/Header";
import GlobalStyle from "../../styles/global";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "../../utils/usePesistedState";
import AboutMe from "../../components/AboutMe";
import Knowledge from "../../components/Knowledge/Knowledge";
import Home from "../../components/Home/Home";
import * as Styles from "./styles";
import MyProjects from "../../components/MyProjects/MyProjects";
import Footer from "../../components/Footer/Footer";
import Conctact from "../../components/Contact/Contact";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ModalContact } from "../../components/ModalContact/ModalContact";
import { MdClose } from "react-icons/md";
import { TbBracketsContain } from "react-icons/tb";
import { AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);
  const [modalContactIsOpen, setModalContactIsOpen] = useState(true);

  const toggleModalContact = () => {
    setModalContactIsOpen(pv => !pv);
  }

  const toggleTheme = () => {
    setTheme(theme.title === "darkTheme" ? light : dark);
  };

  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLang, setCurrentLang] = useState(language);

  const handleLanguage = () => {
    const newLang = currentLang === "en" ? "pt" : "en";
    changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        toggleTheme={toggleTheme}
        themeSite={theme}
        handleLanguage={handleLanguage}
      />
      <Styles.ButtonModalContact onClick={toggleModalContact}>
        {modalContactIsOpen ? <MdClose className="iconContact"/> : <TbBracketsContain className="iconContact"/>}
      </Styles.ButtonModalContact>
      <AnimatePresence>
        { modalContactIsOpen && <ModalContact />}
      </AnimatePresence>
      <Styles.ContainerMain className="Container_teste">
        <Home />
        <AboutMe />
        <MyProjects />
        <Knowledge />
        <Conctact />
      </Styles.ContainerMain>
      <Footer />
    </ThemeProvider>
  );
}
