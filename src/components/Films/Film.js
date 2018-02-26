import React from 'react';
import './film.css'

const Film = ({film, selectedFilm, onClick, idx }) => {
  return (
    <div  onClick={() => onClick(idx)} className="film-card">
      <div className="img">
          {film.img  !== null && (<img src={film.img} alt="film"/>)}
      </div>
      <div className={selectedFilm && idx === selectedFilm.id ? 'selected' : 'unselected'}>
        <span>  <strong>Film: </strong> {film.name}</span> <br/>
        <span> <strong>Rating: </strong> {film.rating}</span> <br/>
        <span><strong>Description: </strong> {film.description}</span> &nbsp;
      </div>
    </div>
  )
};

export default Film;