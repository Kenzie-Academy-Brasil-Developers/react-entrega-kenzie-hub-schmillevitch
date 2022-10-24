import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 380px;
  height: 100px;

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

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #212529;
  margin: 30px auto;
  min-width: 380px;
  height: 930px;
  gap: 10px;
  border-radius: 8px;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
    background-color: #212529;
  }

  div {
    display: flex;
    flex-direction: column;
    background-color: #212529;
    width: 80%;
    gap: 15px;
  }

  span {
    background-color: #212529;
    color: #868e96;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
  }

  input {
    height: 40px;
    border-radius: 4px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    color: #f8f9fa;
    padding: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
  }

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 0px;
  }

  select {
    height: 40px;
    border-radius: 4px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    color: #868e96;
    padding: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
  }

  span {
    background: #212529;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  background: #59323f;
  width: 80%;
  height: 40px;
  border: 1.2182px solid #59323f;
  border-radius: 4.06066px;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  cursor: pointer;
`;
