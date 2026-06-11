import './style.css' 
import { generateYears } from "./helpers/yearGeneratorHelper"
import { displaySearches } from "./store/movieStore"
import { mainSearch } from './helpers/searchHelper'

const appDiv = document.querySelector<HTMLDivElement>('#app') as HTMLDivElement

const formDiv = document.createElement('div')
formDiv.id = 'formDiv'

const movieInput = document.createElement('input')
movieInput.placeholder = 'Movie title'
movieInput.type = 'text'
movieInput.id = 'movieInput'

const yearSelect = document.createElement('select')
yearSelect.id = 'yearSelect'
generateYears(1960, yearSelect)

const submitBtn = document.createElement('button')
submitBtn.textContent = 'Search'
submitBtn.type = 'button'
submitBtn.id = 'submitBtn'

const resultDiv = document.createElement('div')
resultDiv.id = 'resultDiv'

formDiv.appendChild(movieInput)
formDiv.appendChild(yearSelect)
formDiv.appendChild(submitBtn)

appDiv?.append(formDiv, resultDiv)

displaySearches(appDiv, formDiv)

submitBtn.addEventListener('click', async () => {
  mainSearch()
})