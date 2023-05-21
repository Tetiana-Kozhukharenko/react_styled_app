import styled from "styled-components";
import { Link } from "react-router-dom";

//styles for NavMenu.jsx

export const HeaderNav = styled.header`
  background-color: #35363a;
  padding: 10px 0;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 90px;
  padding: 0;
`;

export const NavItem = styled.li`
  background-color: #202124;
  border: none;
  font-size: 18px;
  border-radius: 4px;
  padding: 10px 20px;
  border: 1px solid #606164;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #c4bdbd;
  cursor: pointer;
  &:active {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
`;

//styles for SignUp.jsx and LodIn.jsx

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 400px;
  width: 100%;
`;

export const IconContainer = styled.div`
  background-color: #2db499;
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  align-items: center;
  border-radius: 50%;
`;

export const LockIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const SignUpTitle = styled.h1`
  font-size: 22px;
  margin: 10px 0 30px;
  color: #333;
`;

export const SignUpInput = styled.input`
  width: 90%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CheckBoxInput = styled.input`
  margin-right: 10px;
  accent-color: #424948;
`;

export const CheckBoxLabel = styled.label`
  font-size: 16px;
`;

export const SignUpButton = styled.button`
  background-color: #2db499;
  border: none;
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  &:active {
    color: #333;
  }
  &:hover {
    color: #333;
  }
`;

export const LoginLink = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #333;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
`;

export const LinkColor = styled.span`
  color: #818b8a;
  font-size: 16px;
  &:active {
    color: black;
  }
  &:hover {
    color: black;
  }
`;

export const ErrorText = styled.span`
  color: #df0c0c;
`;
