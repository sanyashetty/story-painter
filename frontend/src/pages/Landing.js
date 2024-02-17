import React from "react";
import '../App.css';
import {Link} from "react-router-dom"

const Landing = () => {


    return (
        <div className="container">
            <h1 className="title-landing">Story Painter</h1>
            <p className="caption-landing">
                From scribbles to stories...
            </p>
            <div>
            <div className ="button-container">
                <Link
                        to="/sketch"
                    >
                    <button className = "button-landing" >Sketch an image</button>
                </Link>
                <Link
                        to="/upload"
                    >
                    <button className = "button-landing" >Upload an image</button>
                </Link>
            </div>
            </div>
            
        </div>
    );
};


export default Landing;

