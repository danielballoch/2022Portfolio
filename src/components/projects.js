import { React } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from '@emotion/styled';
import GlacierIcon from "../images/projects/GlacierIcon.png";
import GlacierBG from "../images/projects/glacier.png";
import RobQuinIcon from "../images/projects/RobQuinIcon.png";
import RobQuinBG from "../images/projects/robquin.png";
import GlacierVideo from "../images/projects/GlacierVideoCrop.mp4"
import Video from "../components/video"

const StyledLink = styled(Link)`
text-decoration: none;
`
const StyledLink2 = styled(Link)`
display: flex;
text-decoration: none;
`

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
margin: 250px auto;
.project {
    margin-bottom: 90px;
}
.project-last {
    margin-bottom: 20px;
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
    max-width: 900px;
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
`


export default function Projects (){
    return(
        <ProjectDiv id="projects">
            <h1>Featured Projects</h1>
            <StyledLink to="/projects/glacier-international">
                {/* <StaticImage src="../images/projects/glacier.png" width={900}/> */}
                <div className="project">
                    <div className="glacier-video">
                        <Video videoSrcURL={GlacierVideo} videoTitle="Glacier Project Video"/>
                    </div>
                    <div className="project-text">
                        <StaticImage src="../images/projects/GlacierIcon.png" className="icon"/>
                        <div className="">
                            <p>Tools: HTML, CSS, Gatsby.js, React, node.js, TypeScript, Xero API, Sendgrid API, Google Re-captcha.</p>
                            <p>Live Site: <a href="https://glacier.nz" target="_blank">https://www.glacier.nz</a></p>
                        </div>
                    </div>
                </div>
            </StyledLink>
            <StyledLink to="/projects/rob-quin">
                <div className="project project-last">
                    <StaticImage className="rq-image" src="../images/projects/robquin.png" width={900}/>
                    <div className="project-text">
                        <StaticImage src="../images/projects/RobQuinIcon.png" className="icon"/>
                        <div className="">
                            <p>Tools: HTML, CSS, React.js, Gatsby.js, getForm API </p>
                            <p>Live site: <a href="https://www.robquin.co.nz" target="_blank">https://www.robquin.co.nz</a></p>
                        </div>
                    </div>
                </div>
            </StyledLink>
            <StyledLink2 to="/projects"><button><b>view all projects</b></button></StyledLink2>
        </ProjectDiv>
    )
}