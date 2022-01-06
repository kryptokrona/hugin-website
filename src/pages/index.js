import * as React from "react"
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Download from "../components/download";
import BorderCard from "../components/Bordercard";
import Roadmap from "../components/roadmap";



const Index = () => {
  return(
   <Layout>
       <Hero/>
       <BorderCard/>
       <Roadmap/>
       <Download/>
   </Layout>
  )}

export default Index