const generate = document.getElementById("generate")

generate.addEventListener('click', (event, args) => {
    console.log(PythonShell.password(32, 1, 2, 3, 4, 5))
})

function isCheked(htmlElement){
    return htmlElement.checked
}

function lowercase() {
    let lowercase = document.getElementById("lowercase")
    console.log(isCheked(lowercase))
}

