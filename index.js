// Generate a Password with 16 characters (complexity: uppercase, lowercase, numbers and symbols)
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passOneEl = document.getElementById('passOne')
let passTwoEl = document.getElementById('passTwo')
let buttonEl = document.querySelector('button')
let passwordGen = ""
let statusMessage = document.getElementById('status-message')

function generateRandomCharacter(type) {
    let randomIndex = Math.floor(Math.random() * type.length)
    return type[randomIndex]
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index
    [array[i], array[j]] = [array[j], array[i]];  // Swap elements
  }
  return array;
}

function generatePasswordBlock() {
    let password = []
    // Add 4 characters of each type to the password array
    for (let i = 0; i < 4; i++) {
        password.push(generateRandomCharacter(upperCase))
    }
    for (let i = 0; i < 4; i++) {
        password.push(generateRandomCharacter(lowerCase))
    }
    for (let i = 0; i < 4; i++) {
        password.push(generateRandomCharacter(numbers))
    }
    for (let i = 0; i < 4; i++) {
        password.push(generateRandomCharacter(symbols))
    }
    // Shuffle password list
    let newPasswordArray = shuffle(password)
    // Generate password
    for (let i = 0; i < newPasswordArray.length; i++) {
        passwordGen += newPasswordArray[i]
    }    

}

// Event after button is clicked:
// Generate Passwords
buttonEl.addEventListener('click', function() {
    generatePasswordBlock()    
    passOneEl.textContent = passwordGen
    passwordGen = ""
    generatePasswordBlock()
    passTwoEl.textContent = passwordGen
})

//Copy to clipboard option one:
passOneEl.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(passOneEl.textContent);
        statusMessage.textContent = "Text copied to clipboard!";
      } catch (err) {
        statusMessage.textContent = "Failed to copy text.";
        console.error("Error copying text: ", err);
      }
    });
//Copy to clipboard option two:
passTwoEl.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(passTwoEl.textContent);
        statusMessage.textContent = "Text copied to clipboard!";
      } catch (err) {
        statusMessage.textContent = "Failed to copy text.";
        console.error("Error copying text: ", err);
      }
    });

