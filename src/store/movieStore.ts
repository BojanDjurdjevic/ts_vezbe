import type { SingleMovieSearch } from "../interfaces/movieStore/SingleMovieSearch";


export function rememberMovieSearch(movie: SingleMovieSearch): void {
    const existingMovies = getAllMovieSearches()
    /*
    let sum = 0
    existingMovies.forEach(item => {
        console.log(item, ": ", movie)
        if(item.name == movie.name) sum++;
    }) 

    if(sum > 0) return; */

    const alreadyExists: boolean = existingMovies.some((m: SingleMovieSearch)=> 
        m.name.toLowerCase() === movie.name.toLowerCase() && m.year === movie.year
    )

    if(alreadyExists) return;

    existingMovies.push(movie)

    localStorage.setItem("rememmberedMovies", JSON.stringify(existingMovies))
}

export function getAllMovieSearches(): SingleMovieSearch[] {
    const data = localStorage.getItem("rememmberedMovies")

    console.log(data)

    return data ? JSON.parse(data) : []
}