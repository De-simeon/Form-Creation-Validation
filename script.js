document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const userField = document.getElementById('username').value.trim();
    const emailField = document.getElementById('email').value.trim();
    const passwordField = document.getElementById('password').value.trim();
    let isValid = true;

    const messages = [];

    // Username Validation Check
    if(userField.length < 3){
      isValid = false;
      messages.push("username must be more than 3 character long");
    }

    // Email Validation Check
    if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailField)){
      isValid = false;
      messages.push("email must include '@' abd '.'");
    }

    // Password Validation Check
    if(passwordField.length < 8){
      isValid = false;
      messages.push("Password must be at least 8 characters long");
    }

    feedbackDiv.style.display = "block"
    if (isValid){
      feedbackDiv.textContent = "Registration successful";
      feedbackDiv.style.color = "#28a745";
      form.reset();
    }else{
      feedbackDiv.innerHTML = messages.join(`<br>`);
      feedbackDiv.style.color = "#dc3545";
    }

  });
});