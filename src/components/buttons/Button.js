import * as React from 'react'
import styled from "@emotion/styled";

const Button = styled.a`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 10px 15px;
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

const Fillbutton = ({text, url}) => {
    return(
        <Button href={url}>{text}</Button>
    )
}

export default Fillbutton