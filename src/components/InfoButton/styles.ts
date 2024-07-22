import styled from "styled-components";

export const ContainerInfoButton = styled.div`
  width: 20%;

  @media screen and (min-width: 300px) and (max-width: 768px) {
    width: 80%;
  }

  .containerClick {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;

    .containerContact_Icon {
      width: 100%;
      margin: 0 0 2rem 0;
    }
  }

  .containerContact_Icon {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transition: 1s;
    text-decoration: none;
    gap: 0.7rem;
    cursor: pointer;

    h4 {
      color: ${(props) => props.theme.colors.secondary};
      font-weight: bolder;
      font-size: 1.25rem;
    }

    p {
      color: ${(props) => props.theme.colors.inverse};
    }
  }

  .containerContact_Icon:hover {
    transform: scale(1.05);
    transition: 0.5s;
    text-decoration: none;
  }
`;
