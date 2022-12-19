const includeUppercaseElement = document.querySelector('#includeUppercase')
const includeNumberseElement =document.querySelector('#includeNumbers')
const includeSymbolsElement =document.querySelector('#includeSymbols')
const lowercase_char_codes = arrayFromLowToHigh(97,122)
const uppercase_char_codes = arrayFromLowToHigh(65,90)
const number_char_codes = arrayFromLowToHigh(48,57)
const symbol_char_codes = arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64).concat(
        arrayFromLowToHigh(91,96).concat(
            arrayFromLowToHigh(123,126)
        )
    )
)
// 
function arrayFromLowToHigh(low,high){
    const array = []
    for (let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}
// 

// 
const characterAmountRange = document.querySelector('#charactersAmountRange');
const characterAmountNumber = document.querySelector('#charactersAmountNumber');
characterAmountRange.addEventListener('input',syncCharacterAmount)
characterAmountNumber.addEventListener('input',syncCharacterAmount)

function syncCharacterAmount (e){
    const value = e.target.value
    characterAmountRange.value = value;
    characterAmountNumber.value = value
}
// 
const displayPassword = document.querySelector('#displayPassword')
const form = document.querySelector('#passwordForm')
form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumberseElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount,includeUppercase,includeNumbers,
        includeSymbols)
        displayPassword.innerText = password
})
// 
function generatePassword (characterAmount,includeUppercase,includeNumbers,
    includeSymbols){
       let charCodes = lowercase_char_codes;
       if(includeUppercase)charCodes = charCodes.concat(uppercase_char_codes)
       if(includeSymbols)charCodes = charCodes.concat(symbol_char_codes)
       if(includeNumbers)charCodes = charCodes.concat(number_char_codes)
       
       const passwordCharacter = []
       for( let i = 0; i < characterAmount; i++){

        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacter.push(String.fromCharCode(characterCode))
      }
      return passwordCharacter.join('')
       }
