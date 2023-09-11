import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Hooks/UserContext";

const SignInPage = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [userSignedIn, setUserSignedIn] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    setUserSignedIn(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify({ name: userSignedIn }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentUser(data.data);
        sessionStorage.setItem("name", JSON.stringify(data.data));
        history.push("/");
        // user object stored in sesstionStorage
      })

      .catch((err) => {
        // window.alert(`${err} User not found`);
        console.log(err);
      });
  };
  return (
    <Wrapper>
      <InputWrapper onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Name here" name="name" />
        <StyledButton>Submit</StyledButton>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/facespace_bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(220, 220, 220, 0.5);
  text-decoration: none;
  padding: 20px;
  gap: 5px;
  border-radius: 8px;
`;

const StyledButton = styled.button`
  background-color: var(--primary-color);
  /* text-decoration: none; */
  border: none;
  width: 100%;
  color: white;
`;

export default SignInPage;
