import React from "react";
import '../App.css';
import Canvas from '../components/Canvas'
import FileUploadComponent from "../components/FileUploadComponent"
import StoryGenerator from "../components/StoryGenerator";
import GenreSelector from "../components/GenreSelector";

const HomeUpload = () => {

	return (
		<div className="container">
			<h1 className="title">Story Painter</h1>
            <p>Draw Your Own Adventure!</p>
            { <Canvas className = "canvas"></Canvas> }
            <p>Select the genre that you want your story to be:</p>
            <GenreSelector></GenreSelector>
            <StoryGenerator />
		</div>
        
	);
};


export default HomeUpload;