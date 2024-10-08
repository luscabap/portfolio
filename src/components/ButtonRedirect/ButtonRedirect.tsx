import { IconBaseProps } from "react-icons";
import * as Styles from "./styles";
import { Link } from "react-scroll";

type ButtonRedirectProps = {
  text: string,
  icon: IconBaseProps,
  redirect: string,
  contrast: boolean,
  directionPrimary: boolean,
  redirectToOutside: boolean,
}

export const ButtonRedirect = ({ icon, redirect, text, contrast, directionPrimary, redirectToOutside }: ButtonRedirectProps) => {
  return (
    redirectToOutside
      ? <Styles.ContainerButtonRedirect 
          contrast={String(contrast)}
          directionprimary={String(directionPrimary)}
        >
            <a 
              className="containerButton"
              href={redirect} 
              target="_blank"
            >
              <h6 className="textButtonRedirect">{text}</h6>
              <>{icon}</>
            </a>
        </Styles.ContainerButtonRedirect>
        
      : <Styles.ContainerButtonRedirect 
          contrast={String(contrast)}
          directionprimary={String(directionPrimary)}
          >
            <Link 
              to={redirect}
              smooth={true}
              className="containerButton"
            >
            <h6 className="textButtonRedirect">{text}</h6>
            <>{icon}</>
            </Link>
        </Styles.ContainerButtonRedirect>
  )
}