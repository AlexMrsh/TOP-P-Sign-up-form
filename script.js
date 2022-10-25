const form = document.getElementById('form-signin');
const submitButton = document.getElementById('submit-button');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

let validity = -6;

const isValidEmail = email => {
    const emailRegex = /^[\w-\._]+@([\w-_]+\.)+[\w-\._]{2,5}$/;
    return emailRegex.test(String(email).toLowerCase());
}

const isValidPhone = phone => {
    const phoneRegex = /[0-9]{10}/
    return phoneRegex.test(phone);
}

const setError = (element, message) => {
    const errorDisplay = element.nextElementSibling
    errorDisplay.textContent = message; 
    element.classList.add('error');
    element.classList.remove('success');
}

const setSuccess = (element) => {
    const errorDisplay = element.nextElementSibling
    errorDisplay.textContent = '';
    element.classList.remove('error');
    element.classList.add('success');
}

const validateInputs = () => {
    validity = -6;

    if(firstname.value === ''){
        setError(firstname, 'First name is required');
    }else{
        setSuccess(firstname);
        validity++;
    }

    if(lastname.value === ''){
        setError(lastname, 'Last name is required');
    }else{
        setSuccess(lastname);
        validity++;
    }

    if(email.value === ''){
        setError(email, 'E-mail is required');
    }else if(!isValidEmail(email.value)){
        setError(email, 'Email address is not valid')
    }else{
        setSuccess(email);
        validity++;
    }

    if(phone.value === ''){
        setError(phone, 'Phone is required');
    }else if(!isValidPhone(phone.value)){
        setError(phone, 'Phone number is not valid')
    }else{
        setSuccess(phone);
        validity++;
    }
    
    if(password.value === '' ){
        setError(password, 'Password is required');
    }else if(password.value.length < 8){
        setError(password, 'Password must be at least 8 character')
    }else{
        setSuccess(password);
        validity++;
    }

    if(passwordConfirm.value === ''){
        setError(passwordConfirm, 'Please confirm password');
    }else if(passwordConfirm.value !== password.value){
        setError(passwordConfirm, 'Password doesn\'t match');
    }else{
        setSuccess(passwordConfirm);
        validity++;
    }
}

submitButton.addEventListener('click', e => {
    e.preventDefault();
    validateInputs()
    if(validity === 0){
        form.submit();
    }
});