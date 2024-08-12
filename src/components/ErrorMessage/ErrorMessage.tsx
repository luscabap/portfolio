import * as Styles from "./styles";

type ErrorMessaProps = {
  children: string
}

export const ErrorMessage = ({ children }:ErrorMessaProps) => {
  return (
    <Styles.ContainerErrorMessage>
      {children}
    </Styles.ContainerErrorMessage>
  )
}