import * as Styles from "./styles";
import { IoMdClose } from "react-icons/io";
import { BiParty } from "react-icons/bi";

type ModalSuccessEmail = {
  closeModal: () => void
}

export const ModalSuccessEmail = ({ closeModal }:ModalSuccessEmail) => {
  return (
    <Styles.ContainerBackgroundModal>
      <Styles.ContainerModalSuccessEmail>
        <IoMdClose className="iconClose" onClick={closeModal}/>
        <h4 className="titleSucess">Sucesso em enviar o email.</h4>
        <h5 className="subTitleSucess">Em breve, contataremos você!</h5>
        <BiParty className="iconSuccess" />
      </Styles.ContainerModalSuccessEmail>
    </Styles.ContainerBackgroundModal>
  )
}