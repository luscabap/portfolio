import { ListItemKnowledge } from "../ListItemKnowledge";
import * as Style from "./styles";
import { IoMdClose } from "react-icons/io";

interface IModalProps {
  conhecimentos: string[],
  isOpen: boolean,
  closeModal: () => void
}

export const Modal = ({ conhecimentos, isOpen, closeModal }: IModalProps) => {
  return (
    <Style.BackgroundContainer isOpen={isOpen}>
      <Style.Container>
        <div className="containerBotao">
          <IoMdClose  onClick={closeModal} className="botao" size={40}/>
        </div>
        <h2>Conhecimentos da tecnologia</h2>
        <div>
          {conhecimentos.map(item => <ListItemKnowledge texto={item}/>)}
        </div>
      </Style.Container>
    </Style.BackgroundContainer>
  )
}