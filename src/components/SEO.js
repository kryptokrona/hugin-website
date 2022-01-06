import * as React from 'react'
import { Helmet } from 'react-helmet'

const SEO = () => {
    return(
            <Helmet htmlAttributes>
                <html lang="en" />
                <title>Hugin Messenger</title>
                <meta name="Kryptokrona" content="Hugin Messenger" />
                <script async src="https://cdn.splitbee.io/sb.js"></script>
                <link rel="icon" src="../images/icon.png"  type="image/x-icon"></link>
            </Helmet>
    )
}

export default SEO