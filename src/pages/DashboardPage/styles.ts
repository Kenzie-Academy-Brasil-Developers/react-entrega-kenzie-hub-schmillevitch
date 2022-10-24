import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  height: 100px;
  padding: 20px;

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
    cursor: pointer;
  }

  a:hover {
    background: #343b41;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  height: 150px;
  padding: 20px;
  border-top: solid 1px #343b41;
  border-bottom: solid 1px #343b41;

  div {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 800px;
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #868e96;
  }

  @media screen and (max-width: 600px) {
    div {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 800px;
      gap: 16px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 800px;
  align-items: center;
  padding: 15px;

  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #f8f9fa;
  }

  button {
    background: #212529;
    border-radius: 4px;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  button:hover {
    background: #343b41;
  }

  & img {
    background-color: transparent;
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  background: #212529;
  border-radius: 4px;
  gap: 10px;
`;

export const TechItem = styled.li`
  display: flex;
  width: 97%;
  padding: 8px;
  border-radius: 4px;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
  }

  div {
    display: flex;
    gap: 20px;
  }

  & span {
    color: #868e96;
  }

  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
