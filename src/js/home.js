// form validation
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

const nameInput = form.querySelector("#name");
const nameRegex = /^[a-zA-Z-.' ]{2,}$/;

const emailInput = form.querySelector("#email");
const emailRegex = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const messageInput = form.querySelector("#message");
const messageRegex = /^(?!\s*$).+/;

const thanks = document.querySelector(".form__thanks");

let valid = {
  name: false, 
  email: false, 
  message: false, 
}

const errorMessage = {
  name: "Check your name doesn't contain odd characters.",
  email: "This needs to include an @ symbol and domain.",
  message: "Please include some detail of why you are reaching out."
}

form.setAttribute("novalidate", "");

form.addEventListener("submit", event => {
  event.preventDefault();
  if (Object.values(valid).includes(false)) {
    for (key in valid) {
      if (!valid[key]) {
        input = document.getElementById(key);
        input.style.borderColor = "hsl(0, 100%, 45%)";
        input.nextElementSibling.textContent = errorMessage[key];
        input.nextElementSibling.style.visibility = 'initial';
        input.nextElementSibling.style.opacity = '1';
        input.nextElementSibling.setAttribute("role", "alert")
      }
    }
  } else {
    fetch("/", {
      method: "POST",
      body: new URLSearchParams("form-name=contact&" + 
                      nameInput.name + nameInput.value + "&" + 
                      emailInput.name + emailInput.value + "&" + 
                      messageInput.name + messageInput.value)
    })
    .then(()=>{ // need to refactor!
      nameInput.style.border = ".2rem solid hsl(223, 55%, 22%)";
      nameInput.value="";
      emailInput.style.border = ".2rem solid hsl(223, 55%, 22%)";
      emailInput.value="";
      messageInput.style.border = ".2rem solid hsl(223, 55%, 22%)";
      messageInput.value="";
      thanks.style.visibility = 'initial';
      thanks.style.opacity = '1';
    })
    .catch(console.error);
  }
});

function validate(input, test){
  thanks.style.visibility = 'hidden';
  thanks.style.opacity = '0';
  input.nextElementSibling.textContent = '-';
  input.nextElementSibling.style.visibility = 'hidden';
  input.nextElementSibling.style.opacity = '0';
  input.nextElementSibling.removeAttribute("role");
  if (test) {
    input.style.borderColor = "hsl(106, 100%, 30%)";
    return true;
  } else {
    input.style.border = ".2rem solid hsl(223, 55%, 22%)";
    return false;
  }
}

nameInput.addEventListener("input", () => {
  valid.name = validate(nameInput, nameRegex.test(nameInput.value));
});

emailInput.addEventListener("input", () => {
  valid.email = validate(emailInput, emailRegex.test(emailInput.value));
});

messageInput.addEventListener("input", () => {
  valid.message = validate(messageInput, messageRegex.test(messageInput.value));
});
