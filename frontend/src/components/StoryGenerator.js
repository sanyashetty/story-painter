import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import AudioPlayer from './AudioPlayer';


const StoryGenerator = ({selectedGenre}) => {
    const [story, setStory] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showAudioPlayer, setShowAudioPlayer] = useState(false);
    
    const displayAudio = () => {
        setShowAudioPlayer(true);
    };
    
    const genre = selectedGenre;

    const fetchStory = async () => {
        setIsLoading(true);
        // const url = "http://localhost:3039/generate-story?genre=${genre}"
        try {
            // Adjust the endpoint as per your server configuration
            const response = await axios.get('http://localhost:3039/generate-story');
            setStory(response.data);
        } catch (error) {
            console.error('Error fetching story:', error);
            alert('Error fetching story');
        }
        setIsLoading(false);
    };

    return (
        <div>
            <button onClick={fetchStory} className="create-story-style">
                Generate Story!
            </button>
            {isLoading && <p>Loading story...</p>}
            {story && (
                <div>
                    <h2>Your Generated Story</h2>
                    <p>{story}</p>
                    <button onClick={displayAudio}>Play Audio</button>
                    {showAudioPlayer && <AudioPlayer fileName="Story-Time.mp3" />}
                </div>
            )}
        </div>
    );
};

export default StoryGenerator;