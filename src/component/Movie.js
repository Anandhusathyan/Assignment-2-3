import React,{useState,useEffect} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Nav from './Nav';
import { Pagination } from './pagination';

function Movie(){

    const [movie,setmovie]=useState("popularity.desc");
    const [allmovies,setallmovies] = useState([]);
    const [page,setpage]= useState(1);
    const [lastpage,setlastpage]= useState("")
    const [isLoading, setIsLoading] = useState(true);
    const [filterby, setfilterby] = useState("")
    

    useEffect(()=>{
        async function Booksapi(){

            try{
                let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${movie}`;
                const data = await axios.get(url)
                console.log(data);
                setallmovies(data.data.results)
                setlastpage(data.data.total_pages)
                setIsLoading(false) 
            }
            catch(error){

            }
        }
        Booksapi()
    },[page])

    function compareByPopularity(a, b) {
        return b.popularity - a.popularity;
      }

      function compareByRating(a, b) {
        return b.vote_average - a.vote_average;
      }  

      useEffect(() => {
        if (allmovies[0] && filterby === "popularity") {
            const sortedMovies = [...allmovies].sort(compareByPopularity);
            setallmovies(sortedMovies);
        } 
        else if (allmovies[0] && filterby === "rating") {
            const sortedMovies = [...allmovies].sort(compareByRating);
            setallmovies(sortedMovies);
        }
        console.log("filterby",filterby)
    }, [filterby]);

    useEffect(()=>{
        setpage(1);
    },[movie])
    

    return (
        <div>
          <Nav  setfilterby={setfilterby} />
          <MovieCard Movies={allmovies} isLoading={isLoading}/>
          <Pagination page={page} setpage={setpage} lastpage={lastpage}/>
        </div>
    )
}

export default Movie