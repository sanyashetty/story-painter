import React, { useState } from 'react';
import '../App.css'; // Assuming your styles are in App.css

const GenreSelector= ({selectedGenre, setSelectedGenre}) => {
//   const [selectedGenre, setSelectedGenre] = useState('');

  const handleButtonClick = (genre) => {
    setSelectedGenre(genre);
  };

  console.log(selectedGenre, setSelectedGenre);

  return (
    <div className="genre-options">
      <button
        className={`button ${selectedGenre === "Children's" ? 'selected' : ''}`}
        onClick={() => handleButtonClick("Children's")}
      >
        Children's
      </button>
      <button
        className={`button ${selectedGenre === "Action and Adventure" ? 'selected' : ''}`}
        onClick={() => handleButtonClick("Action and Adventure")}
      >
        Action and Adventure
      </button>
      <button
        className={`button ${selectedGenre === "Comedy" ? 'selected' : ''}`}
        onClick={() => handleButtonClick("Comedy")}
      >
        Comedy
      </button>
      <button
        className={`button ${selectedGenre === "Crime and Mystery" ? 'selected' : ''}`}
        onClick={() => handleButtonClick("Crime and Mystery")}
      >
        Crime and Mystery
      </button>
      <button
        className={`button ${selectedGenre === "Fantasy" ? 'selected' : ''}`}
        onClick={() => handleButtonClick("Fantasy")}
      >
        Fantasy
      </button>
      <button
        className={`button ${selectedGenre === "Horror" ? 'selected' : ''}`}
        onClick={() => handleButtonClick("Horror")}
      >
        Horror
      </button>
      <button
        className={`button ${selectedGenre === "Sci-Fi" ? 'selected' : ''}`}
        onClick={() => handleButtonClick("Sci-Fi")}
      >
        Sci-Fi
      </button>
      <button
        className={`button ${selectedGenre === "Romance" ? 'selected' : ''}`}
        onClick={() => handleButtonClick("Romance")}
      >
        Romance
      </button>
    </div>
  );
};

export default GenreSelector;

