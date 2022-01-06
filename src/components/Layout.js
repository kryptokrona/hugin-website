import * as React from 'react'
import Navbar from "./Navbar";
import  Footer from "./Footer";
import Seo from './SEO'
import "../theme/style.css"


const Layout = ( { children } ) => {
    return(
        <>
            <Seo/>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout