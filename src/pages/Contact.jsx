import { useState } from "react"
import { validateEmail } from "../lib/validateEmail"

export default function Contact() {



    const [ nameField, setNameField ] = useState("")
    const [ emailField, setEmailField ] = useState("")
    const [ messageField, setMessageField ] = useState("")
    const [ errorMes, setErrorMes ] = useState("")


    function handleSubmit(event){
        event.preventDefault();

        if (!validateEmail(emailField) || emailField === ""){
            setErrorMes("Invalid email address.");
            return;
        }
        if (nameField === ""){
            setErrorMes("Name field is required.");
            return;
        }
        if (messageField === ""){
            setErrorMes("Message field is required.")
            return;
        }


        setNameField("");
        setEmailField("");
        setMessageField("");
        setErrorMes("")

    }


    function handleBlur(event){
        const { target } = event;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === "name"){
            if(inputValue === ""){
                setErrorMes("Name field is required.")
            }
        } else if(inputName === "email"){
            if(inputValue === ""){
                setErrorMes("Email field is required.")
            }
        } else {
            if(inputValue === ""){
                setErrorMes("Message field is required.")
            }
        }
    }



    function handleInputChange(event){
        const { target } = event;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === "name"){
            setNameField(inputValue)
        } else if(inputName === "email"){
            setEmailField(inputValue)
        } else {
            setMessageField(inputValue)
        }
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                   
                   <div className="row">
                        <h2>Contact</h2>
                   </div>

                   <div className="row">
                        <form className="">
                            <label>Name:</label>
                            <br />
                            <input type="text" name="name" value={nameField} onChange={handleInputChange} onBlur={handleBlur}style={{width: "350px"}}></input>
                            <br/>
                            <label>Email:</label>
                            <br />
                            <input type="text" name="email" value={emailField} onChange={handleInputChange} onBlur={handleBlur} style={{width: "350px"}}></input>
                            <br/>
                            <label>Message:</label>
                            <br />
                            <textarea type="text" name="message" value={messageField} onChange={handleInputChange} onBlur={handleBlur} style={{width: "350px", height: "150px"}}></textarea>
                            <br/>
                            <p style={{color: "red"}}>{errorMes}</p>
                            <br/>
                            <button type="button" onClick={handleSubmit}>Submit</button>
                        </form>
                   </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )

}