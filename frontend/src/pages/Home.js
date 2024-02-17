import React from "react";
import '../App.css';
import Canvas from '../components/Canvas'
import FileUploadComponent from "../components/FileUploadComponent"
import { Link } from "react-router-dom";

const Home = () => {

	return (
		<div className="container">
			<h1 className="title">Story Painter</h1>
			<p className="caption">
				From scribbles to stories...
			</p>
            { <Canvas className = "canvas"></Canvas> }
            { <FileUploadComponent /> }
            <Link to = "/StoryPage" className="create-story-style">Create Your Story!</Link>
		</div>
        
	);
};


export default Home;
