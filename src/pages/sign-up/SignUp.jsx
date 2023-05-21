import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import lockIcon from "../img/padlock.png";
import {IconContainer, LockIcon, SignUpContainer, SignUpForm, SignUpTitle, SignUpInput, SignUpButton, LoginLink, LinkColor, CheckBoxContainer, CheckBoxInput, CheckBoxLabel, ErrorText, LinkStyle} from "../styled-components/StyledComponents";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [receiveEmail, setReceiveEmail] = useState(false);

  const navigate = useNavigate();

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

  const handleFirstNameChange = (event) => {
    const newFirstName = event.target.value;
    setFirstName(newFirstName);
    validateName(newFirstName, "First name");
  };

  const handleLastNameChange = (event) => {
    const newLastName = event.target.value;
    setLastName(newLastName);
    validateName(newLastName, "Last name");
  };

  const handleCheckboxChange = (event) => {
    setReceiveEmail(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      validateName(firstName, "First name") &&
      validateName(lastName, "Last name")
    ) {
      localStorage.setItem(
        "userData",
        JSON.stringify({ email, password, firstName, lastName, receiveEmail })
      );
      navigate("/");
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
  
  const validateName = (value, nameType) => {
    if (!value) {
      if (nameType === "First name") {
        setFirstNameError("First name is required");
      } else {
        setLastNameError("Last name is required");
      }
      return false;
    } else if (value.length < 3) {
      if (nameType === "First name") {
        setFirstNameError("First name must be at least 3 characters long");
      } else {
        setLastNameError("Last name must be at least 3 characters long");
      }
      return false;
    } else {
      if (nameType === "First name") {
        setFirstNameError("");
      } else {
        setLastNameError("");
      }
      return true;
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <IconContainer>
          <LockIcon src={lockIcon} alt="Lock Icon" />
        </IconContainer>
        <SignUpTitle>Sign Up</SignUpTitle>
        <SignUpInput
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          style={{
            borderColor: firstNameError ? "#df0c0c" : firstName ? "#56b7a4" : "gray",
          }}
        />
        {firstNameError && <ErrorText>{firstNameError}</ErrorText>}
        <SignUpInput
          type="text"
         placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
          style={{
            borderColor: lastNameError ? "#df0c0c" : lastName ? "#56b7a4" : "gray",
          }}
        />
        {lastNameError && <ErrorText>{lastNameError}</ErrorText>}
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
            id="receive-email"
            checked={receiveEmail}
            onChange={handleCheckboxChange}
          />
          <CheckBoxLabel htmlFor="receive-email">
            I want to receive emails with news and updates
          </CheckBoxLabel>
        </CheckBoxContainer>
        <SignUpButton type="submit">Sign Up</SignUpButton>
        <LoginLink>
          Already have an account? <LinkStyle to="/log-in"><LinkColor>Log in</LinkColor></LinkStyle>
        </LoginLink>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;