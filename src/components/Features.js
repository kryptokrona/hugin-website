import * as React from 'react'
import styled from "@emotion/styled";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 40px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
  transition: all 250ms;

  @media screen and (max-width: 579px) {
    padding: 0 20px;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: transparent;
  height: 220px;
  width: 30%;
  border-radius: 8px;
  transition: all 250ms;
  border: 1px solid rgba(255, 255, 255, 0.5);
  cursor: none;
  

  @media screen and (max-width: 1000px) {
    width: 46%;
  }

  @media screen and (max-width: 629px) {
    width: 100%;
    height: 180px;
  }
`

const CardContent = styled.div`
padding: 20px;
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
    return (
        <Section>
            <Wrapper>

                <Card>
                    <CardContent>
                        <CardTitle> 🔒 Private Messages</CardTitle>
                        <Text>Every message is encrypted with leading assymetric encryption, specifically NaCl. Read more about the encryption here (https://nacl.cr.yp.to/) </Text>
                    </CardContent>

                </Card>

                <Card>
                    <CardContent>
                        <CardTitle> 🤙 Voice & Video</CardTitle>
                        <Text>Communicate with voice & video without the use of any intermediate server that process your data. Data is passed directly between peers. </Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle> 🗂 Unlimited Sharing</CardTitle>
                        <Text>Share without looking at the file size. This feature is powered by Bittorrent technology, which is the leading peer-to-peer file sharing protocol</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>🐥 Social Network</CardTitle>
                        <Text>Hugin Boards, the next step in the evolution of social media. Instead of likes, you have tips, instead of censorship, you have freedom of speech!</Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>😎 Ungovernable</CardTitle>
                        <Text>Hugin cannot be taken down or be be censored, and most importantly Hugin does not function without you! </Text>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>🥰 Open-source</CardTitle>
                        <Text>Our source code is open for everyone to view and our community is open for anyone interested in contributing. </Text>
                    </CardContent>
                </Card>

            </Wrapper>
        </Section>
    )
}

export default Roadmap