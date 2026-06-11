import { mainSearch } from "../helpers/searchHelper";
import type { SingleMovieSearch } from "../interfaces/movieStore/SingleMovieSearch";


export function rememberMovieSearch(movie: SingleMovieSearch, toDiv: HTMLElement, beforeDiv: HTMLElement): void {
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

    displaySearches(toDiv, beforeDiv)
}

export function getAllMovieSearches(): SingleMovieSearch[] {
    const data = localStorage.getItem("rememmberedMovies")

    console.log(data)

    return data ? JSON.parse(data) : []
}

export function clearAllMovieSearch(): void {
    localStorage.removeItem("rememmberedMovies")
}

export function displaySearches(toDiv: HTMLElement, beforeDiv: HTMLElement) {
    const existingMovies: SingleMovieSearch[] = getAllMovieSearches()

    if(existingMovies.length) {
        const existingMoviesDiv = document.createElement('div')
        existingMoviesDiv.id = 'existingsDiv'
        
        existingMovies.forEach((movie: SingleMovieSearch) => {
            const oneMovieDiv = document.createElement('div')
            oneMovieDiv.id = 'oneExist'
            oneMovieDiv.textContent = `${movie.name}, ${movie.year}`

            oneMovieDiv.addEventListener("click", () => {
                mainSearch(movie.name, movie.year)
            })

            existingMoviesDiv.append(oneMovieDiv)
        })
        
        const clearSearchBtn = document.createElement('button')
        clearSearchBtn.id = 'clearBtn'
        clearSearchBtn.textContent = 'Clear searches'
        existingMoviesDiv.appendChild(clearSearchBtn)

        clearSearchBtn.addEventListener('click', () => {
            clearAllMovieSearch()
            existingMoviesDiv.remove()
        })
        
        toDiv?.insertBefore(existingMoviesDiv, beforeDiv)
    }
}