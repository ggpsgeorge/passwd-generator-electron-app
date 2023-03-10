const generate = document.getElementById("generate")

console.log(versions.node(), versions.chrome(), versions.electron())

generate.addEventListener('click', (event, args) => {
    console.log(event)
})

function isCheked(htmlElement){
    return htmlElement.checked
}

function lowercase() {
    let lowercase = document.getElementById("lowercase")
    console.log(isCheked(lowercase))
}

