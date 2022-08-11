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
width: 900px;
margin: 250px auto;
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
    width: 900px;
    div {
        height: 514px;
    }
    height: 514px;
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
`


export default function Projects (){
    return(
        <ProjectDiv id="projects">
            <h1>Featured Projects</h1>
            <div className="project">
                {/* <StaticImage src="../images/projects/glacier.png" width={900}/> */}
                <div className="glacier-video">
                    <Video videoSrcURL={GlacierVideo} videoTitle="Glacier Project Video"/>
                </div>
                <div className="project-text">
                    <StaticImage src="../images/projects/GlacierIcon.png" className="icon"/>
                    <div className="">
                        <p>Tools: HTML, CSS, Gatsby.js, React, node.js, TypeScript, Xero API, Sendgrid API, Google Re-captcha.</p>
                        <a href="https://glacier.thoughtfulhq.com" target="_blank"><p>Live Site: https://www.glacier.thoughtfulhq.com</p></a>
                    </div>
                </div>
            </div>
            <div className="project">
                <StaticImage className="rq-image" src="../images/projects/robquin.png" width={900}/>
                <div className="project-text">
                    <StaticImage src="../images/projects/RobQuinIcon.png" className="icon"/>
                    <div className="">
                        <p>Tools: HTML, CSS, React.js, Gatsby.js, getForm API </p>
                        <a href="https://www.robquin.co.nz" target="_blank"><p>Live site: https://www.robquin.co.nz</p></a>
                    </div>
                </div>
            </div>
            <button><b>view all projects</b></button>
        </ProjectDiv>
    )
}