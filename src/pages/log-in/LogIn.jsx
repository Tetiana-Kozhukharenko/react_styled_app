import React, { useState } from "react";
import lockIcon from "../img/padlock.png";
import {IconContainer, LockIcon, SignUpContainer, SignUpForm, SignUpTitle, SignUpInput, SignUpButton, LoginLink, LinkColor, CheckBoxContainer, CheckBoxInput, CheckBoxLabel, ErrorText, LinkStyle} from "../styled-components/StyledComponents";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      if (rememberMe) {
        localStorage.setItem("userData", JSON.stringify({ email, password }));
      }
      window.location.href = "/";
    }
  };

  const validateEmail = (value) => {
    if (!value) {
      setEmailError("Email is required");
      return false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
      setEmailError("Please enter a valid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("Password is required");
      return false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/g.test(value)) {
      setPasswordError(
        "Password must contain at least 8 characters and at least one uppercase and one lowercase letter"
      );
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <IconContainer>
          <LockIcon src={lockIcon} alt="Lock Icon" />
        </IconContainer>
        <SignUpTitle>Log In</SignUpTitle>
        <SignUpInput
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          style={{
            borderColor: emailError ? "#df0c0c" : email ? "#56b7a4" : "gray",
          }}
        />
        {emailError && <ErrorText>{emailError}</ErrorText>}
        <SignUpInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={{
            borderColor: passwordError ? "#df0c0c" : password ? "#56b7a4" : "gray",
          }}
        />
        {passwordError && <ErrorText>{passwordError}</ErrorText>}
        <CheckBoxContainer>
          <CheckBoxInput
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <CheckBoxLabel htmlFor="rememberMe">
            Remember me
          </CheckBoxLabel>
        </CheckBoxContainer>
        <SignUpButton type="submit">Log In</SignUpButton>
        <LoginLink>
        Don't have an account? <LinkStyle to="/sign-up"><LinkColor>Sign up</LinkColor></LinkStyle>
        </LoginLink>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default LogIn;