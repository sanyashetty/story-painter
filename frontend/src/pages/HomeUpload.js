import React, {useState} from "react";
import '../App.css';
import Canvas from '../components/Canvas'
import FileUploadComponent from "../components/FileUploadComponent"
import StoryGenerator from "../components/StoryGenerator";
import GenreSelector from "../components/GenreSelector";
import AudioPlayer from '../components/AudioPlayer';

const HomeUpload = () => {
	const [selectedGenre, setSelectedGenre] = useState('');

	return (
		<div className="container">
			<h1 className="title">Story Painter</h1>
            <p>Upload your own:</p>
            { <FileUploadComponent /> }
			<p>Select the genre that you want your story to be:</p>
			<GenreSelector setSelectedGenre={setSelectedGenre} selectedGenre={selectedGenre}></GenreSelector>
            <StoryGenerator selectedGenre = {selectedGenre}/>
		</div>
        
	);
};


export default HomeUpload;
