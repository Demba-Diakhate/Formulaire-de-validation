// Validation de formulaire
let nameInput  = document.getElementById('nom')
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')

let errorName = document.getElementById("errorName")
let errorEmail = document.getElementById('errorEmail')
let errorPassword = document.getElementById('errorPassword')

let submitButton = document.getElementById('submit')

submitButton.addEventListener('click', (e) => {

     e.preventDefault()

     // Prenom et Nom
     const nameRegex = /^[A-Za-z\s]+$/ // Regex pour la chaine de caractére nom
     if(nameInput.value.length < 3) {
          
          errorName.textContent = `le champ ${nameInput.name} doit dépassser 3 caractères`
          nameInput.style.borderRight = "4px solid red"

     } else if(!nameRegex.test(nameInput.value)) {
          errorName.textContent = `Le champ ${nameInput.name} ne doit contenir que des lettres.`
        nameInput.style.borderRight = "4px solid red"
     } else {

          nameInput.style.borderRight = "4px solid green"
          errorName.textContent = ""
     }

     // Adresse Email
     const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/ // Regex pour la chaine de caractére email
     if(!emailRegex.test(emailInput.value)) {
          errorEmail.textContent = `L'adresse e-mail fournie n'est pas valide.`
          emailInput.style.borderRight = "4px solid red"
     } else {
          emailInput.style.borderRight = "4px solid green"
          errorEmail.textContent = ""
     }

     // Mot de passe
     if(passwordInput.value.length < 4){
          errorPassword.textContent = `le champ ${passwordInput.name} doit dépassser 4 caractères`
          passwordInput.style.borderRight = "4px solid red"
     }else {

          passwordInput.style.borderRight = "4px solid green"
          errorPassword.textContent = ""
     }


})