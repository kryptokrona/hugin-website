import * as React from 'react'
import styled from "@emotion/styled";
import {FaGithub} from "react-icons/all";

const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  background-color: #6e5494;
  padding: 10px 15px;
  font-weight: 600;
  transition: 250ms;
  text-decoration: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #919191;
  }
`

const Githubbutton = ({text, url}) => {
    return(
        <Button href={url}>{text}<FaGithub size="1em"/></Button>
    )
}

export default Githubbutton