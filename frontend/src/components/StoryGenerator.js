import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';


const StoryGenerator = () => {
    const [story, setStory] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchStory = async () => {
        setIsLoading(true);
        try {
            // Adjust the endpoint as per your server configuration
            const response = await axios.get('http://localhost:3034/generate-story');
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
                </div>
            )}
        </div>
    );
};

export default StoryGenerator;