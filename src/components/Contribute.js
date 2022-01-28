import * as React from 'react'
import styled from "@emotion/styled";
import {useEffect} from "react";
import Githubbutton from "./buttons/Githubbutton";

const Section = styled.div`
  box-sizing: border-box;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  padding: 0 40px;

  @media screen and (max-width: 1029px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    gap: 50px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  width: 50%;

  @media screen and (max-width: 1029px) {
    text-align: center;
    align-items: center;
    width: 100%;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  
  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`

const Title = styled.h2`
  color: rgb(255, 255, 255);
  font-weight: 400;
  margin: 0;
`

const SubTitle = styled.h2`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  margin: 0;
`

const Text = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Roboto Mono', monospace;
`

const CardWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1029px) {
    width: 80%;
    align-items: center;
  }
`

const Card = styled.div`
  display: flex;
  height: 150px;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 20px;
  transition: 250ms;

  &:hover {
    border: 2px solid rgba(255, 255, 255, 0.65);
  }

  @media screen and (max-width: 1029px) {
    width: 90%;
  }
`
const CardTextWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`


const UserWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 10px
`
const Avatar = styled.img`
  width: 32px;
  border-radius: 5px;
`
const UserName = styled.h3`
  color: white;
  font-weight: 400;
  margin: 0;
`

const CommitTitle = styled.h3`
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  
`

const Addition = styled.p`
  color: #5FF281;
  font-family: 'Roboto Mono', monospace;
`

const Deletion = styled.p`
  color: #F25F61;
  font-family: 'Roboto Mono', monospace;
`

const RoundButton = styled.a`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 250ms;
  color: #1d1d1d;

  &:hover {
    background-color: rgba(255, 255, 255, 0.65);
    cursor: pointer;
  }
`

const Contribute = () => {

    useEffect((file) => {

        fetch("https://api.github.com/repos/kryptokrona/hugin-messenger/commits/master")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                const username = data.author.login
                const commitMsg = data.commit.message
                const additions = data.stats.additions
                const deletions = data.stats.deletions
                const avatar = data.author.avatar_url
                const url = data.html_url

                document.getElementById('commitTitle').textContent = commitMsg
                document.getElementById('additions').textContent = additions
                document.getElementById('deletions').textContent = deletions
                document.getElementById('avatar').src = avatar
                document.getElementById('username').textContent = username
                document.getElementById('url').href = url
            });
    });

    return (
        <Section>
            <Wrapper>
                <TextWrapper>
                    <Title>Contribute</Title>
                    <Text>This project is open source and maintained by the Community. You can
                        for example make changes to this site, suggest awesome new features,
                        or help us squash bugs. Not a developer? No worries, there's tons of
                        things to do!</Text>
                    <ButtonWrapper>
                        <Githubbutton text="Github" url="https://github.com/kryptokrona/hugin-messenger"/>
                    </ButtonWrapper>
                </TextWrapper>
                <CardWrapper>
                    <SubTitle>Latest Commit</SubTitle>
                    <Card>
                        <CardTextWrapper>
                            <CommitTitle id="commitTitle"></CommitTitle>
                            <div style={{display: "flex", gap: "10px"}}>
                                <Addition id="additions"></Addition>
                                <Deletion id="deletions"></Deletion>
                            </div>
                        </CardTextWrapper>
                        <UserWrapper>
                            <div style={{display: "flex", gap: "10px", alignItems: "end"}}>
                                <Avatar id="avatar"></Avatar>
                                <UserName id="username"></UserName>
                            </div>
                            <RoundButton id="url" href='/#'>⮕</RoundButton>

                        </UserWrapper>
                    </Card>
                </CardWrapper>

            </Wrapper>
        </Section>
    )
}

export default Contribute