/*function validate(inputID){
    const input = document.getElementById(inputID);
    //const validityState = input.validity;
    console.log(input.checkValidity())
/*    if (validityState.valueMissing) {
        input.setCustomValidity('Please fill out this input');
    }else if (validityState.tooShort){
        input.setCustomValidity('not long enough');
    }else{
        input.setCustomValidity('');
    }

    input.reportValidity();
}

const country = document.getElementById('country');
country.addEventListener('input', validate('country') //{
  /*  if (!country.checkValidity()){
        country.setCustomValidity("please fill out country name")
        country.reportValidity()
    }else{
        country.setCustomValidity("")
        country.reportValidity()
    }
})*/

const email = document.getElementById('email');
email.addEventListener('input', function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid email')
        email.reportValidity()
    }else{
        email.setCustomValidity('')
    }
})

/*country.addEventListener('input', () => {
    country.setCustomValidity('');
    country.checkValidity();
});

country.addEventListener('invalid', () => {
    if(country.value === '') {
        country.setCustomValidity('Enter your nationality');
    }else{
        country.setCustomValidity('Country name must be at least 2 characters')
    }
})*/

/*function validate(inputID){
    const input = document.getElementById(inputID);
    const validityState = input.validity;
    /*if (validityState.valueMissing) {
        input.setCustomValidity('Please fill out this input');
    }else if (validityState.tooShort){
        input.setCustomValidity('not long enough');
    }else{
        input.setCustomValidity('');
    }
    input.reportValidity();
}*/

const nationality = document.getElementById('country');
nationality.addEventListener('input', () => {
    const validityState = nationality.validity
    if (validityState.tooShort){
        nationality.setCustomValidity('Please input at least 4 characters')
        nationality.reportValidity()
    }else{
        nationality.setCustomValidity('')
        nationality.reportValidity()
    }
})