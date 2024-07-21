import { Link } from "react-scroll"
import { ContainerMenu } from "./styles"
import { useTranslation } from "react-i18next";

export const MenuMobile = () => {
  const { t } = useTranslation();

  return (
    <ContainerMenu>
      <nav>
        <ul className="lista__mobile">
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
      </nav>
    </ContainerMenu>
  )
}