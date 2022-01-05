import * as React from 'react'
import Navbar from "./Navbar";
import  Footer from "./Footer";

import "../theme/style.css"


const Layout = ( { children } ) => {
    return(
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout