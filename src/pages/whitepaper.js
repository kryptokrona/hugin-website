import * as React from 'react'
import styled from "@emotion/styled";
import Layout from "../components/Layout";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const Wrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 400px) {
    padding: 0 20px;
  }
`

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: white;
`

const SubTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-weight: 200;
`

const ThinTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: white;
`

const Text = styled.p`
  color: white;
  font-family: 'Roboto Mono', monospace;
`

const Whitepaper = () => {
    return(
        <Layout>
            <Section>
                <Wrapper>
                    <Title>Hugin Messenger Whitepaper</Title>
                    <SubTitle>Introduction</SubTitle>
                    <Text>Hugin Messenger is a decentralized private messenger and social network with native
                        cryptocurrency payments. WIth it you can engage in secure communications and make
                        untraceable transactions, all without any trusted parties.</Text>
                    <Text>There are many private messaging services on the market today, but how private they really
                        are is a point of debate, and often you have to take their promises at face value. Due to parts
                        of their system being closed source, or them having opaque distribution lines, like with
                        Google Play or the Apple App Store 1 you have to trust the developer’s competence and
                        intentions. In addition, centralized systems such as Signal, WhatsApp, Facebook Messenger
                        etc are dependent on a specific company’s servers and they can become subjected to
                        coercion by third parties, which could lead to shutdowns, forced decryption of private
                        messages, censorship, as well as abuse of power.</Text>

                </Wrapper>
            </Section>
        </Layout>

    )
}

export default Whitepaper