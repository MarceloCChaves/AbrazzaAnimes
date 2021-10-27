import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .info {
    padding: 30px 100px;
    background: var(--shape);
    width: 80%;
    max-width: 100%;
    border-radius: 24px;
    margin-bottom: 20px;

    strong {
      font-size: 32px;
      color: var(--text);
    }

    p {
      margin-top: 20px;
      color: var(--text);
    }
    .buttons {
      margin-top: 20px;

      a:first-child, a {
        padding: 10px 25px;
        text-decoration: none;
        transition: all 0.3s;
        color: var(--shape);
        border-radius: 4px;

        :hover {
          filter: brightness(90%);
        }
      }
      a:first-child{
        background: var(--green);
      }
      a:last-child{
        background: var(--text);
        margin-left: 20px;
      }
    }
  }
  @media (max-width: 767px){
    .info{
      width: 100%;
      padding: 20px;
    }
  }
`;
