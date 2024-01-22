import { ThemeProvider, DefaultTheme } from 'styled-components';
import Header from '../../components/Header';
import GlobalStyle from '../../styles/global';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import usePersistedState from '../../utils/usePesistedState';

export default function HomePage() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);
    const toggleTheme = () => {
        setTheme(theme.title === 'darkTheme' ? light : dark)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} />
        </ThemeProvider>
    )
}