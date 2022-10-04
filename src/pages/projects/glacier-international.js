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
        padding: 10px;
        font-size: 1.1rem;
        line-height: 1.5;
        letter-spacing: 1.2px;
    }
}

`

const GlacierPage = () => {
    return (
      <Layout showSocial={false}>
      <ProjectDiv>
            <div className="glacier-video">
                <Video videoSrcURL={GlacierVideo} videoTitle="Glacier Project Video"/>
            </div>
            <div className="project-text">
                <StaticImage src="../images/projects/GlacierIcon.png" className="icon"/>
                <div className="">
                    <p>Tools: HTML, CSS, Gatsby.js, React, node.js, TypeScript, Xero API, Sendgrid API, Google Re-captcha.</p>
                    <a href="https://glacier.nz" target="_blank"><p>Live Site: https://www.glacier.nz</p></a>
                </div>
            </div>
            
            <div className="hello">
                <h2>Glacier international</h2>
            
                <p>This project was a website for Malcom King, CEO of Glacier International.</p>

                <p>Testimonial: "Daniel delivered above and beyond for us with a highly professional end to end service. A high performance website was the delivered result which expressed clear communication to our customers about our product, services and a hassle free payment gateway as our main call to action for marketing. We enjoyed the development process and ongoing support is appreciated so thank you from myself and the Glacier International team."</p>

                <h2>Context & Aim</h2>
                <p>Malcom came to me with a basic website that he wasn't really happy with. It had a simple ActiveCampaign form questioniere to gather customers custom Tundra orders, terms and conditions and a photo or two.</p>
                <p>He really wanted to get a new website with a "Build Your Tundra" page, including live prices and color options, and a more professional design since the new 2023 line of Tundra & Sequoia were on their way.</p>
                <p>We talked pricing, went through a full discovery process over zoom including business questions, timeframe, customer profiles, competitor research etc, and signed a contract.</p>

                <h2>Design</h2>
                <p>As part of the discovery process I created three designs with brand attributes to present to Malcom. He would pick or combine elements into one design serving as a reference point for tone/design of the project.</p>
                <StaticImage src="../../images/projects/StyleScapes.PNG" className="icon"/>
                <p>#2 was selected and I continued creating a sitemap, wireframe options, gathered feedback and then draft designs, feedback, final designs. Malcom liked majority of my designs and ideas off the bat so I only had to make minor adjustments before we reached our final designs.</p>
                <h2>Development</h2>
                <p>Once the design was set I created the project locally on Visual Studio Code, uploaded to github, and got to work.</p>
                <p>I'm a big fan of Gatsby and used it for the project because of the fast render speeds and ease to work with, especially in terms of API integration and hosting.</p>
            </div>
      </ProjectDiv>
      </Layout>
    )
  }
  
  export default GlacierPage
  
  export const Head = () => <title>Home Page</title>