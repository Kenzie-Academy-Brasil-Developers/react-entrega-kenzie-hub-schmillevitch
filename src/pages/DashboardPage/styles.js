import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  height: 100px;
  padding: 10px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 40px;
    border-radius: 4.06066px;
    background: #212529;
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  height: 150px;
  padding: 10px;
  border-top: solid 2px #343b41;
  border-bottom: solid 2px #343b41;

  div {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 800px;
  }
`;
