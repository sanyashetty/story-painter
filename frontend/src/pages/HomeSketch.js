import React, {useState} from "react";
import '../App.css';
import Canvas from '../components/Canvas'
import StoryGenerator from "../components/StoryGenerator";
import GenreSelector from "../components/GenreSelector";

const HomeUpload = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
	return (
		<div className="container">
			<h1 className="title">Story Painter</h1>
            { <Canvas className = "canvas"></Canvas> }
            <p className="genre-bar-text">Select what genre of story you would like:</p>
            <GenreSelector setSelectedGenre = {setSelectedGenre} selectedGenre = {selectedGenre}></GenreSelector>
            <StoryGenerator />
		</div>
        
	);
};


export default HomeUpload;
