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
            <link rel="canonical" href="http://hugin.chat/" />
            <script defer data-domain="hugin.chat" src="https://plausible.io/js/plausible.js"></script>
            <link rel="icon" src="../images/icon.png" type="image/x-icon"></link>
        </Helmet>
    )
}

export default Seo