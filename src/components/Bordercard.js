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
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  transition: all 250ms;
  background-color: #1d1d1d;
  gap: 10px;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 400px) {
    padding: 20px 20px;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 40px;
  width: 15%;
  height: 310px;
  transition: all 250ms;
  
  @media screen and (max-width: 1024px) {
    width: 33;
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

const CardImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
`


const BorderCard = () => {
    return(
        <Section>
            <CardWrapper>
                <Card>
                    <CardImage src={Bubble}/>
                    <Title>Speak Freely</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                </Card>
                <Card>
                    <CardImage src={Eye}/>
                    <Title>Privacy</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  </Text>
                </Card>
                <Card>
                    <CardImage src={Numbers}/>
                    <Title>Encryped</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Text>
                </Card>
                <Card>
                    <CardImage src={Dots}/>
                    <Title>Decentralized</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Text>
                </Card>
            </CardWrapper>
        </Section>


    )
};

export default BorderCard;