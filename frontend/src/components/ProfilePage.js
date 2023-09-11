import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../Hooks/UserContext";
import Header from "./Header";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProfilePage = () => {
  const { data } = useContext(UserContext);
  const userId = useParams();
  const [profileData, setProfileData] = useState("");

  const userData = data.data;

  useEffect(() => {
    fetch(`/api/users/${userId.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data.data);
      });
  }, []);

  if (profileData) {
    console.log(profileData);
  }
  return (
    <div>
      <Wrapper>
        <BackgroundImg src="\images\facespace_bg.jpg" />

        <div>
          {profileData && userData ? (
            <ContentWrapper>
              <ProfileDiv>
                <ProfilePic src={profileData.avatarUrl} />
                <h2>{profileData.name}</h2>
              </ProfileDiv>
              <H3>{profileData.name}'s friends</H3>
              <FriendsListDiv>
                {profileData.friends.map((userId) => {
                  const userObj = userData.find((user) => user.id === userId);
                  return (
                    <FriendsDiv>
                      <FriendsPic src={userObj.avatarUrl} />
                      <div>{userObj.name}</div>
                    </FriendsDiv>
                  );
                })}
              </FriendsListDiv>
            </ContentWrapper>
          ) : (
            <div> loading...</div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  margin-left: 30vw;
`;

const BackgroundImg = styled.img`
  max-height: 300px;
  width: 100%;
  object-fit: cover;
`;

const FriendsDiv = styled.div`
  background-color: var(--accent-bg-color);

  flex-direction: row;
`;
const FriendsPic = styled.img`
  max-width: 150px;
  border: 2px solid var(--primary-color);
`;

const ProfilePic = styled.img`
  max-width: 200px;
  border: 5px solid var(--primary-color);
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -80px;
  gap: 10px;
`;

const H3 = styled.h3`
  margin-top: 30px;
`;

const FriendsListDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export default ProfilePage;
