import { React } from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"

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
    return(
        <AboutDiv id="about">
            <div className="text-content">
                <h1>About Me</h1>
                <p>I first got interested in web design and development around 2018 and have been learning and freelancing as a secondary source of income since then.</p>
                <p>I've done websites for clients, under the name 'thoughtfulHQ', but have decided I want to find a front end development role in an already established business. This way I can commit to development full time, build my skills, and learn from like-minded people.</p>
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