import { React } from "react"
import styled from '@emotion/styled';
import Layout from "../components/layout";

const Wrapper = styled.div`
margin: auto;
h1 {
    margin: 0;
    padding: 0;
    font-size: 70px;
}
`

export default function Projects(){
    return(
        <Layout>
            <Wrapper>
                <h1>Projects</h1>
            </Wrapper>
        </Layout>
    )
}