

export function generateYears(from: number, selectEl: HTMLSelectElement): void {
    const currentYear = new Date().getFullYear()

    const defaultOption = document.createElement('option')

    defaultOption.value = ''
    defaultOption.textContent = 'Select year'
    defaultOption.selected = true

    selectEl.appendChild(defaultOption)

    for(let i = from; i <= currentYear; i++) {
        const option = document.createElement('option')

        option.value = i.toString()
        option.textContent = i.toString()

        selectEl.appendChild(option)
    } 
}