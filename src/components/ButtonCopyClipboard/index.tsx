import * as Style from "./style";

import { useCopyToClipboard } from "../../utils/useCopyClipboard";
import { FaCopy, FaCheckCircle  } from "react-icons/fa";


interface IButtonCopyClipboardProps {
  content: string
}

const iconProps = {
  size: 25,
}

export const ButtonCopyClipboard = ({ content }: IButtonCopyClipboardProps) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();
  return (
    <Style.ContainerButton onClick={() => copyToClipboard(content)}>
      <div>
        { isCopied ? <FaCheckCircle {...iconProps} className="iconButton"/> : <FaCopy  {...iconProps} className="iconButton"/>}
      </div>
    </Style.ContainerButton>
  )
}