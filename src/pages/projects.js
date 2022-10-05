import { React } from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import GlacierVideo from "../images/projects/GlacierVideoCrop.mp4"
import Video from "../components/video"

const Wrapper = styled.div`
margin: 100px auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
/* flex-wrap: wrap; */
h1 {
    margin: 0;
    padding: 0;
    font-size: 70px;
}
.image {
    @media(max-width: 596px){
        width: 80%;
    }
    width: 40%;
    max-width: 500px;
    margin: 30px;
    image-fit: contain;
    overflow: hidden;
    img {
        height: 101%;
        /* margin-bottom: -5px; */
    }
    video {
        margin-bottom: -5px;
    }
    
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
`

export default function Projects(){
    return(
        <Layout showSocial={false} title={"Daniel Balloch | Project Page"}>
            <Wrapper>
                <div className="image">
                        <Video videoSrcURL={GlacierVideo} videoTitle="Glacier Project Video"/>
                </div>
                <StaticImage className="image" src="../images/projects/robquin.png" width={900}/>
                <StaticImage className="image" src="../images/projects/Menco.png" width={900}/>
                <StaticImage className="image" src="../images/projects/RaglanLandscapeSupplies.png" width={900}/>
                
                <StaticImage className="image" src="../images/projects/PMDPainting.png" width={900} transformOptions={{cropFocus: "top"}}
                />
                <StaticImage className="image" src="../images/projects/PukekoPreschool.png" width={900}/>
                <StaticImage className="image" src="../images/projects/RoamingGiant.png" width={900}/>
                <StaticImage className="image" src="../images/projects/Pascoes.png" width={900}/>
                <StaticImage className="image" src="../images/projects/Vanman.png" width={900}/>
                
            </Wrapper>
        </Layout>
    )
}