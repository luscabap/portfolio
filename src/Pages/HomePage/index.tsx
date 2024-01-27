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

export default function HomePage() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);
    const toggleTheme = () => {
        setTheme(theme.title === 'darkTheme' ? light : dark)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} />
            <Styles.ContainerMain>
                <Home />
                <AboutMe />
                <Knowledge />
                <MyProjects />
            </Styles.ContainerMain>
            <Footer />
        </ThemeProvider>
    )
}