import { React, useState, useEffect, useLayoutEffect, useRef } from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const AboutDiv = styled.div`
@media(max-width: 900px){
    flex-direction: column-reverse;
    .text-content {
        align-items: flex-start !important;
        text-align: left !important;
    }
    
}
display: flex; 
flex-direction: row;
justify-content: center;
align-items: center;
p {
    max-width: 500px;
}
.image-div {
    padding: 20px;
}
.text-content {
    display: flex; 
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    padding: 20px;
}
.arrow {
  margin: 0 10px;
  width: 0 !important; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid black;
  transform:scale(.6) ;
}
.tech {
    display: flex;
    align-items: flex-start;
}
.row {

}
.item {
    display: flex;
    align-items: center;
}
img {
    border-radius: 20px;

}
`
const techlist1 = ["Adobe XD", "CSS", "React", "Next.js"]
const techlist2 = ["HTML", "JavaScript", "Gatsby.js", "Node.js","TypeScript"]

export default function About (){
        gsap.registerPlugin(ScrollTrigger);
        const ref = useRef(null);
        useEffect(() => {
          const element = ref.current;
          let scrollT = {
            trigger: element.querySelector(".first"),
            start: "top top",
            end: "+=800",
            scrub: true,
            delay: .3
          };
          gsap.fromTo(element.querySelector(".first-paragraph"),{opacity: 0, x: -200,},{opacity: 1, x: 0, scrollTrigger: scrollT});
          gsap.fromTo(element.querySelector(".second-paragraph"),{opacity: 0, x: -300,},{opacity: 1, x: 0, scrollTrigger: scrollT});
          gsap.fromTo(element.querySelector(".third-paragraph"),{opacity: 0, x: -500,},{opacity: 1, x: 0, scrollTrigger: scrollT});
          gsap.fromTo(element.querySelector(".forth-paragraph"),{opacity: 0, x: -900,},{opacity: 1, x: 0, scrollTrigger: scrollT});
          gsap.fromTo(element.querySelector(".fith-paragraph"),{opacity: 0, x: -1400,},{opacity: 1, x: 0, scrollTrigger: scrollT});
          gsap.fromTo(
            element.querySelector("#gsap-logo"),{
                opacity: 0, y: +100},{
                opacity: 1, y: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".first"),
                    start: "#gsap-logo",
                    end: "+=800",
                    scrub: true
                    }
            }
          );
        }, []);
    return(
        <AboutDiv id="about" ref={ref} className="first">
            <div className="text-content " >
                <h1 className="first-paragraph">About Me</h1>
                <p className="second-paragraph">I first got interested in web design and development around 2018 and have been learning and freelancing as a secondary source of income since then.</p>
                <p className="third-paragraph">I've made websites for clients under the name 'thoughtfulHQ' and written small bits of code contracting to other agencies, but have decided I want to find a front end development role in an already established business. This way I can commit to development full time, build my skills, and learn from like-minded people.</p>
                <p className="forth-paragraph">Technologies I've been working with:</p>
                <div className="tech fith-paragraph"> 
                    <div className="row">
                       {techlist1.map((item) => 
                        <div className="item"><div className="arrow"/>{item}</div>
                       )}
                    </div>
                    <div className="row">
                       {techlist2.map((item) => 
                        <div className="item"><div className="arrow"/>{item}</div>
                       )}
                    </div>
                    
                </div>
            </div>
            <div className="image-div" id="gsap-logo">
                <StaticImage src="../images/tongareroCrossing.jpg" alt="Daniel Balloch on top of Togariro Crossing" width={450}/>
            </div>
        </AboutDiv>
    )
}