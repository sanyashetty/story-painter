import React, { useState, useRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import '../App.css';
import axios from 'axios';

export default function Canvas() {
    const [color, setColor] = useState("#000000");
    const [radius, setRadius] = useState(2);
    const canvasRef = useRef(null);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleRadiusChange = (event) => {
        setRadius(event.target.value);
    };

    const clearCanvas = () => {
        canvasRef.current.clearCanvas();
    };

    const undoLast = () => {
        canvasRef.current.undo();
    };

    async function saveImage() {
        if (!canvasRef.current) return;

        canvasRef.current.exportImage('png').then(async (imageUrl) => {
            // Convert the data URL to a Blob (which can be treated as a File)
            const res = await fetch(imageUrl);
            const image = await res.blob();

            // Use Axios to send a POST request
            const formData = new FormData();
            formData.append('image', image, 'canvas-image.png');

            try {
                const res = await axios.post('http://localhost:3039/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log(res.data);
                alert('File uploaded successfully');
            } catch (error) {
                console.error('Error during file upload:', error);
                alert('Error uploading file');
            }
        });
    };

    return (
        <div className="canvas-container">
            <h2 className = "sketch-title">Draw your own adventure!</h2>
            <div className = "canvas-plus-buttons">
                <div className="canvas">
                    <ReactSketchCanvas
                        ref={canvasRef}
                        strokeColor={color}
                        strokeWidth={radius}
                        width="800px"
                        height="400px"
                        style={{ border: '2px solid #000' }}
                    />
                </div>
                <div className = "button-container">
                    <input type="color" value={color} onChange={handleColorChange} />
                    <input type="range" min="1" max="10" value={radius} onChange={handleRadiusChange} />
                    <button className="button" onClick={() => setColor("#FFFFFF")}>Eraser</button>
                    <button className="button" onClick={clearCanvas}>Clear</button>
                    <button className="button" onClick={undoLast}>Undo</button>
                </div>
            </div>
            <button onClick={saveImage} className="saveButton">Save Drawing</button>  

        </div>
    );
}
