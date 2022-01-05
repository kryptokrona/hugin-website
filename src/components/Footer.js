import * as React from 'react'
import styled from "@emotion/styled";
import {FaFacebook, FaTwitter} from 'react-icons/fa'

const Section = styled.footer`
  width: 100%;
  height: 250px;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`

const Container = styled.div`
  max-width: 1200px;
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 40px;
`

const NavList = styled.ul`
 padding: 0;
`

const NavTitle = styled.h3`
  color: white;
  font-size: 1.25rem;
`

const ListItem = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 200;
  font-size: 1rem;
  font-family: 'Roboto Mono', monospace;
  transition: 250ms;
  
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`

const Footer= () => {
    return(
        <Section>
            <Container>
                <NavList>
                    <NavTitle>Info</NavTitle>
                    <ListItem>About</ListItem>
                    <ListItem>Explorer</ListItem>
                    <ListItem>Twitter</ListItem>
                    <ListItem>Twitter</ListItem>
                </NavList>
                <NavList>
                    <NavTitle>Info</NavTitle>
                    <ListItem>About</ListItem>
                    <ListItem>Explorer</ListItem>
                    <ListItem>Twitter</ListItem>
                    <ListItem>Twitter</ListItem>
                </NavList>
            </Container>
        </Section>
    )
}

export default Footer