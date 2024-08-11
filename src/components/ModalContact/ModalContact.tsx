import { useTranslation } from "react-i18next";
import { ButtonRedirect } from "../ButtonRedirect/ButtonRedirect";
import * as Style from "./styles";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ModalContact = () => {
  const { t } = useTranslation()

  return (
    <Style.ContainerModalContact
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ButtonRedirect 
        icon={<MdEmail className="iconRedirect"/>}
        redirect="email"
        text={t("contactEmail")}
        contrast={false}
        directionPrimary={true}
        redirectToOutside={false}
      />
      <ButtonRedirect 
        icon={<FaWhatsapp className="iconRedirect"/>}
        redirect="https://wa.me/5513988133135"
        text={t("contactWhatsapp")}
        contrast={false}
        directionPrimary={true}
        redirectToOutside={true}
      />
    </Style.ContainerModalContact>
  )
}