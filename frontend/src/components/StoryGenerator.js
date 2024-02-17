import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import AudioPlayer from './AudioPlayer';


const StoryGenerator = ({selectedGenre}) => {
    const [fullStory, setFullStory] = useState('');
    const [displayedStory, setDisplayedStory] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showAudioPlayer, setShowAudioPlayer] = useState(false);

    useEffect(() => {
        if (fullStory) {
            setDisplayedStory(fullStory.charAt(0));
            let index = 1;
            const timer = setInterval(() => {
                if (index < fullStory.length) {
                    setDisplayedStory(prev => prev + fullStory.charAt(index));
                    index++;
                } else {
                    clearInterval(timer);
                }
             }, 50);
            
            return () => clearInterval(timer);

        }
    }, [fullStory]);
    
    const displayAudio = () => {
        setShowAudioPlayer(true);
    };
    
    const genre = selectedGenre;
    console.log(genre);

    const fetchStory = async () => {
        setIsLoading(true);
        const url = `http://localhost:3039/generate-story?genre=${genre}`;
        try {
            // Adjust the endpoint as per your server configuration
            const response = await axios.get(url);
            setFullStory(response.data);
        } catch (error) {
            console.error('Error fetching story:', error);
            alert('Error fetching story');
        }
        setIsLoading(false);
    };

    return (
        <div>
            <button className = 'generate-button' onClick={fetchStory}>
                Generate Story!
            </button>
            {isLoading && <p>Loading story...</p>}
            {displayedStory && (
                <div>
                    <h2>Your Generated Story</h2>
                    <p className = 'story-box'>{displayedStory}</p>
                    <button onClick={displayAudio}>Play Audio</button>
                    {showAudioPlayer && <AudioPlayer fileName="Story-Time.mp3" />}
                </div>
            )}
        </div>
    );
};

export default StoryGenerator;