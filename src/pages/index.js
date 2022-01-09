import * as React from "react"
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Download from "../components/download";
import BorderCard from "../components/Bordercard";
import Roadmap from "../components/roadmap";
import Features from "../components/Features";
import HuginDesktop from "../components/HuginDesktop";
import HuginMboile from "../components/HuginMboile";


const Index = () => {
    return (
        <Layout>
            <Hero/>
            <BorderCard/>
            <HuginDesktop/>
            <Features/>
            <HuginMboile/>
            <Roadmap/>
            <Download/>
        </Layout>
    )
}

export default Index