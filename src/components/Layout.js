import * as React from 'react'
import Navbar from "./Navbar";
import  Footer from "./Footer";
import Seo from './SEO'
import "../theme/style.css"
import Contribute from "./Contribute";


const Layout = ( { children } ) => {
    return(
        <>
            <Seo/>
            <Navbar/>
            {children}
            <Contribute/>
            <Footer/>
        </>
    )
}

export default Layout