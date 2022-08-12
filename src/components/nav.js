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
    
    @media(max-width: 900px){
        a {
            display: none;
        }
        
    }
    margin: auto;
    display: flex;
    justify-content: flex-end;
    max-width: 900px;
    a {
        padding: 30px;
        color: inherit;
        text-decoration: none;
    }
}

.Scroll {
    transform: translateY(0);
    @media(min-width: 900px){
        background-color: rgba(255,255,255,0.98);
    }
}



.hamburger-box {
    z-index: 120;
    @media(min-width: 900px){
            display: none;
    }
    background: none;
    border: none;
    margin: 20px;
    width: 52px;
    height: 40px;
    display: inline-block;
    position: relative;
}
.hamburger-inner {
        display: block;
        top: 70%;
        ${'' /* margin-top: 4px; */}
        width: 40px;
        height: 3px;
        background-color: #000;
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;

        transition-duration: 0.075s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);    
}
.hamburger-inner:after {
        transition: bottom 0.075s 0.12s ease,
        transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        content: "";
        left: 0;
        bottom: 10px;
        width: 40px;
        height: 3px;
        background-color: #000;
        border-radius: 4px;
        position: absolute;
}
.hamburger-inner-active {
        top: 50%;
        transform: rotate(45deg);
        ${'' /* transition-delay: 0.12s; */}
        transition: top 0.075s ease,
        transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        ${'' /* transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); */}
      } 
.hamburger-inner-active::after {
    content: "";
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.075s ease,
    transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.draw {
    transition: .3s;
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: white;
    width: 70%;
    /* height: calc(100vh - 80px); */
    height: 100vh;
    margin-top: -80px;
    z-index: 20;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateX(0);
    a {
        color: black;
        font-size: 30px;
        text-decoration: none;
        padding: 20px;
        margin: 0 auto;
    }
}
.draw-closed {
    transform: translateX(100%);
}
.backdrop {
    transition: .3s;
    margin-top: -80px;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.3);
}
.backdrop-closed {
    display: none;
    width: 0%;
    background-color: black;
}

`


export default function Nav(){
    const [offset, setOffset] = useState(0);
    const [scrollUp, setScrollUp] = useState(true);
    const [MenuOpen, setMenuOpen] = useState(false);
    if (typeof window !== `undefined`) {
        useEffect(() => {
        if (typeof window !== `undefined`) {
            window.onscroll = () => {
                setOffset(window.scrollY);
            if (offset > window.scrollY && scrollUp !== true){
                console.log("hello1");
                setScrollUp(true);
            } else if (offset < window.scrollY && scrollUp !== false && window.scrollY > 100 && !MenuOpen) {
                setScrollUp(false);     
                console.log("hello2");
            }
            }
        }
        }, [window.onscroll])
    }
    console.log(scrollUp)
    return(
        <NavDiv >
            <div className={scrollUp? "NavBar Scroll" : "NavBar"}>
                <div className="NavBarInner">
                    <Link to="/#home">Home</Link>
                    <Link to="/#about">About</Link>
                    <Link to="/#projects">Projects</Link>
                    <Link to="/#contact">Contact</Link>
                    <button className={MenuOpen ? "hamburger-box menu" : "hamburger-box no-menu"} onClick={() => setMenuOpen(!MenuOpen)} aria-label="Navigation menu toggle">
                            <span className={MenuOpen? "hamburger-inner hamburger-inner-active" : "hamburger-inner"}></span>
                    </button>
                </div>
                <div className={MenuOpen? "draw" : "draw draw-closed"}>
                    <Link to="/#home" onClick={() => setMenuOpen(!MenuOpen)}>Home</Link>
                    <Link to="/#about" onClick={() => setMenuOpen(!MenuOpen)}>About</Link>
                    <Link to="/#projects" onClick={() => setMenuOpen(!MenuOpen)}>Projects</Link>
                    <Link to="/#contact" onClick={() => setMenuOpen(!MenuOpen)}>Contact</Link>
                </div>
                <div className={MenuOpen? "backdrop" : "backdrop backdrop-closed"} onClick={() => setMenuOpen(!MenuOpen)}/>
            </div>
        </NavDiv>
        
    )
}