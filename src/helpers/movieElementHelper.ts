import type { SingleMovieInterface } from "../interfaces/singleMovieInterface";


export function listMovieResults(movies: SingleMovieInterface[], parent: HTMLDivElement | null) {
    movies.forEach(movie => {
      const movieDiv = document.createElement('div')
      const title = document.createElement('h3')
      title.textContent = movie.Title
      const desc = document.createElement('p')
      desc.textContent = movie.Year  
      const poster = document.createElement('img')
      poster.src = movie.Poster
      /*
      movieDiv.appendChild(title)
      movieDiv.appendChild(desc) */

      movieDiv.append(title, poster, desc)

      parent?.appendChild(movieDiv)
  });
}