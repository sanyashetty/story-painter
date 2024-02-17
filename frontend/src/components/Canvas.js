import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import '../App.css';

export default function Canvas() {
    const [color, setColor] = useState("#000000");
    const canvasRef = useRef(null);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const clearCanvas = () => {
        canvasRef.current.clear();
    };

    const undoLast = () => {
        canvasRef.current.undo();
    };

    function saveImage() {
        if (!canvasRef.current) return;

        const image = canvasRef.current.canvasContainer.children[1].toDataURL();
        const link = document.createElement('a');
        link.download = 'my-drawing.png';
        link.href = image;
        link.click();
    }

    return (
        <div>
            <div className="canvas">
                <CanvasDraw
                    ref={canvasRef}
                    brushColor={color}
                    canvasWidth={800}
                    canvasHeight={400}
                    brushRadius={2}
                    lazyRadius={0}
                    style={{ border: '2px solid #000' }}
                    hideGrid={true}
                />
            </div>
            <div>
                <input type="color" value={color} onChange={handleColorChange} />
                <button onClick={() => setColor("#FFFFFF")}>Eraser</button>
                <button onClick={clearCanvas}>Clear</button>
                <button onClick={undoLast}>Undo</button>
            </div>
            <button onClick={saveImage}>Save Drawing</button>
        </div>
    );
}
