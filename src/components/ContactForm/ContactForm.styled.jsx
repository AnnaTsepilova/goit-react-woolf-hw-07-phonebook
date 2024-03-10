import styled from 'styled-components';

export const FormContainer = styled.form`
  padding: 0 20px 24px 20px;
  background-color: #ffffff;

  border-bottom: 7px solid rgb(63, 158, 236);
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
`;
export const ContactInput = styled.input`
  display: block;
  margin-bottom: 28px;
  padding: 8px;
  font-size: 20px;

  border: 1px solid #21212133;
  border-radius: 4px;
  outline: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #757575;

  &:focus {
    border: 1px solid #2196f3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Button = styled.button`
  min-width: 120px;
  height: 40px;

  text-align: center;
  border-radius: 4px;
  border-width: 0;
  color: #ffffff;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;

  cursor: pointer;
  outline: rgba(0, 0, 0, 0);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #eef7ff;
    color: #2196f3;
  }
`;
export const DeleteButton = styled(Button)`
  composes: button;
  min-width: 70px;
  height: 25px;
  font-size: 14px;

  background-color: #eebf31;

  &:hover {
    background-color: #eef7ff;
    color: #eebf31;
  }
`;
