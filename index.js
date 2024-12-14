
nameInput = document.querySelector(".students_name_input")
updateButton = document.querySelector(".update_button")
retrieveButton = document.querySelector(".retrieve_button")
outputDiv = document.querySelector(".output")


let currentStudentName = ""


retrieveButton.addEventListener("click", () => {
    let nameToJson = localStorage.getItem("studentName")
    if (nameToJson) {
        let nameToJs = JSON.parse(nameToJson)
        console.log(nameToJs)


        outputDiv.textContent = nameToJs

        nameInput.value = nameToJs

    } else { alert("name was not found") }

})


updateButton.addEventListener("click", () => {
    let nameToJson = JSON.stringify(currentStudentName)
    localStorage.setItem("studentName" , nameToJson)
    nameInput.value = ""
    outputDiv.textContent = `student name : ${currentStudentName}`
})


