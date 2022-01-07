import * as React from 'react'
import styled from "@emotion/styled";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 40px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  transition: all 250ms;

  @media screen and (max-width: 579px) {
    padding: 0 20px;
  }
`

const CardOngoing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  background-color: transparent;
  height: 180px;
  width: 30%;
  border-radius: 8px;
  transition: all 250ms;
  border: 1px solid rgba(255, 255, 255, 0.5);

  @media screen and (max-width: 1079px) {
    width: 30%;
  }

  @media screen and (max-width: 879px) {
    width: 46%;
  }

  @media screen and (max-width: 579px) {
    width: 100%;
    height: 180px;
  }
`

const Title = styled.h2`
  color: rgb(151, 151, 151);
  font-weight: 400;
  margin-bottom: 100px;
`

const CardTitle = styled.h3`
  margin: 0;
  font-weight: 200;
  color: rgb(151, 151, 151);
`
const Text = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgb(151, 151, 151);
  font-weight: 400;
  margin-bottom: 100px;
`

const Roadmap = () => {
    return(
        <Section>
            <Title>Features</Title>
            <Wrapper>

                <CardOngoing>
                    <CardTitle> 🔒 Private Messages</CardTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                </CardOngoing>

                <CardOngoing>
                    <CardTitle> 🤙 Voice & Video</CardTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                </CardOngoing>

                <CardOngoing>
                    <CardTitle> 🗂 Unlimited Sharing</CardTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                </CardOngoing>

                <CardOngoing>
                    <CardTitle>🐥 Social Network</CardTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                </CardOngoing>

                <CardOngoing>
                    <CardTitle>😎 Ungovernable</CardTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                </CardOngoing>

                <CardOngoing>
                    <CardTitle>😎 Hashtags</CardTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>
                </CardOngoing>

            </Wrapper>
        </Section>
    )
}

export default Roadmap