import { useTranslation } from 'react-i18next'
import * as Styles from './styles'

export default function Footer(){
    const { t } = useTranslation();
    return (
        <Styles.ContainerFooter>
            <h4 className='containerFooter__text'>{t("footerDeveloped")} <abbr title='lucasbaptistasilva.dev@gmail.com'>Lucas Baptista</abbr> |  {t("footerRights")} 2024 &copy;</h4>
        </Styles.ContainerFooter>
    )
}