import * as React from 'react'
import styled from "@emotion/styled";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const FeatureWrapper = styled.div`
  max-width: 1400px;
  box-sizing: border-box;
  width: 100%;
  padding: 0 40px;
  display: flex;
  gap: 20px
`

const Feature = styled.div`
  display: flex;
  gap: 10px;
`

const TextContent = styled.div`
  max-width: 60%;
`

const Title = styled.div`
  color: white;
  font-weight: 400;
`

const Text = styled.div`
  color: rgba(255, 255, 255, 0.5);
`

const Features = () => {
    return(
        <Section>
            <FeatureWrapper>

                <Feature>
                    <TextContent>
                        <Title>Private messages</Title>
                        <Text>buildddd</Text>
                    </TextContent>
                </Feature>

            </FeatureWrapper>
        </Section>
    )
}

export default Features