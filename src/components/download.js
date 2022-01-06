import * as React from 'react'

import "../theme/style.css"
import {FaApple, FaLinux, FaWindows} from "react-icons/all";
import styled from "@emotion/styled";
import {useEffect} from "react";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;
  padding-bottom: 100px;
`
const Container = styled.div`
  padding: 100px 0;
  max-width: 1200px;
  box-sizing: border-box;
`
const Wrapper = styled.div`
    display: flex;
  gap: 100px;
  
  @media screen and (max-width: 400px) {
    gap: 60px;
  }
`
const Title = styled.h2`
  color: rgba(255, 255, 255, 0.53);
  text-align: center;
  margin-bottom: 100px;
  font-weight: 400;
`


const Download = () => {

    useEffect((file) => {
        let latest_mac;
        let latest_win;
        let latest_lin;
        fetch("https://api.github.com/repos/kryptokrona/hugin-messenger/releases/latest")
            .then((response) => response.json())
            .then((data) => {
                let files = data.assets;
                for (file in files) {
                    if (files[file].name.slice(files[file].name.length - 7) === "mac.zip") {
                        latest_mac = files[file].browser_download_url;
                    } else if (files[file].name.slice(files[file].name.length - 3) === "exe") {
                        latest_win = files[file].browser_download_url;
                    } else if (files[file].name.slice(files[file].name.length - 8) === "AppImage") {
                        latest_lin = files[file].browser_download_url;
                    }
                    document.getElementById('latest_mac').href = latest_mac;
                    document.getElementById('latest_win').href = latest_win;
                    document.getElementById('latest_lin').href = latest_lin;
                }
                console.log(latest_mac, latest_lin, latest_win)
            });
    });

    return(
        <Section id="download">
            <Container>
                <Title>Choose your OS</Title>
                <Wrapper>
                    <a id='latest_win' data-splitbee-event="Download Windows" href='/#'><FaWindows aria-label="Download Windows" size="3em" color="#fff"/></a>
                    <a id='latest_mac' data-splitbee-event="Download MacOS" href='/#'><FaApple  aria-label="Download MacOS" size="3em" color="#fff"/></a>
                    <a id='latest_lin' data-splitbee-event="Download Linux" href='/#'><FaLinux aria-label="Download Linux" size="3em" color="#fff"/></a>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default Download