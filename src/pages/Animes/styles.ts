import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .card{
    margin: 20px;
    width: 260px;
    img{
      width: 260px;
      height: 306px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .content{
      background: var(--green);
      height: 250px;
      width: 100%;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      margin-top: -6px;
      text-align: center;

      h3{
        margin-bottom: 10px;
        color: var(--shape);
        text-shadow: 2px, 2px, #ff0000;
      }
    }
  }
`;
