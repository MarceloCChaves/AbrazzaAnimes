import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;

  .logo-items {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style: none;
    transition: opacity .5s;

    a {
      color: var(--shape);
      font-size: 24px;
      text-decoration: none;
      padding: 0 40px;
      transition: ease .4s;

      :hover{
        background: rgba(0,0,0, .1);
      }
    }
  }
  .links{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    transition: ease .5s;

    a{
      color: var(--shape);
      font-size: 24px;
      text-decoration: none;
      padding: 0 40px;
      transition: ease .4s;

      :hover{
        background: rgba(0,0,0, .1);
      }
    }
  }
`;
