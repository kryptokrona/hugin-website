import * as React from 'react'
import styled from "@emotion/styled";
import {useEffect, useState} from "react";

const Section = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  
`

const Text = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 200;
`

const Form = styled.form`
 display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Email = styled.input`
  background-color: #1d1d1d;
  border: 1px solid #979797;
  border-radius: 5px;
  width: 250px;
  height: 40px;
  color: white;
  font-size: 18px;
`

const Button = styled.a`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 12px 20px;
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
                <Form name="email Form" method="POST" data-netlify="true">
                    <input type="hidden" name="email" value="Contact Form" />
                    <div>
                        <label>Your Email:<Email type="email" name="email" /></label>

                    </div>
                    <Button type="submit">Send</Button>
                </Form>
            </Wrapper>
        </Section>
    )
}

export default NewsletterSignup