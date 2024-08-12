import * as Styles from "./styles";
import { IoMdClose } from "react-icons/io";
import { BiParty } from "react-icons/bi";

type ModalSuccessEmail = {
  closeModal: () => void
}

export const ModalSuccessEmail = ({ closeModal }:ModalSuccessEmail) => {
  return (
    <Styles.ContainerBackgroundModal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
    >
      <Styles.ContainerModalSuccessEmail
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ delay: 0.3, durating: 0.4 }}
      >
        <IoMdClose className="iconClose" onClick={closeModal}/>
        <h4 className="titleSucess">Sucesso em enviar o email.</h4>
        <h5 className="subTitleSucess">Em breve, contataremos você!</h5>
        <BiParty className="iconSuccess" />
      </Styles.ContainerModalSuccessEmail>
    </Styles.ContainerBackgroundModal>
  )
}