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
            <p>Upload your own:</p>
            { <FileUploadComponent /> }
			<p>Select the genre that you want your story to be:</p>
			<GenreSelector></GenreSelector>
            <StoryGenerator />
		</div>
        
	);
};


export default HomeUpload;
