import * as React from "react"
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Download from "../components/download";
import BorderCard from "../components/Bordercard";



const Index = () => {
  return(
   <Layout>
       <Hero/>
       <BorderCard/>
       <Download/>
   </Layout>
  )}

export default Index