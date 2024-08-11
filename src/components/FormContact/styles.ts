import styled from "styled-components";

export const ContainerFormContact = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  .containerInfos{
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 0.5rem;

    .labelInfo{
      color: ${p => p.theme.colors.inverse}
    }

    .inputInfo{
      padding: 0.2rem;
      border: none;
      border: 1px solid ${p => p.theme.colors.inverse};
      border-radius: 0.3rem;
    }

  }
  .buttonSubmit{
    background-color: ${p => p.theme.colors.primary};
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    &:hover{
      background-color: ${p => p.theme.colors.secondary};
    }
  }
`