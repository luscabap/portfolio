import { ButtonCopyClipboard } from "../ButtonCopyClipboard";
import * as Styles from "./styles"
import { IconBaseProps } from "react-icons";

export interface IInfoButtonProps {
  icon: IconBaseProps;
  title: string;
  info: string;
  contentToClipboard: string,
  href: string
}

export const InfoButton = ({ title, icon, info, contentToClipboard, href }: IInfoButtonProps) => {
  return (
    <Styles.ContainerInfoButton>
      <ButtonCopyClipboard content={contentToClipboard}/>
      <div className="containerClick">
        <a className="containerContact_Icon" target="_blank" href={href}>
          <>{icon}</>
          <h4>{title}</h4>
          <p>{info}</p>
        </a>
      </div>
    </Styles.ContainerInfoButton>
  );
};
