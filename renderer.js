const generate = document.getElementById("generate")
const lowercase = document.getElementById("lowercase")
const uppercase = document.getElementById("uppercase")
const special = document.getElementById("special")
const numbers = document.getElementById("numbers")
const slider = document.getElementById("slider")
const password = document.getElementById("password")

generate.addEventListener('click', (event) => {
    args = {
        slider: parseInt(slider.value),
        lowercase: "1",
        uppercase: "2",
        special: "3",
        numbers: "4",
    }
    
    if (lowercase.checked == false){args.lowercase = 0}
    if (uppercase.checked == false){args.uppercase = 0}
    if (special.checked == false){args.special = 0}
    if (numbers.checked == false){args.numbers = 0}

    console.log(args)

    let password_text = PythonShell.password(
        args.slider,
        args.lowercase,
        args.uppercase,
        args.special,
        args.numbers
    )
    
    password.innerHTML = password_text

})
