import * as React from 'react'

import "../theme/style.css"
import {FaApple, FaLinux, FaWindows} from "react-icons/all";
import styled from "@emotion/styled";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;
  padding-bottom: 100px;
`
const Container = styled.div`
  padding: 100px 0;
  max-width: 1200px;
  box-sizing: border-box;
`
const Wrapper = styled.div`
    display: flex;
  gap: 100px;
  
  @media screen and (max-width: 400px) {
    gap: 60px;
  }
`
const Title = styled.h2`
  color: rgba(255, 255, 255, 0.53);
  text-align: center;
  margin-bottom: 100px;
  font-weight: 400;
`

const Download = () => {
    return(
        <Section id="download">
            <Container>
                <Title>Choose your OS</Title>
                <Wrapper>
                    <a href="https://github.com/kryptokrona/hugin-messenger/releases/download/v0.6.0/HuginMessenger-Setup-0.6.0.exe"><FaWindows size="3em" color="#fff"/></a>
                    <a href="https://github.com/kryptokrona/hugin-messenger/releases/download/v0.6.0/HuginMessenger-0.6.0.dmg"><FaApple size="3em" color="#fff"/></a>
                    <a href="#" style={{cursor: "not-allowed"}}><FaLinux size="3em" color="rgba(255, 255, 255, 0.50)"/></a>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default Download