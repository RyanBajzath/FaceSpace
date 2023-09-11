import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Hooks/UserContext";

const User = () => {
  const { currentUser, data } = useContext(UserContext);

  const userData = data.data;

  return (
    <Wrapper>
      {data ? (
        userData.map((user) => {
          return (
            <StyledLink to={`/users/${user.id}`} key={user.id}>
              {currentUser ? (
                <>
                  {currentUser.friends.includes(user.id) && (
                    <Ribbon>
                      <RibbonSpan>Friends</RibbonSpan>
                    </Ribbon>
                  )}
                  <Img
                    key={user.id}
                    src={user.avatarUrl}
                    alt={`${user.name}'s photo `}
                  />
                </>
              ) : (
                <Img
                  key={user.id}
                  src={user.avatarUrl}
                  alt={`${user.name}'s photo `}
                />
              )}
            </StyledLink>
          );
        })
      ) : (
        <div>loading</div>
      )}
    </Wrapper>
  );
};

export default User;

const Img = styled.img`
  height: 150px;
  &:hover {
    /* width: 95px; */
    border: 5px solid var(--primary-color);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
`;

const Ribbon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;
  width: 100px;
  height: 100px;
  text-align: right;
`;
const RibbonSpan = styled.span`
  text-transform: uppercase;
  text-align: center;
  line-height: 25px;
  transform: rotate(45deg);
  width: 115px;
  display: block;
  background: var(--primary-color);
  position: absolute;
  top: 20px;
  right: -25px;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

//fetch happening later
