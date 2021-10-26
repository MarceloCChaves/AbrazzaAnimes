import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .anime-news {
    display: flex;
    align-items: left;
    width: 60%;
    max-width: 100%;
    flex-direction: column;
    margin: 30px 0;
    background: var(--shape);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 10px;

    a:not(.anime-info a) {
      text-decoration: none;
      background: var(--red);
      color: var(--shape);
      padding: 1px;
      border-radius: 4px;
    }

    hr {
      margin-bottom: 20px;
    }
    .info-related {
      display: flex;

      img {
        width: 215px;
        height: 318px;
      }
      .anime-info{
        margin-left: 30px;

        strong{
          font-size: 24px;
          font-weight: 600;
        }

        p{
          margin-top: 20px;
        }
      }
      .buttons{
        margin-top: 20px;

        a{
          padding: 10px 25px;
          color: var(--shape);
          background: var(--green);
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s;

          :hover{
            filter: brightness(90%);
          }
        }
      }
    }
  }
  @media (max-width: 767px){
    .anime-news{
      width: 100%;
    }
    .info-related{
      flex-direction: column;
      
      img{
        margin: 0 auto;
        margin-bottom: 20px;
      }
    }
    .buttons{
      display: flex;
      justify-content: center;
    }
  }
`;
