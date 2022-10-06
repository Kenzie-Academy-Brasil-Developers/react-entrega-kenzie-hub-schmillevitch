import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: end;
  margin: 0 auto;
  height: 100px;
  padding: 30px;
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
  margin: 0 auto;
  min-width: 380px;
  height: 500px;
  gap: 20px;
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
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 40px;
    border-radius: 4.06066px;
    background: #868e96;
    text-decoration: none;
  }
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  background: #343b41;
  border: 1.2182px solid #f8f9fa;
  color: #f8f9fa;
  padding: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;

  &:-webkit-autofill {
    box-shadow: #343b41;
  }
  &:-webkit-autofill:hover {
    box-shadow: #343b41;
  }
  &:-webkit-autofill:focus {
    box-shadow: #343b41;
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 0px;
`;

export const Span = styled.span`
  background: #212529;
  font-size: 12px;
`;

export const Button = styled.button`
  background: #ff577f;
  width: 80%;
  height: 40px;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;
