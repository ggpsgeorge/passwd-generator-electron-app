const generate = document.getElementById("generate")

generate.addEventListener('click', generatePassword)

function generatePassword(event) {
    console.log(event)
}

function isCheked(htmlElement){
    return htmlElement.checked
}

function lowercase() {
    let lowercase = document.getElementById("lowercase")
    console.log(isCheked(lowercase))
}

