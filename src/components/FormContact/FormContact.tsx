import { useTranslation } from "react-i18next";
import * as Style from "./styles";

export const FormContact = () => {
  const { t } = useTranslation();

  return (
    <Style.ContainerFormContact id="email">
      <div className="containerInfos">
        <label htmlFor="" className="labelInfo">{t("labelName")}</label>
        <input type="text" name="" id="" placeholder={t("placeholderName")} className="inputInfo"/>
      </div>
      <div className="containerInfos">
        <label htmlFor="" className="labelInfo">{t("labelEmail")}</label>
        <input type="text" name="" id="" placeholder={t("placeholderEmail")} className="inputInfo"/>
      </div>
      <div className="containerInfos">
        <label htmlFor="" className="labelInfo">{t("labelNumber")}</label>
        <input type="text" name="" id=""placeholder={t("placeholderPhoneNumber")}  className="inputInfo"/>
        
      </div>
      <div className="containerInfos">
        <label htmlFor="" className="labelInfo">{t("labelSubject")}</label>
        <input type="text" name="" id="" placeholder={t("placeholderSubject")} className="inputInfo"/>
      </div>
      <div className="containerInfos">
        <label htmlFor="" className="labelInfo">{t("labelMessage")}</label>
        <input type="text" name="" id="" placeholder={t("placeholderMessage")} className="inputInfo"/>
      </div>

      <button type="submit" className="buttonSubmit">{t("submitButton")}</button>
    </Style.ContainerFormContact>
  )
}