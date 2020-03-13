import React from "react";
import "./footer.css";
import githubIcon from "./github-icon.jpg";
import linkedinIcon from "./linkedin-icon.jpg";

function Footer() {
    return (
        <footer className="row pt-2 pb-4 foot justify-content-center">
            <div className="mr-3 name">Devin Alexander</div>
            <a href="https://github.com/Deverson1107">
                <img className="linkicon mr-3" title="Github Profile" src={githubIcon}/>
            </a>
            <a href="https://www.linkedin.com/in/devin-alexander-850189193/">
                <img className="linkicon" title="Linkedin Profile" src={linkedinIcon}/>
            </a>
        </footer>
    );
  }

export default Footer;