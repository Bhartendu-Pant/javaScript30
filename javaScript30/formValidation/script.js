const formEl = document.getElementById("form");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPassEl = document.getElementById("confirm-password");

formEl.addEventListener("submit",e=>{
    e.preventDefault();
    validateInputs();
});

const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email =>{
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs=()=>{
    const usernameValue=usernameEl.value.trim();
    const emailValue = emailEl.value.trim();
    const passwordValue = passwordEl.value.trim();
    const confirmPassValue = confirmPassEl.value.trim();

    if(usernameValue === ''){
        setError(usernameEl,'Username is required');
    }else{
        setSuccess(usernameEl);
    }

    if(emailValue === ''){
        setError(emailEl,'Email is required');
    }else if(!isValidEmail(emailValue)){
        setError(emailEl,'Please provide a valid email');
    }else{
        setSuccess(emailEl);
    }



    if(passwordValue === ''){
        setError(passwordEl,'Password is required');
    }else if(passwordValue.length < 8){
        setError(passwordEl,'Password must contain atleast 8 character')
    }else{
        setSuccess(passwordEl);
    }

    if(confirmPassValue === ''){
        setError(confirmPassEl,'Please confirm your password');
    }else if(passwordValue !== confirmPassValue){
        setError(confirmPassEl,"Password does not match");
    }
    else{
        setSuccess(confirmPassEl);
    }


}