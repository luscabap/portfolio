import { useState } from "react";
import { Modal } from "../../Modal";
import * as Styles from "./styles";

interface IKnowledgeProps {
  title: string;
  icon: string;
  conhecimentos: string[]
}

export default function ContainerKnowledge({ title, icon, conhecimentos }: IKnowledgeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const haveTextToShow = conhecimentos.length;

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleOpenModal = () => {
    if (haveTextToShow > 0){
      setIsOpen(true)
    }
  }

  return (
    <>
      <Modal conhecimentos={conhecimentos} isopen={isOpen} closeModal={closeModal} title={title}/>
      <Styles.Container onClick={handleOpenModal} haveTextToShow={haveTextToShow}>
        <img src={icon} />
        <h1 className="knowledge__title">{title}</h1>
      </Styles.Container>
    </>
  );
}
