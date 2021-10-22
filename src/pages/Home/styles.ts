import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .thumb {
    padding: 20px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      margin-top: 50px;
      color: var(--shape);

      a {
        text-decoration: none;
        color: var(--shape);
        background: var(--green);
        padding: 5px;
        border-radius: 8px;
      }
    }
  }
  .get-started {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3 {
      color: var(--shape);
      margin-bottom: 50px;
      font-size: 24px;
      font-weight: 600;
      text-align: center;
    }

    a {
      color: var(--shape);
      font-weight: 600;
      font-size: 20px;
      padding: 20px 80px;
      border: 0;
      background: var(--red);
      border-radius: 8px;
      transition: ease 0.4s;
      text-decoration: none;

      :hover {
        filter: brightness(0.9);
      }
    }
  }
  @media (max-width: 1023px) {
    .thumb {
      display: none;
    }
  }
`;
