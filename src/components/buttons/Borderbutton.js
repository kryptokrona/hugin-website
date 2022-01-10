import * as React from 'react'
import styled from "@emotion/styled";

const Button = styled.a`
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background-color: transparent;
  padding: 10px 15px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  transition: 250ms;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.8);
    color: rgba(255, 255, 255, 0.8);
  }
`

const Borderbutton = ({text, url}) => {
    return(
        <Button href={url}>{text}</Button>
    )
}

export default Borderbutton