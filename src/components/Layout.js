import * as React from 'react'
import Navbar from "./Navbar";
import  Footer from "./Footer";
import SEO from './SEO'
import "../theme/style.css"


const Layout = ( { children } ) => {
    return(
        <>
            <SEO/>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout