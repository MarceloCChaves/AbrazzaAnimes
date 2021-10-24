import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .card {
    margin: 20px;
    width: 260px;
    img {
      width: 260px;
      height: 306px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .content {
      background: var(--shape);
      width: 100%;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin-top: -6px;
      text-align: center;

      .info {
        background: var(--green);
      }
      h3 {
        margin-bottom: 10px;
        color: var(--text);
      }
      .buttons {
        background: var(--blue);
        padding: 25px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        a {
          padding: 10px 15px;
          margin: 10px 5px 0;
          color: var(--shape);
          border: 0;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.4s ease;

          :hover{
            filter: brightness(85%);
          }
        }
        .view {
          background: var(--red);
        }
      }
    }
  }
`;

export const Title = styled.h1`
  color: var(--shape);
  text-align: center;
  font-weight: 600;
`
