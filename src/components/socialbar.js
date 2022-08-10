import React, {useState, useEffect} from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const NavDiv = styled.div`
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
justify-content: flex-end;
a {
    padding: 30px;
}
`


export default function Nav(){
    return(
        <NavDiv>
            <a>Github</a>
            <a>Dribble</a>
            <a>Linkedin</a>
        </NavDiv>
    )
}