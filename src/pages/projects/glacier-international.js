import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from '@emotion/styled';

import Layout from "../../components/layout.js"
import GlacierIcon from "../../images/projects/GlacierIcon.png";
import GlacierBG from "../../images/projects/glacier.png";
import RobQuinIcon from "../../images/projects/RobQuinIcon.png";
import RobQuinBG from "../../images/projects/robquin.png";
import GlacierVideo from "../../images/projects/GlacierVideoCrop.mp4"
import Video from "../../components/video"

const ProjectDiv = styled.div`
@media(max-width: 900px){
    h1 {
        padding: 0 10px;
    }
    .project-text {
        flex-direction: column;
        padding: 0 10px;
        .icon {
            width: 140px;
        }
    }
}
display: flex;
flex-direction: column;
width: 100%;
max-width: 900px;
margin: 100px auto;
.project {
    margin-bottom: 100px;
}
.project-text {
    margin: 0px;
    display: flex;
    .icon {
        top: -30px;
        
    }
}
.glacier-video {
    width: 100%;
    max-width: 1200px;
    div {
        max-height: 514px;
    }
    max-height: 514px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.rq-image {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px;
}
button {
            margin: 40px auto;
            padding: 10px 40px;
            width: 80%;
            font-size: 16px;
            background: none;
            border: solid black 1px;
            transition: .2s;
            :hover {
                cursor: pointer;
                border: solid #5ba6e4 1px;
                background-color: #5ba6e4;
                color: white;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px;
            }
    }
.hello {
    max-width: 900px;
    margin: auto;
    p {
        padding: 10px 2px;
        font-size: 1.1rem;
        line-height: 1.5;
        letter-spacing: 1.2px;
    }
}

`

const GlacierPage = () => {
    return (
      <Layout showSocial={false} title={"Daniel Balloch | Glacier International Project"}>
      <ProjectDiv>
            <div className="glacier-video">
                <Video videoSrcURL={GlacierVideo} videoTitle="Glacier Project Video"/>
            </div>
            <div className="project-text">
                <StaticImage src="../images/projects/GlacierIcon.png" className="icon"/>
                <div className="">
                    <p>Tools: HTML, CSS, Gatsby.js, React, node.js, TypeScript, Xero API, Sendgrid API, Google Re-captcha, Google Places.</p>
                    <a href="https://glacier.nz" target="_blank"><p>Live Site: https://www.glacier.nz</p></a>
                </div>
            </div>
            
            <div className="hello">
                <h2>Glacier international</h2>
                <p>This project was a website for Malcom King, CEO of Glacier International.</p>
                <p>Testimonial: "Daniel delivered above and beyond for us with a highly professional end to end service. A high performance website was the delivered result which expressed clear communication to our customers about our product, services and a hassle free payment gateway as our main call to action for marketing. We enjoyed the development process and ongoing support is appreciated so thank you from myself and the Glacier International team."</p>
                <br/>
                <h2>Context & Aim</h2>
                <p>Malcom came to me with a basic website that he wasn't really happy with. It had a simple ActiveCampaign form questionnaire to gather customers' custom Tundra orders, terms and conditions, and a photo or two.</p>
                <p>He really wanted a more professional design and interface for customers. Notably a "Build Your Tundra" page, including live prices and color options, for the new 2023 range of Tundra & Sequoia on their way.</p>
                <p>We talked pricing, went through a full discovery process over zoom including business questions, timeframe, customer profiles, competitor research etc, and signed a contract.</p>
                <br/>
                <h2>Design</h2>
                <p>As part of the discovery process I created three designs with brand attributes to present to Malcom. He would pick or combine elements into one design serving as a reference point for the tone/design of the project.</p>
                <StaticImage src="../../images/projects/StyleScapes.PNG" className="icon"/>
                <p>StyleScape #2 was selected and I continued creating a sitemap, wireframe options, gathered feedback, and then draft designs, feedback, and final designs. Malcom liked the majority of my designs and ideas off the bat so I only had to make minor adjustments before we reached our final designs.</p>
                <br/>
                <h2>Development</h2>
                <p>Once the design was set I created the project locally on Visual Studio Code, uploaded to github & netlify, and got to work.</p>
                <p>I'm a big fan of Gatsby because of the fast render speeds, openess, and ease to work with. I used it for this project and ended up being complimented by the SEO specialist Mathew who helped at the end of the project. He said he didn't need to try improve performance at all and there was a great backbone set for his strategy.</p>
                <p>I've found that making small changes, and constantly publishing these to a test domain is the best way to prevent errors or make them easy to catch when they come up - so this is a strategy I employeed over the course of the development.</p>
                <p>Most files were seperated out into components if they were going to be used again and I worked with the css library styled emotion so each page and component could hold it's own style.</p>
                <p>The initial development stage was fairly straight forward. I just coded to the design.</p>
                <p>Malcom wasn't sure if he wanted online payments because of the transaction costs and if he did what he would use, and wasn't 100% on which CRM he would use.</p>
                <p>I did my best to understand his situation and advise on his options here. We landed on ActiveCampaign and Xero, and although I hadn't worked with either (or the Google Places API) I was able to read through their documentation, run tests with Postman and demo pages/accounts, adjust to feature requests, and get everything up and running without too many issues.</p>
                <p>These were added to the project using Gatsby serverless functions, which is an Express-like architecture for building Node.js APIs.</p>
                <p>All code is availible online at: <a href="https://github.com/danielballoch/GlacierInternational" target="_blank">https://github.com/danielballoch/GlacierInternational</a></p>
                <p>For more info on the logistics of the website view my resume or get in touch at daniel@thoughtfulhq.com and I'd be happy to answer any questions.</p>
            </div>
      </ProjectDiv>
      </Layout>
    )
  }
  
  export default GlacierPage
  
  export const Head = () => <title>Home Page</title>