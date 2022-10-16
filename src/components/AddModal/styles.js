import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #212529;
  margin: 0 auto;
  min-width: 350px;
  height: 300px;
  gap: 20px;
  border-radius: 0px 0px 4px 4px;

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
  height: 30px;
  border-radius: 4px;
  background: #343b41;
  border: 1.2182px solid #f8f9fa;
  color: #f8f9fa;
  padding: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;

  ::placeholder {
    color: #868e96;
  }
`;

export const Select = styled.select`
  height: 40px;
  border-radius: 4px;
  background: #343b41;
  border: 1.2182px solid #f8f9fa;
  color: #f8f9fa;
  padding: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
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
  width: 100%;
  height: 40px;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  padding: 5px;
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  width: 320px;
  height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #343b41;
  border-radius: 4px 4px 0px 0px;
  padding: 15px;

  h4 {
    background-color: transparent;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  button {
    background: transparent;
    color: #868e96;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    border: none;
    cursor: pointer;
  }
`;
