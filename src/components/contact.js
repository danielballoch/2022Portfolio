import React, {useRef, useEffect, useState} from "react"
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";

const styles = (formSent) => css`
font-family: "Open Sans";
opacity: 0;
position: absolute;
background-color: white;
transition: height 1s,opacity 1s;
z-index: -100;
width: 960px;
height: 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 1024px) {
    width: 100%;
    
}
${formSent === true &&`
z-index: 500;
transition: height 0s,opacity 1s;
opacity: 0.9;
height: 700px;
@media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    }
`}
`

const ContactDiv = styled.div`
max-width: 800px;
background-color: white;
display: flex;
flex-direction: column;
margin-bottom: 200px;
.grecaptcha-badge {
    visibility: hidden;
}
.nzcheck {
    display: none;
}
h1 {
    padding: 0 20px;
    @media (max-width: 810px) {
    font-size: 50px;
    letter-spacing: 0;
    }

}
:first-of-type div {
    width: 100%;
    p {
        max-width: 250px;
    }
    ul {
        padding: 0;
        list-style: none;
    }
} 
.contact-text {
    padding: 0 20px;
}
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    p {
        margin-bottom: 2px;
    }

    label {
        margin: 10px 0;
        color: #707070;
        
    }
    textarea {
        padding: 16px !important;
    }
    textarea, input, button {
        border: 1px solid #e5e5e5;
        border-radius: 3px;
        padding: 0 16px;
        min-height: 40px;
        width: 100%;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    button {
            margin: 40px auto;
            padding: 10px 40px;
            width: 100%;
            font-size: 16px;
            background: none;
            border: solid black 1px;
            transition: .2s;
            :hover {
                cursor: pointer;
                border: solid #5ba6e4 1px;
                background-color: #5ba6e4;
                color: white;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px;
            }
    }
}

@media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    box-shadow: none;
    /* min-width: 360px; */
    border: none;
    justify-content: space-around;
    height: auto;
    :first-of-type div {
        max-width: 100%;
    }
}

`



const Contact = () => {
    const reRef = useRef();
    const [serverState, setServerState] = useState({
        formSent: false,
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      async function onSubmit(data){
        const token = await reRef.current.executeAsync();
        reRef.current.reset();
        fetch(`/api/sendgrid`, {
          method: `POST`,
          body: JSON.stringify({
            name: data.Name,
            phone: data.Phone,
            email: data.Email,
            message:data.Message,
            token
        }),
          headers: {
            "content-type": `application/json`,
          },
        })
          .then(res => res.json())
          .then(body => {
            console.log(`response from API:`, body);
          })
          .then(setServerState({formSent: true}))
      }
      console.log({ errors })
      useEffect(() => {
          if (serverState.formSent === true) {
            setTimeout(() => {
                setServerState({
                    formSent: false
                })
            }, 3000)
          }
      })
    return(
        <div style={{ display: "grid", width: "100%", }} id="contact" >
        <div
            style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
            width: "100%",
            }}
        >

        <ContactDiv
        // class={serverState.formSent ? "sent" : ""}
        >
        <ReCAPTCHA 
        sitekey={process.env.GATSBY_RE_SITEKEY} 
        size="invisible"
        ref={reRef} 
        />
            <span 
            css={styles(serverState.formSent)}
            >
                <h1>Message Sent</h1>
                <p>I'll be in touch shortly. Regards, Daniel.</p>
            </span>
            {/* <MobileId id="contactM"/> */}
            <h1 id="contactM">Contact</h1>
            <p className="contact-text">To get in touch email me at daniel@thoughtfulhq.com, call (+64) 22 078 0868, or fill out the form below.</p>
            <div>
                <form 
                onSubmit={handleSubmit(onSubmit)}
                id="main-form"
                // action="/api/sendgrid" method="POST"
                >
                    <input type="checkbox" name="NZ" value="1"  className="nzcheck" tabindex="-1" autocomplete="off" {...register("NZ")}/>
                    <label htmlFor="name">
                            <p>Name:</p>
                            <input 
                                type="text" 
                                name="name" 
                                required  
                                {...register("Name", { required: true, maxLength: 100 })} 
                            />
                    </label>
                    
                    <label htmlFor="phone">
                        <p>Phone:</p>
                        <input 
                            type="phone" 
                            name="phone" 
                            required
                            {...register("Phone", { required: true})}
                        />
                    </label>
                    <label htmlFor="email">
                        <p>Email:</p>
                        <input 
                            type="email" 
                            name="email" 
                            required
                            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                        />
                    </label>
                    <label htmlFor="message">
                        <p>Message:</p>
                        
                        <textarea 
                            name="message" 
                            id="message" 
                            rows="5" 
                            required
                            {...register("Message", { required: true, maxLength: 2000 })} 
                        />
                    </label>
                    <input type="checkbox" name="fax" value="1"  className="nzcheck" tabindex="-1" autocomplete="off" {...register("Fax")}/>
                    <button
                        type="submit" 
                        class="g-recaptcha"
                        data-sitekey="site_key"
                        data-callback='onSubmit'
                        data-action='submit'
                    ><b>Send Message</b></button>
                    
                </form>
                
            </div>
            
        </ContactDiv>
        </div>
        </div>
    )
    
}

export default Contact;