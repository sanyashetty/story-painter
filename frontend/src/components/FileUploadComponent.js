import React, { useState } from 'react';
import axios from 'axios';

const FileUploadComponent = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {

        event.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error during file upload:', error);
            alert('Error uploading file');
        }
    };

    return (
        <form>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    );
};
export default FileUploadComponent;
