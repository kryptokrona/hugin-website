import * as React from 'react'
import styled from "@emotion/styled";

const Nav = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(29, 29, 29, 0.50);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: fixed;
  margin-top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`

const NavWrapper = styled.div`
  max-width: 1400px;
  box-sizing: border-box;
  padding: 20px 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 400px) {
    padding: 20px 20px;
  }
`
const Brand = styled.a`
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  transition: 250ms;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
  }
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const NavButton = styled.a`
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.5);
  padding: 8px;
  transition: 250ms;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: #fff;
    text-shadow: 0 0 10px #fff;
  }
`

const Rgb = styled.div`
  width: 100%;
  height: 2px;
  position: fixed;
  top: 0;
  background-color: #5f86f2;
`

const Navbar = () => {
    return (
        <Nav id="home">
            <Rgb className="rgb"/>
            <NavWrapper>
                <Brand href="/">Hugin</Brand>
                <Navigation>
                    <NavButton href="https://kryptokrona.se">Kryptokrona →</NavButton>
                </Navigation>
            </NavWrapper>
        </Nav>
    )
}


export default Navbar