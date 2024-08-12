import { useTranslation } from "react-i18next";
import  * as Style from "./styles";
import useFormContact from "../../utils/useFormContact";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { ModalSuccessEmail } from "../ModalSuccessEmail/ModalSuccessEmail";
import { AnimatePresence } from "framer-motion";

export const FormContact = () => {
  const { t } = useTranslation();

  const { errors, register, handleSubmit, onSubmit, successSendEmail, closeModal } = useFormContact();

  return (
    <>
      <AnimatePresence>
        { successSendEmail && <ModalSuccessEmail closeModal={closeModal}/>}
      </AnimatePresence>
      <Style.ContainerFormContact id="email">
        <form onSubmit={handleSubmit(onSubmit)} className="containerForm">
          <div className="containerInfos">
            <label className="labelInfo">{t("labelName")} *</label>
            <input 
              placeholder={t("placeholderName")} 
              className="inputInfo"
              {...register("name")}
            />
            {errors.name?.message && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
          <div className="containerInfos">
            <label className="labelInfo">{t("labelEmail")} *</label>
            <input 
              placeholder={t("placeholderEmail")} 
              className="inputInfo" 
              {...register("email")}
            />
            {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </div>
          <div className="containerInfos">
            <label className="labelInfo">{t("labelNumber")}</label>
            <input 
              placeholder={t("placeholderPhoneNumber")} 
              className="inputInfo"
              {...register("phonenumber")}
            />
            {errors.phonenumber?.message && <ErrorMessage>{errors.phonenumber.message}</ErrorMessage>}
          </div>
          <div className="containerInfos">
            <label className="labelInfo">{t("labelSubject")} *</label>
            <input 
              placeholder={t("placeholderSubject")} 
              className="inputInfo"
              {...register("about")}
            />
            {errors.about?.message && <ErrorMessage>{errors.about.message}</ErrorMessage>}
          </div>
          <div className="containerInfos">
            <label className="labelInfo">{t("labelMessage")} *</label>
            <input 
              placeholder={t("placeholderMessage")} 
              className="inputInfo"
              {...register("message")}
            />
            {errors.message?.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
          </div>
          <button type="submit" className="buttonSubmit">{t("submitButton")}</button>
        </form>
      </Style.ContainerFormContact>
    </>
  )
}