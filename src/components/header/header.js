import React from "react";
import  "./header.css"

function Header() {
    return (
        <header className="row pt-5 pb-0 topbar text-center">
        <div className="col-lg-5 col-md-12 pb-2 offset-lg-1">
            <a className="col-lg-1 col-md-12 titlename text-center">Devin Alexander</a>
            <a className="list-inline-item titlejob">| Full Stack Web Developer |</a>
        </div>
        <div className="col-lg-4 col-md-12 text-center pt-3 pb-1">
            <a className="px-3 pagelink">PORTFOLIO</a>
            <a className="px-3 pagelink">ABOUT</a>  
        </div>
    </header>
    );
  }
  
  export default Header;