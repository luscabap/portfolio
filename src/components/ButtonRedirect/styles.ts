import styled from "styled-components";

type StylesButtonRedirect = {
  contrast: string;
  directionPrimary: string;
};

export const ContainerButtonRedirect = styled.div<StylesButtonRedirect>`

  .containerButton {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    text-decoration: none;
    background-color: ${(p) => p.contrast === "true" ? p.theme.colors.contrast : "transparent"};
    flex-direction: ${(p) => (p.directionPrimary === "true" ? "row" : "row-reverse")};
    border-radius: 0.3rem;
    padding: 0.2rem;
    color: black;
    border: none;
    cursor: pointer;
    &:hover {
      color: ${(p) => p.theme.colors.contrast};
    }

    .textButtonRedirect {
      font-size: 0.8rem;
    }

    .iconRedirect {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
