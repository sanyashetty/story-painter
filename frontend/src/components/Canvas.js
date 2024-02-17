import React, { useState, useRef, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import '../App.css';
import axios from 'axios';


export default function Canvas() {
    const [color, setColor] = useState("#000000");
    const [radius, setRadius] = useState(2);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current.canvas.drawing;
            // const ctx = canvas.getContext('2d');
            const ctx = canvasRef.current.canvasContainer.children[1].getContext('2d');
           
            // Draw a white rectangle covering the entire canvas
            ctx.fillStyle = '#FFFFFF'; // Set fill color to white
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }, [canvasRef]);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleRadiusChange = (event) => {
        setRadius(event.target.value);
    };

    const clearCanvas = () => {
        canvasRef.current.clear();
    };

    const undoLast = () => {
        canvasRef.current.undo();
    };
    

    async function saveImage() {
        if (!canvasRef.current) return;
    
        let imageUrl = canvasRef.current.canvasContainer.children[1].toDataURL('image/jpeg');

        // Convert the data URL to a Blob (which can be treated as a File)
        const res = await fetch(imageUrl);
        const image = await res.blob();
    
        // Use Axios to send a POST request

        const formData = new FormData();

        formData.append('image', image, 'canvas-image.jpeg');

        try {
            const res = await axios.post('http://localhost:3039/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res.data)
            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error during file upload:', error);
            alert('Error uploading file');
        }
    };
        
    

    return (
        <div className = "canvas-container">
            <div className="canvas">
            <CanvasDraw
                ref={canvasRef}
                brushColor={color}
                canvasWidth={800}
                canvasHeight={400}
                brushRadius={radius}
                lazyRadius={0}
                style={{ border: '2px solid #000' }}
                hideGrid={true}
            />

            </div>
            <div>
                <input type="color" value={color} onChange={handleColorChange} />
                <input type="range" min="1" max="10" value={radius} onChange={handleRadiusChange} />
                <button className = "button" onClick={() => setColor("#FFFFFF")}>Eraser</button>
                <button className = "button" onClick={clearCanvas}>Clear</button>
                <button className = "button" onClick={undoLast}>Undo</button>
                <button onClick={saveImage} className="saveButton">Save Drawing</button>  
            </div>
        </div>
    );
}
