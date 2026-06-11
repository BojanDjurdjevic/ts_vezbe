import type { ApiResponseErrorInterface } from "../interfaces/ApiResponseErrorInterface"
import type { ApiSuccessInterface } from "../interfaces/ApiSuccessInterface"
import { callApi } from "../services/apiService"
import { displaySearches, rememberMovieSearch } from "../store/movieStore"
import { listMovieResults } from "./movieElementHelper"

export async function mainSearch(name?: string, year?: string): Promise<void> {
  const mainDiv = document.querySelector("#app") as HTMLDivElement
  const searchForm = document.querySelector("#formDiv") as HTMLFormElement
  const displayDiv = document.querySelector("#resultDiv") as HTMLDivElement
  if(displayDiv) displayDiv.innerHTML = ''

  const movieInput = document.querySelector("#movieInput") as HTMLInputElement
  const yearSelect = document.querySelector("#yearSelect") as HTMLSelectElement

  if(name) movieInput.value = name
  if(year) yearSelect.value = year

  if(!movieInput.value) {
    alert("Please enter the movie title!")
    return
  }

  let response = await callApi([
    {key: "s", value: movieInput.value.trim()},
    {key: "y", value: yearSelect.value}
  ])

  console.log(response)

  if(response.data.Response === "False") {
    response = await callApi([
      {key: "s", value: movieInput.value.trim()}
    ])
  } 

  const successData = response.data as ApiSuccessInterface
  const errorData = response.data as ApiResponseErrorInterface
  
  if(errorData.Error) {
    if(displayDiv) displayDiv.innerText = 'There are no movies according to your search.'
    return
  } else {
    const oldDiv = document.querySelector("#existingsDiv") as HTMLElement
    oldDiv?.remove()
    rememberMovieSearch({name: movieInput.value.trim(), year: yearSelect.value}, mainDiv, searchForm)
  }

  listMovieResults(successData.Search, displayDiv)
  displaySearches(mainDiv, searchForm)
}