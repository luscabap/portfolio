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
  return (
    <Style.BackgroundContainer isopen={isopen}>
      <Style.Container>
        <div className="containerBotao">
          <IoMdClose  onClick={closeModal} className="botao" size={40}/>
        </div>
        <h2>Conhecimentos da tecnologia {title}</h2>
        <div>
          {conhecimentos.map((item, i) => <ListItemKnowledge texto={item} key={i}/>)}
        </div>
      </Style.Container>
    </Style.BackgroundContainer>
  )
}