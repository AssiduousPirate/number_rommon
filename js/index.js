document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('#input')
    const output = document.querySelector('#output')
    const submit = document.querySelector('#submit')

    submit.addEventListener('click', () => {
        const value = input.value
        console.log(value)
        output.innerHTML = value
    })
})