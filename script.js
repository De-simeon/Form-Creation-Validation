document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function(event){
    event.preventDefault()

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    let isValid = true;

    const messages = [];

    // Username Validation Check
    if(username.length < 3){
      isValid = false;
      messages.push("username must be more than 3 character long");
    }

    // Email Validation Check
    if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)){
      isValid = false;
      messages.push("email must include '@' abd '.'");
    }

    // Password Validation Check
    if(password.length < 8){
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