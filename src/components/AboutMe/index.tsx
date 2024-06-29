import * as Styles from './styles';
import FotoLucas from '../../../public/lucas.png'
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
    const { t } = useTranslation();
    
    return (
        <Styles.Container id="about-me">
            <div className='infos'>
                <h2 className='infos__title_aboutme'>&lt;{t("aboutTitle")} /&gt;</h2>
                <h3 className='infos__name'>Lucas Baptista da Silva</h3>
                <p className='infos__text'>{t("aboutText1")}</p>
                <p className='infos__text'>{t("aboutText2")}</p>
            </div>
            <div className="photo">
                <img src={FotoLucas} alt="Foto do Lucas Baptista" className='photoLucas'/>
            </div>
            
        </Styles.Container >
        
    )
}