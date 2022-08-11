import React, {useState, useEffect} from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled';
import {css} from '@emotion/react';

const NavDiv = styled.div`

.NavBar {
    z-index: 100;
    position: fixed;
    transform: translateY(-100px);
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transition: .3s;
}
.NavBarInner{
    width: 900px;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    a {
        padding: 30px;
        color: inherit;
        text-decoration: none;
    }
}

.Scroll {
    transform: translateY(0);
    background-color: rgba(255,255,255,0.98);
}
`


export default function Nav(){
    const [offset, setOffset] = useState(0)
    const [scrollUp, setScrollUp] = useState(true)

    useEffect(() => {
    if (typeof window !== `undefined`) {
        window.onscroll = () => {
            setOffset(window.scrollY);
        if (offset > window.scrollY && scrollUp !== true){
            console.log("hello1");
            setScrollUp(true);
        } else if (offset < window.scrollY && scrollUp !== false && window.scrollY > 100) {
            setScrollUp(false);     
            console.log("hello2");
        }
        }
    }
    }, [window.onscroll])
    console.log(scrollUp)
    return(
        <NavDiv >
            <div className={scrollUp? "NavBar Scroll" : "NavBar"}>
                <div className="NavBarInner">
                    <Link to="#hero">Home</Link>
                    <Link to="#about">About</Link>
                    <Link to="#projects">Projects</Link>
                    <Link to="#contact">Contact</Link>
                </div>
            </div>
        </NavDiv>
        
    )
}