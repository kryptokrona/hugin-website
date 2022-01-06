import * as React from 'react'
import styled from "@emotion/styled";
import HuginImage from '../images/HuginMessenger.png'

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const ImageWrapper = styled.div`

`

const Image = styled.img`

`

const Screenshot = () => {
    return(
        <Section>
            <ImageWrapper>
                <Image src={HuginImage}/>
            </ImageWrapper>
        </Section>
    )
}