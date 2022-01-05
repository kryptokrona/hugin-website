

import * as React from 'react'
import styled from "@emotion/styled";
import {AiOutlineMessage, AiOutlineEyeInvisible, AiOutlineLock} from "react-icons/all";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const CardWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 40px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #1d1d1d;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`

const Card = styled.div`
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 30px;
  width: 250px;
  height: 250px;
  
  @media screen and (max-width: 1024px) {
    width: auto;
    height: 200px;
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
                    <AiOutlineMessage size="3em" color="rgba(255, 255, 255, 0.4)"/>
                    <Title>Lorem</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Text>
                </Card>
                <Card>
                    <AiOutlineEyeInvisible size="3em" color="rgba(255, 255, 255, 0.4)"/>
                    <Title>Ipsum</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  </Text>
                </Card>
                <Card>
                    <AiOutlineLock size="3em" color="rgba(255, 255, 255, 0.4)"/>
                    <Title>Centuri</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Text>
                </Card>
            </CardWrapper>
        </Section>


    )
};

export default BorderCard;