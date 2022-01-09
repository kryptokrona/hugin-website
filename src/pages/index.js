import * as React from "react"
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Download from "../components/Download";
import Roadmap from "../components/Roadmap";
import Features from "../components/Features";
import HuginDesktop from "../components/HuginDesktop";
import HuginMboile from "../components/HuginMboile";
import NewsletterSignup from "../components/SignupNews";


const Index = () => {
    return (
        <Layout>
            <Hero/>
            <Features/>
            <HuginDesktop/>
            <NewsletterSignup/>
            <HuginMboile/>
            <Roadmap/>
            <Download/>
        </Layout>
    )
}

export default Index