import React from 'react';
import Film from './Film'

const FilmsList = ({films, selectedFilm, onClick }) => {
  return (
      <div>
        {
          films.map((film, idx) => (
             <Film key={idx}
                   film={film}
                   idx={idx}
                   selectedFilm={selectedFilm}
                   onClick={onClick}
             />
          ))
        }
      </div>
  )
};

export default FilmsList;



