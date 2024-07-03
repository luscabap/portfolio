import * as Style from "./styles";
import { IoMdArrowDropright } from "react-icons/io";

interface IListItemKnowledgeProps {
  texto: string
}

export const ListItemKnowledge = ({ texto }: IListItemKnowledgeProps) => {
  return (
    <Style.Container>
      <IoMdArrowDropright size={35}/>
      {texto}
    </Style.Container>
  )
}