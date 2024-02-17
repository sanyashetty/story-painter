import React, { useState, useEffect } from "react";
import '../App.css';
import {Link} from "react-router-dom"

const Landing = () => {
    const fullText = "Frrom scribbles to stories...";
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100); // Adjust the speed as needed

        return () => clearInterval(timer);
    }, [fullText]);


    return (
        <div className="container">
            <h1 className="title-landing">Story Painter</h1>
            <p className="caption-landing typewriter">
                {displayedText}
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

