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
      <Layout showSocial={false}>
            <ProjectDiv>
                    <StaticImage className="rq-image" src="../images/projects/robquin.png" width={900}/>
                    <div className="project-text">
                        <StaticImage src="../images/projects/RobQuinIcon.png" className="icon"/>
                        <div className="">
                            <p>Tools: HTML, CSS, React.js, Gatsby.js, getForm API </p>
                            <p>Live site: <a href="https://www.robquin.co.nz" target="_blank">https://www.robquin.co.nz</a></p>
                        </div>
                    </div>
            
            <div className="hello">
                <h2>Rob Quin</h2>
                <p>This project was a website for Rob Quin, a sole barrister in Hamilton.</p>
                <br/>
                <h2>Context & Aim</h2>
                <p>Rob had an older website with his basic info already laid out, but needed something that was mobile friendly and had a contact form to improve his workflow and client experience.</p>
                <br/>
                <h2>Design</h2>
                <p>His wife made the previous design and so I tried to keep much of the elements the same and just refesh things. I created a few collage options for the background with stock photos and a simple responsive design to fit his industry and brand.</p>
                <p>The original website had multiple pages, with the new design I opted to keep everything (bar the privacy policy) on one page for a simplier user experience.</p>
                <StaticImage src="../../images/projects/RQbefore.png" className="icon"/>
                <StaticImage src="../../images/projects/RQafter.png" className="icon"/>
                
                <br/>
                <h2>Development</h2>
                <p>Development was fairly straight forward. I created the project on Visual Studio Code using Gatsby, a react.js framework, and styled components. I also used GetForm for the form integration and set up and auto-responder on user submissions.</p>
                <p>The full code for the project can be found here: <a href="https://github.com/danielballoch/RQ" target="_blank">https://github.com/danielballoch/RQ</a></p>
                <p>For more info on the logistics of the website view my resume or get in touch at daniel@thoughtfulhq.com and I'd be happy to answer any questions.</p>
             
            </div>
      </ProjectDiv>
      </Layout>
    )
  }
  
  export default GlacierPage
  
  export const Head = () => <title>Home Page</title>