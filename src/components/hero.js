import { React } from "react"
import styled from '@emotion/styled';

const HeroDiv = styled.div`
height: 100vh;
display: flex;
    div {
        display: flex;
        flex-direction: column;
        width: 800px;
        margin: auto;
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
            width: 200px;
            font-size: 16px;
            background: none;
            border: solid black 1px;
            :hover {
                cursor: pointer;
        }
    }
}
`

export default function Hero (){
    return(
        <HeroDiv>
            <div>
                <p>Hello, my name is</p>
                <h1>Daniel Balloch.</h1>
                <h1>I make websites.</h1>
                <p>I'm a front end developer and founder of thoughtfulHQ, a small web development agency in New Zealand.</p>
                <button><b>Resume</b></button>
            </div>
        </HeroDiv>
    )
}