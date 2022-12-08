import { React, useState, useEffect, useLayoutEffect, useRef } from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"

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
.box {
    margin: 30px;
    background-color: red;
    width: 40px;
    height: 40px;
}
.circle {
    margin: 30px;
    background-color: blue;
    width: 40px;
    height: 40px;
    border-radius: 100px;
}
`
const techlist1 = ["Adobe XD", "CSS", "React", "Next.js"]
const techlist2 = ["HTML", "JavaScript", "Gatsby.js", "Node.js","TypeScript"]

// const Box = ({ children, className, anim }) => {
//     return <div className={"box " + className } data-animate={ anim }>{children}</div>;
//   };
//   const Circle = ({ children, className, anim }) => {
//     return <div className={"circle " + className } data-animate={ anim }>{children}</div>;
//   };

export default function About (){
    // const [reversed, setReversed] = useState(false);
    // const app = useRef();
    // const tl = useRef();
  
    // useLayoutEffect(() => {
    //   const ctx = gsap.context(() => {
    //     console.log("creating timeline");
    //     tl.current && tl.current.progress(0).kill();
    //     tl.current = gsap.timeline()
    //       .to(".box", {rotate: 360})
    //       .to(".circle", {x: 100});
    //   }, app);
    // }, []);

    // useEffect(() => {
    //     // toggle the direction of our timeline
    //     console.log("toggling reverse to", reversed);
    //     tl.current.reversed(reversed);    
    //   }, [reversed]);

    return(
        <AboutDiv id="about">
            {/* <div className="app" ref={app}>
                <button onClick={() => setReversed(!reversed)}>Toggle</button>
                <Box/>
                <Circle/>
            </div> */}
            <div className="text-content" >
                <h1>About Me</h1>
                <p>I first got interested in web design and development around 2018 and have been learning and freelancing as a secondary source of income since then.</p>
                <p>I've made websites for clients under the name 'thoughtfulHQ' and written small bits of code contracting to other agencies, but have decided I want to find a front end development role in an already established business. This way I can commit to development full time, build my skills, and learn from like-minded people.</p>
                <p>Technologies I've been working with:</p>
                <div className="tech"> 
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
            <div className="image-div">
                <StaticImage src="../images/tongareroCrossing.jpg" alt="Daniel Balloch on top of Togariro Crossing" width={450}/>
            </div>
        </AboutDiv>
    )
}