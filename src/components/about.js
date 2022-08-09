import { React } from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"

const AboutDiv = styled.div`
display: flex; 
flex-direction: row;
justify-content: center;
align-items: center;
p {
    max-width: 600px;
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
        <AboutDiv>
            <div className="text-content">
                <h1>About Me</h1>
                <p>I've been interested in web design and development since 2018, and have been learning on and off, along side full time jobs, since then.</p>
                <p>These past couple years I've transitioned to a semi-part time job and got my first few paid freelance jobs, under the name 'thoughtfulHQ', but have decided I want to find a junior role/front end development role in an already established business. This way I can commit to development full time, learn from like-minded people, and make a real career out of it. </p>
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
            <div>
                <StaticImage src="../images/tongareroCrossing.jpg" alt="Daniel Balloch on top of Togariro Crossing" width={450}/>
            </div>
        </AboutDiv>
    )
}