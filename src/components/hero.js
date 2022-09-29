import { React } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from '@emotion/styled';
import resume from "../../static/DanielBallochResume2022.pdf"

const HeroDiv = styled.div`
height: 100vh;
display: flex;
    div {
        @media(max-width: 500px){
            padding: 20px;
            margin: auto;
            p {
                max-width: 300px !important;
                width: 100% !important;
               
            }
        }
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 800px;
        justify-content: center;
        margin: 0 auto 118px auto;
        /* margin-bottom: 116px; */
        h1 {
            font-size: 70px;
            margin: 0;
            padding: 0;
        }
        p {
            max-width: 500px;
        }
        button {
            padding: 10px 40px;
            max-width: 300px;
            width: 100%;
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
}
`

export default function Hero (){
    return(
        <div style={{ display: "grid"}}>
            <StaticImage  
                    style={{
                    gridArea: "1/1",
                    maxHeight: "100%",
                    width: "100%",
                    height: "100vh",
                    marginBottom: "100px",
                    opacity: "1",
                    }}
                    // layout="fullWidth"
                    objectPosition={"left"}
                    alt=""
                    src={"../images/WhiteBackground3.jpeg"}
                    formats={["auto", "webp", "avif"]}
            />
            <HeroDiv id="home" style={{ display: "grid",gridArea: "1/1", maxHeight: 900, marginTop: 100,position: "relative",}}>
                    <div>
                        <p>Hello, my name is</p>
                        <h1>Daniel Balloch.</h1>
                        <h1>I make websites.</h1>
                        <p>I'm a front end developer and founder of thoughtfulHQ, a small web development agency in New Zealand.</p>
                        <a href={resume} target="_blank" rel="noopener noreferrer"><button ><b>Here's my Resume</b></button></a>
                    </div>
            </HeroDiv>
        </div>
    )
}