import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import User from "./User";

const HomePage = () => {
  return (
    <div>
      <Wrapper>
        <H1>All Facespace members</H1>
        <div>
          <User />
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 5vh 10vh;
`;

const H1 = styled.h1`
  font-size: 50px;
`;

export default HomePage;
