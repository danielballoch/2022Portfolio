import React, {useState, useEffect} from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image";

const NavDiv = styled.div`
.hide {
display: none;
}
z-index: 100;
@media(max-width: 900px){
            display: none;
}
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
justify-content: flex-end;
/* height: 400px; */
padding: 20px;
margin-bottom:20px;
.gatsby-image-wrapper {
    margin: 20px 0;
}
`


export default function Nav({showSocial}){
    console.log("side:",showSocial)
    return(
        <NavDiv>
            <a className={showSocial === false? "hide" : ""} href="https://github.com/danielballoch" target="_blank"><StaticImage width={50} src="../images/social/github-icon.png"/></a>
            <a className={showSocial === false? "hide" : ""} href="https://www.linkedin.com/in/danielpatrickballoch/" target="_blank"><StaticImage width={50} src="../images/social/linkedin-icon.png"/></a>
            {/* <a className={showSocial === false? "hide" : ""} href="https://dribbble.com/danielballoch" target="_blank"><StaticImage width={50} src="../images/social/dribbleiconRe.png"/></a> */}
        </NavDiv>
    )
}