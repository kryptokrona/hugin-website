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
`
const Container = styled.div`
    max-width: 1200px;
  box-sizing: border-box;
  padding-bottom: 200px;
`
const Wrapper = styled.div`
    display: flex;
  gap: 100px;
`
const Title = styled.h2`
  color: white;
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
                    <FaWindows size="3em" color="#fff"/>
                    <FaApple size="3em" color="#fff"/>
                    <FaLinux size="3em" color="#fff"/>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default Download