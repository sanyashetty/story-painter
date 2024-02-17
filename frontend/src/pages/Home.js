import React from "react";
import '../App.css';
import Canvas from '../components/Canvas'
import FileUploadComponent from "../components/FileUploadComponent"
import StoryGenerator from "../components/StoryGenerator";

const Home = () => {

	return (
		<div className="container">
			<h1 className="title">Story Painter</h1>
			<p className="caption">
				From scribbles to stories...
			</p>
            <p>Draw Your Own Adventure!</p>
            { <Canvas className = "canvas"></Canvas> }
            <p>or...</p>
            <p>Upload your own:</p>
            { <FileUploadComponent /> }
            <StoryGenerator />
		</div>
        
	);
};


export default Home;
