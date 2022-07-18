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

const password = document.getElementById('password');
password.addEventListener('input', () => {
    const validityState = password.validity
    if (validityState.tooShort){
        password.setCustomValidity('Please input at least 8 characters')
        password.reportValidity()
    }else{
        password.setCustomValidity('')
        password.reportValidity()
    }
})

const passwordConfirm = document.getElementById('passwordConfirm');
passwordConfirm.addEventListener('input', () => {
    if (passwordConfirm.value !== password.value){
        passwordConfirm.setCustomValidity('Passwords do not match')
        passwordConfirm.reportValidity()
    }else{
        passwordConfirm.setCustomValidity('')
        passwordConfirm.reportValidity()
    }
})

const submit = document.querySelector('button')
submit.addEventListener('click', () => {
    if (!email.validity.valid || !nationality.validity.valid || !zip.validity.valid || !password.validity.valid || !passwordConfirm.validity.valid){
        alert('Please fill in required forms')
    }else{
        alert('High five')
    }
})