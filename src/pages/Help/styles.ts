import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .content {
    padding: 30px 100px;
    background: var(--box);
    width: 80%;
    max-width: 100%;
    border-radius: 24px;
    margin-bottom: 20px;

    .title,
    .describe {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      label {
        font-size: 18px;
        font-weight: 600;
        color: var(--shape);
      }
      input {
        width: 100%;
        height: 40px;
        font-size: 20px;
        padding-left: 10px;
        border-radius: 4px;
      }
      textarea{
        resize: none;
        padding-left: 5px;
        font-size: 18px;
      }
    }
    .buttons {
      margin-top: 20px;

      button:first-child,
      button {
        padding: 10px 25px;
        text-decoration: none;
        transition: all 0.3s;
        color: var(--shape);
        border-radius: 4px;
        border: 0;

        :hover {
          filter: brightness(90%);
        }
      }
      button:first-child {
        background: var(--green);
      }
      button:last-child {
        background: var(--text);
        margin-left: 20px;
      }
    }
  }
  @media (max-width: 767px){
    .content{
      width: 100%;
      padding: 20px;
    }
  }
`;
