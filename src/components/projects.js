import { React } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from '@emotion/styled';
import GlacierIcon from "../images/projects/GlacierIcon.png";
import GlacierBG from "../images/projects/glacier.png";
import RobQuinIcon from "../images/projects/RobQuinIcon.png";
import RobQuinBG from "../images/projects/robquin.png";
import GlacierVideo from "../images/projects/GlacierVideoCrop.mp4"
import Video from "../components/video"

const ProjectDiv = styled.div`
display: flex;
flex-direction: column;
width: 1000px;
margin: 250px auto;
.project-text {
    margin: 0px;
    display: flex;
    .icon {
        top: -30px;
    }
}
.videoClass {
    width: 900px;
    height: 514px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.RQ {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
`


export default function Projects (){
    return(
        <ProjectDiv>
            <h1>Featured Projects</h1>
            <div>
                {/* <StaticImage src="../images/projects/glacier.png" width={900}/> */}
                <div className="videoClass">
                    <Video videoSrcURL={GlacierVideo} videoTitle="Glacier Project Video"/>
                </div>
                <div className="project-text">
                    <StaticImage src="../images/projects/GlacierIcon.png" className="icon"/>
                    <div className="">
                        <p>Tools: HTML, CSS, Gatsby.js, React, node.js, TypeScript, Xero API, Sendgrid API, Google Re-captcha.</p>
                        <p>Live Site: https://www.glacier.thoughtfulhq.com</p>
                    </div>
                </div>
            </div>
            <div>
                <StaticImage className="RQ" src="../images/projects/robquin.png" width={900}/>
                <div className="project-text">
                    <StaticImage src="../images/projects/RobQuinIcon.png" className="icon"/>
                    <div className="">
                        <p>Tools: HTML, CSS, React.js, Gatsby.js, getForm API </p>
                        <p>Live site: https://www.robquin.co.nz</p>
                    </div>
                </div>
            </div>
            <button>view all projects</button>
        </ProjectDiv>
    )
}