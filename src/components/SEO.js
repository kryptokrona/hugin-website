import * as React from 'react'
import {Helmet} from 'react-helmet'

const Seo = () => {
    return (
        <Helmet htmlAttributes>
            <html lang="en"/>
            <title>Hugin Messenger</title>
            <meta name="Hugin Messenger" content="Hugin Messenger"/>
            <meta name="description" content="Hugin is a messaging service where messages are stored on the kryptokrona blockchain. Your
                        messages are secured with industry leading encryption so that only you and your chat partner have
                        the possibility to read them."/>
            <meta name="theme-color" content="#1d1d1d"/>
            <meta name="robots" content="index, follow"/>
            <meta name="google-site-verification" content="ko52AFJlworyGWhg_fZWyRbf4abZsVCfRabcUF_Nh3g"/>
            <link rel="canonical" href="http://hugin.chat/"/>
            <script defer data-domain="hugin.chat" src="https://plausible.io/js/plausible.js"></script>
            <link rel="icon" src="../images/favicon.ico" type="image/x-icon"></link>
            <meta property="og:title" content=""/>
            <meta property="og:image"
                  content="https://user-images.githubusercontent.com/36674091/148423512-2c019bd6-6b32-45ce-b380-100632b00f0f.png"/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="627"/>
        </Helmet>
    )
}

export default Seo