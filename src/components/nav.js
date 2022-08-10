import React, {useState, useEffect} from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const NavDiv = styled.div`
width: 900px;
margin: auto;
display: flex;
justify-content: flex-end;
a {
    padding: 30px;
}
`


export default function Nav(){
    return(
        <NavDiv>
            <a>Home</a>
            <a>About</a>
            <a>Projects</a>
            <a>Contact</a>
        </NavDiv>
    )
}