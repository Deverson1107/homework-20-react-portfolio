import React from "react";
import "./contact.css";


function Contact() {

    function submitting () {
        var x = document.getElementById("snackbar");
        var name = document.getElementById("nameinput");
        var email = document.getElementById("emailinput");
        var content = document.getElementById("contentinput");
        name.value = '';
        email.value = '';
        content.value = '';
        x.className = "show";
        setTimeout(function() {
          x.className = x.className.replace("show", "");
        }, 3000);
    }

    return (
        <div>
            <div className="row px-4 mb-4 topic">
                <h3 className="pt-4 pb-3 ml-5">CONTACT</h3>
            </div> 

            <div id="snackbar">Thanks for reaching out!</div>

            <div className="row my-2 offset-2">
                <h5 className="mr-3">Name</h5>
                <input className= "col-3-desktop col-5-mobile px-1 border border-secondary" 
                placeholder="Jane Smith" id="nameinput" cols="100"></input>
            </div>
            <div className="row my-2 offset-2">
                <h5 className="mr-3">Email</h5>
                <input className= "col-3-desktop col-5-mobile px-1 border border-secondary" 
                placeholder="Example@mail.com" id="emailinput" cols="100"></input>
            </div>

            <div className="row my-2 justify-content-center">
                <textarea className="border col-8 border-secondary pt-1" 
                placeholder="Messages will be sent to alexanderdev117@gmail.com. &#10;Addtionally you can reach out to me on Linkedin (see below)." 
                id="contentinput" cols="130" rows="10"></textarea>
            </div>

            <div className="row my-2 justify-content-center">
                <button className="text-center mb-4 subbtn" onClick={submitting}>Submit</button>
            </div>
        </div>   
    );
}

export default Contact;