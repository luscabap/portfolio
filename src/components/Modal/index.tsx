import { useTranslation } from "react-i18next";
import { ListItemKnowledge } from "../ListItemKnowledge";
import * as Style from "./styles";
import { IoMdClose } from "react-icons/io";

interface IModalProps {
  conhecimentos: string[],
  isopen: boolean,
  closeModal: () => void,
  id: string,
  title: string
}

export const Modal = ({ conhecimentos, isopen, closeModal, title}: IModalProps) => {
  const { t } = useTranslation()

  return (
    <Style.BackgroundContainer isopen={isopen}>
      <Style.Container>
        <div className="containerBotao">
          <IoMdClose  onClick={closeModal} className="botao" size={40}/>
        </div>
        <h2>{t("modalTitle")} <span className="tituloTech">{title}</span></h2>
        <div className="containerItems">
          {conhecimentos.map((item, i) => <ListItemKnowledge texto={item} key={i}/>)}
        </div>
      </Style.Container>
    </Style.BackgroundContainer>
  )
}