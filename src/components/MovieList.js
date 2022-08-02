import React from 'react'
import Movie from './Movie'

const MovieList = ({movies}) => {
    
    const movieNodes = movies.map((movie) => <Movie key={movie.id} url={movie.url} name={movie.name}></Movie> )
    return(
        <ul>
            {movieNodes}
        </ul>
        
    )
}

export default MovieList;