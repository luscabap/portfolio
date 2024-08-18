import * as Styles from './styles';
import { FaDev } from "react-icons/fa";
import { GithubLogo, DownloadSimple } from "@phosphor-icons/react";
import curriculo from '/download/curriculo-lucasbaptista.pdf'
import { useTranslation } from 'react-i18next';

export default function Home(){
    const { t } = useTranslation();

    return (
        <Styles.Container id="home">
            <h1 className='home__title'>
                <FaDev size={50} className='icone_dev'/>
                {t("apresentation")} 
                    <strong>Lucas Baptista</strong>
            </h1>
            <h2 className='home__subtitle'>{t("function")}</h2>
            <Styles.ContainerBotoes>
                <a href='https://github.com/luscabap' target='_blank' className='container__github'>
                    <button className='container__github__btn'>
                        GitHub
                        <GithubLogo size={40} />
                    </button>
                </a>
                <a href={curriculo} target='_blank'
                className='container__cv'>
                    <button className='container__cv__btn'>
                        {t("resume")}
                        <DownloadSimple size={32} />
                    </button>
                    
                </a>   
            </Styles.ContainerBotoes>
            
            <div className='home__resume'>
                <h3 className='home__resume__subtitle'> 
                    {t("textMain")}
                        <span className='home__resume__subtitle__destaque'>
                            {t("textMainContrast")}
                        </span> 🚀
                </h3>
                <p className='home__resume__text'>{t("aboutFunction")}</p>
            </div>
        </Styles.Container>
    )
}
