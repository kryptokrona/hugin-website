import * as React from 'react'
import styled from "@emotion/styled";
import HuginLogo from '../images/Hugin.png';
import Fillbutton from "./buttons/Button";
import Borderbutton from "./buttons/Borderbutton";


const Section = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  background-color: #1d1d1d;
  padding-top: 15em;
  padding-bottom: 10em;

  @media screen and (max-width: 579px) {
    padding-top: 12em;
  }
`

const Container = styled.div`
  max-width: 1400px;
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const TextContent = styled.div`
  max-width: 600px;
  padding-right: 30px;

  @media screen and (max-width: 1000px) {
    order: 1;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-right: 0;
  }
`


const Title = styled.h1`
  color: white;
  font-weight: 600;
  margin: 10px 0;
`

const SubTitle = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.53);
  font-weight: 200;
  margin: 0;
`

const Text = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.75rem;
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

const HuginCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #5f86f2;

  @media screen and (max-width: 1000px) {
    margin-bottom: 100px;
    order: 0;
  }
`

const Hugin = styled.img`
  width: 113%;
  margin-left: 35px;
`


const Hero = () => {
    return (
        <Section>
            <Container>
                <TextContent>
                    <SubTitle>Powered by Kryptokrona</SubTitle>
                    <Title>Welcome to Hugin Messenger</Title>
                    <Text>Hugin puts your privacy first. By the use of military grade encryption, your messages are safe from the praying eyes of others.
                        Hugin uses the decentralized structure that makes cryptocurrencies work, meaning that the system cannot be taken down or be controlled by any one entity.</Text>
                    <ButtonWrapper>
                        <Fillbutton text="Download" url="#download"/>
                        <Borderbutton text="Whitepaper" url="/whitepaper"/>
                    </ButtonWrapper>
                </TextContent>
                <HuginCircle className="rgb">
                    <Hugin color="#979797" src={HuginLogo}/>
                </HuginCircle>
            </Container>
        </Section>
    )
}

export default Hero