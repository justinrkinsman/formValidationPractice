const email = document.getElementById('email');
email.addEventListener('input', function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid email')
        email.reportValidity()
    }else{
        email.setCustomValidity('')
    }
})

const nationality = document.getElementById('country');
nationality.addEventListener('input', () => {
    const validityState = nationality.validity
    if (validityState.tooShort){
        nationality.setCustomValidity('Please input at least 4 characters')
        nationality.reportValidity()
    }else if (validityState.typeMismatch){
        nationality.setCustomValidity('Please use letters only')
        nationality.reportValidity()
    }else{
        nationality.setCustomValidity('')
        nationality.reportValidity()
    }
})

const zip = document.getElementById('zipCode');
zip.addEventListener('input', () => {
    const validityState = zip.validity
    if (validityState.patternMismatch){
        zip.setCustomValidity('Please use numbers only')
        zip.reportValidity()
    }else if (validityState.tooShort){
        zip.setCustomValidity('Please input at least 5 characters')
        zip.reportValidity()    
    }else{
        zip.setCustomValidity('');
        zip.reportValidity()
    }
})