import React from 'react'
import '../style/card.css';

function MovieCard({Movies,isLoading}) {


  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div id="section2">
        {console.log(Movies)}
       { Movies[0]? Movies.map((film,index)=>
       <div id="img" key={index}>

            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="img" height="300px"/>

            <div id="details">
                <h3>{film.original_title}</h3>
                <span id="rating">{film.vote_average}</span>
            </div>

            <div id="release">
                <h4>{formatDate(film.release_date)}</h4>
            </div>

            <div id='overview'>{film.overview}</div>

        </div>):(
      
      isLoading ? 
        <div>
            <h3> Loading movies...</h3> 
        </div> :
        <div>
            <h3> NO MOVIES FOUND</h3> 
        </div>)
        
      
        }  
        
    </div>
  )
}

export default MovieCard
