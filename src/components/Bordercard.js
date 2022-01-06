import * as React from 'react'
import styled from "@emotion/styled";
import Bubble from '../images/Bubble.png'
import Eye from '../images/Eye.png'
import Dots from '../images/Dots.png'

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
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
  
  @media screen and (max-width: 1029px) {
    flex-direction: row;
    gap: 30px;
  }

  @media screen and (max-width: 400px) {
    padding: 20px 20px;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 24%;
  padding: 40px;
  height: 280px;
  transition: all 250ms;

  
  @media screen and (max-width: 1029px) {
    width: 90%;
    height: 200px;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 589px) {
    width: 90%;
    height: 260px;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1029px) {
    margin-left: 20px;
    width: 50%;
    justify-content: space-between;

  }

  @media screen and (max-width: 589px) {
    justify-content: space-between;
    width: 100%;
    margin-left: 0;

  }
  
`

const Title = styled.h4`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin:0;
  margin-top: 10px;
  color: white;
`;

const Text = styled.p`
  text-align: center;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-family: roboto mono;
  line-height: 1.75rem;
`;

const CardImage = styled.img`
  width: 100px;
  height: 80px;
  margin-bottom: 20px;
`


const BorderCard = () => {
    return(
        <Section>
            <CardWrapper>
                <Card>
                    <CardImage src={Bubble}/>
                    <TextContent>
                        <Title>Speak Freely</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                    </TextContent>
                </Card>
                <Card>
                    <CardImage src={Eye}/>
                    <TextContent>
                        <Title>Privacy</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                    </TextContent>
                </Card>
                <Card>
                    <CardImage src={Dots}/>
                    <TextContent>
                        <Title>Decentralized</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                    </TextContent>
                </Card>
            </CardWrapper>
        </Section>


    )
};

export default BorderCard;