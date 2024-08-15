import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdClose } from "react-icons/md";
import { TbBracketsContain } from "react-icons/tb";
import { DefaultTheme, ThemeProvider } from "styled-components";
import AboutMe from "../../components/AboutMe";
import Conctact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Home from "../../components/Home/Home";
import Knowledge from "../../components/Knowledge/Knowledge";
import { ModalContact } from "../../components/ModalContact/ModalContact";
import MyProjects from "../../components/MyProjects/MyProjects";
import GlobalStyle from "../../styles/global";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "../../utils/usePesistedState";
import * as Styles from "./styles";

export default function HomePage() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);
  const [modalContactIsOpen, setModalContactIsOpen] = useState(false);

  const toggleModalContact = () => {
    setModalContactIsOpen((pv) => !pv);
  };

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

  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      } 
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); 
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); 
    };
  }, [scrollDirection]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence>
        { scrollDirection === "up" && (
          <Header
            toggleTheme={toggleTheme}
            themeSite={theme}
            handleLanguage={handleLanguage}
          />
        ) }
      </AnimatePresence>
      
      <Styles.ButtonModalContact onClick={toggleModalContact}>
        {modalContactIsOpen ? (
          <MdClose className="iconContact" />
        ) : (
          <TbBracketsContain className="iconContact" />
        )}
      </Styles.ButtonModalContact>
      <AnimatePresence>
        {modalContactIsOpen && <ModalContact />}
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
