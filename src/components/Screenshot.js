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
  padding: 0 40px;
  max-width: 1300px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 400px) {
    padding: 0px 20px;
  }
  
`

const Image = styled.img`
  max-width: 1300px;
`

const Screenshot = () => {
    return (
        <Section>
            <ImageWrapper>
                <Image src={HuginImage}/>
            </ImageWrapper>
        </Section>
    )
}

export default Screenshot