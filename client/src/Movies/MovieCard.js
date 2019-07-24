import React from "react";

const MovieCard = props => {
  const { movie, saveMovie, location } = props;
  const { title, director, metascore, stars } = movie;
  // console.log(movie);
  // console.log(location);

  if (location !== undefined) {
    return (
      <div className="save-wrapper">
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>

        <div className="save-button" onClick={saveMovie}>
          Save
        </div>
      </div>
    );
  } else {
    return (
      <div className="save-wrapper">
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieCard;
