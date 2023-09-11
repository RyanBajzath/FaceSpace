import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Hooks/UserContext";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <Wrapper>
      <StyledLink exact to={"/"}>
        <H1>Facespace</H1>
      </StyledLink>
      {currentUser ? (
        <H3>Howdy, {currentUser.name}</H3>
      ) : (
        <SignInLink to={"/signin"}>Sign in</SignInLink>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--primary-color);
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding-left: 20px;
  &:visited {
    color: white;
  }
`;

const Div = styled.div`
  color: white;
  padding: 10px;
`;

const H1 = styled.h1`
  color: white;
  font-size: 50px;
`;
const SignInLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const H3 = styled.h3`
  color: white;
  font-size: 25px;
`;
export default Header;
