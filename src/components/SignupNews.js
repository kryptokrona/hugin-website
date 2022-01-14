import * as React from 'react'
import styled from "@emotion/styled";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`

const Wrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px 40px;
  gap: 40px;

  @media screen and (max-width: 700px) {
   flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 20px 20px;
  }
  
`

const Text = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 200;
  margin: 0;
`

const Form = styled.form`
 display: flex;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

const Email = styled.input`
  text-align: center;
  background-color: #1d1d1d;
  border: 1px solid #979797;
  border-radius: 5px;
  max-width: 250px;
  width: 100%;
  height: 40px;
  color: white;
  font-size: 16px;
  font-family: 'Roboto Mono', monospace;
  margin: 0;

  @media screen and (max-width: 700px) {
    max-width: 250px;
    width: 100%;
  }
`

const Button = styled.button`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  transition: 250ms;
  text-decoration: none;
  color: #1d1d1d;
  border: 1px solid;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    cursor: pointer;
`


const NewsletterSignup = () => {
    return(
        <Section>
            <Wrapper>
                <Text>Sign up to our Newsletter</Text>
                <Form name="Email Form" method="POST" data-netlify="true">
                    <input type="hidden" name="email" value="Email Form" />
                    <div>
                        <Email placeholder="Your email" type="email" name="email" />
                    </div>
                    <Button type="submit">Send</Button>
                </Form>
            </Wrapper>
        </Section>
    )
}

export default NewsletterSignup