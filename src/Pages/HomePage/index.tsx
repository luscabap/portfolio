import { ThemeProvider, DefaultTheme } from 'styled-components';
import Header from '../../components/Header';
import GlobalStyle from '../../styles/global';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import usePersistedState from '../../utils/usePesistedState';
import AboutMe from '../../components/AboutMe';
import Knowledge from '../../components/Knowledge/Knowledge';
import Home from '../../components/Home/Home';
import * as Styles from './styles'
import MyProjects from '../../components/MyProjects/MyProjects';
import Footer from '../../components/Footer/Footer';
import Conctact from '../../components/Contact/Contact';
import { useState } from 'react';
import { useScrollDirection } from '../../utils/useScrollDirection';

export default function HomePage() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);
    const toggleTheme = () => {
        setTheme(theme.title === 'darkTheme' ? light : dark)
    }
    
    const [scroll, setScroll] = useState("display_default");
    function handleScroll(){
        scroll === "display_default" ? setScroll("display_fixed") : setScroll("display_default");
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} position={scroll} />
            <Styles.ContainerMain >
                <Home />
                <AboutMe />
                <Knowledge />
                <MyProjects />
                <Conctact />
            </Styles.ContainerMain>
            <Footer />
        </ThemeProvider>
    )
}