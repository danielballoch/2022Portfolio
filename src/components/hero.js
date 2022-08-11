import { React } from "react"
import styled from '@emotion/styled';

const HeroDiv = styled.div`
height: 100vh;
display: flex;
    div {
        display: flex;
        flex-direction: column;
        width: 800px;
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
            width: 300px;
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
        <HeroDiv id="home">
            <div>
                <p>Hello, my name is</p>
                <h1>Daniel Balloch.</h1>
                <h1>I make websites.</h1>
                <p>I'm a front end developer and founder of thoughtfulHQ, a small web development agency in New Zealand.</p>
                <button><b>Here's my Resume</b></button>
            </div>
        </HeroDiv>
    )
}