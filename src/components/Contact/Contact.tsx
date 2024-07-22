import { useTranslation } from "react-i18next";
import * as Styles from "./styles";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { InfoButton } from "../InfoButton";
import { v4 as uuidv4 } from "uuid";

const iconProps = {
  size: 70,
  color: "#94c6d1"
}

const dataContact = [
  {
    id: uuidv4(),
    icon: <FaGithub {...iconProps} />,
    title: "GitHub",
    info: "@luscabap",
    contentToClipboard: "https://github.com/luscabap",
    href: "https://github.com/luscabap"
  },
  {
    id: uuidv4(),
    contentToClipboard: "lucasbaptistasilva.dev@gmail.com",
    icon: <MdEmail {...iconProps} />,
    title: "E-mail",
    info: "lucasbaptistasilva.dev@gmail.com",
    href: ""
  },
  {
    id: uuidv4(),
    contentToClipboard: "13988133135",
    icon: <FaWhatsapp {...iconProps} />,
    title: "WhatsApp",
    info: "(13) 98813-3135",
    href: "https://wa.me/5513988133135?text=Olá,+Lucas.+Gostaria+de+informações+sobre+os+seus+serviços,+por+favor."
  },
  {
    id: uuidv4(),
    contentToClipboard: "https://www.linkedin.com/in/lucas-baptista-da-silva-133779233/",
    icon: <FaLinkedin {...iconProps} />,
    title: "LinkedIn",
    info: "Lucas Baptista da Silva",
    href: "https://www.linkedin.com/in/lucas-baptista-da-silva-133779233/"
  },
]

export default function Conctact() {
  const { t } = useTranslation();

  return (
    <Styles.ContainerContact id="contact">
      <h2 className="containerContact__title">&lt;{t("contactTitle")} /&gt;</h2>
      <Styles.ContainerContactIcons>
        { dataContact.map(item => (
          <InfoButton 
            contentToClipboard={item.contentToClipboard}
            href={item.href}
            icon={item.icon}
            info={item.info}
            title={item.title}
            key={item.id}
          />
        )) }
      </Styles.ContainerContactIcons>
    </Styles.ContainerContact>
  );
}
