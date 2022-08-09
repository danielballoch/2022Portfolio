import * as React from "react"
import Nav from "../components/nav.js"
import Hero from "../components/hero.js"
import About from "../components/about.js"
import Projects from "../components/projects.js"
import Contact from "../components/contact.js"
import Layout from "../components/layout.js"


const IndexPage = () => {
  return (
    <Layout>
            <Nav/>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
