import * as React from 'react'
import styled from "@emotion/styled";
import {AiOutlineMessage, AiOutlineEyeInvisible, AiOutlineLock} from "react-icons/all";
import Bubble from '../images/Bubble.png'
import Eye from '../images/Eye.png'
import Numbers from '../images/Numbers.png'
import Dots from '../images/Dots.png'

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const CardWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  box-sizing: border-box;
  padding: 40px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 250ms;
  background-color: #1d1d1d;
  gap: 10px;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }

  @media screen and (max-width: 400px) {
    padding: 20px 20px;
  }
`

const Card = styled.div`
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 30px;
  width: 250px;
  height: 250px;
  transition: all 250ms;
  
  @media screen and (max-width: 1024px) {
    width: auto;
    height: 200px;
  }

  @media screen and (max-width: 400px) {
    width: auto;
    height: 280px;
  }
`;

const Title = styled.h4`
  font-size: 24px;
  font-weight: 400;
  margin:0;
  margin-top: 10px;
  color: white;
`;

const Text = styled.p`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-family: roboto mono;
  line-height: 1.75rem;
`;


const BorderCard = () => {
    return(
        <Section>
            <CardWrapper>
                <Card>
                    <Bubble/>
                    <Title>Speak Freely</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Text>
                </Card>
                <Card>
                    <AiOutlineEyeInvisible size="2em" color="#a65ff2"/>
                    <Title>Privacy</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  </Text>
                </Card>
                <Card>
                    <AiOutlineLock size="2em" color="f25fd0"/>
                    <Title>Encryped & Uninterruptable</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Text>
                </Card>
                <Card>
                    <AiOutlineMessage size="2em" color="#5f86f2"/>
                    <Title>Speak Freely</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Text>
                </Card>
            </CardWrapper>
        </Section>


    )
};

export default BorderCard;