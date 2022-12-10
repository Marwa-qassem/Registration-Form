let usernameInput = document.getElementById("usernameInput");
let userEmailInput = document.getElementById("userEmailInput");
let userPasswordInput = document.getElementById("userPasswordInput");
let confirmedPassword = document.getElementById("confirmedPassword");

let userInfo=[];
if (localStorage.getItem("users") != null) {
  userInfo = JSON.parse(localStorage.getItem("users"));
} else {
  userInfo = [];
}

async function signUp() {

  let user = {
    username: 'Ahmed Ali',
    email: 'Ahmed123@gmail.com',
    password: 'Ahmed@123',
    password_confirmation: 'Ahmed@123',
  };

  let apiResponse = await fetch(
    `https://goldblv.com/api/hiring/tasks/register`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
       body: JSON.stringify(user)
    });

  let responseData = await apiResponse.json();
  console.log(responseData);

  if (userEmailInput === true && usernameInput === true && userPasswordInput === true && confirmedPassword === true) {
    let user = {
      name: usernameInput.value,
      email: userEmailInput.value,
      password: userPasswordInput.value,
      confirmedPassword: confirmedPassword.value,
    };
    userInfo.push(user);
    localStorage.setItem("users", userInfo);  
  } else {
    const tryAgainMsg = document.getElementById("tryAgainMsg");
    tryAgainMsg.classList.replace("d-none", "d-block");
  }
}
signUp();

usernameInput.addEventListener("blur", function () {
  const usernameAlert = document.getElementById("usernameAlert");
  const regex = /^[A-Za-z0-9]{5,10}(\s?[A-Za-z]{5,10})?$/;

  if (regex.test(usernameInput.value) == true && usernameInput.value != " ") {
    usernameInput.classList.add("is-valid");
    usernameInput.classList.remove("is-invalid");
    usernameAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    usernameInput.classList.add("is-invalid");
    usernameInput.classList.remove("is-valid");
    usernameAlert.classList.replace("d-none", "d-block");
    return false;
  }
});

userEmailInput.addEventListener("blur", function () {
  const userEmailAlert = document.getElementById("userEmailAlert");
  const regex = /@[a-z]{3,10}(\.com)$/;

  if (regex.test(userEmailInput.value) == true && userEmailInput.value != "") {
    userEmailInput.classList.add("is-valid");
    userEmailInput.classList.remove("is-invalid");
    userEmailAlert.classList.replace("d-block", "d-none");
  } else {
    userEmailInput.classList.add("is-invalid");
    userEmailInput.classList.remove("is-valid");
    userEmailAlert.classList.replace("d-none", "d-block");
    return false;
  }
});

userPasswordInput.addEventListener("blur", function () {
  const userPasswordAlert = document.getElementById("userPasswordAlert");
  const regex = /^.{8,15}$/;

  if (
    regex.test(userPasswordInput.value) == true &&
    userPasswordInput.value != ""
  ) {
    userPasswordInput.classList.add("is-valid");
    userPasswordInput.classList.remove("is-invalid");
    userPasswordAlert.classList.replace("d-block", "d-none");
  } else {
    userPasswordInput.classList.add("is-invalid");
    userPasswordInput.classList.remove("is-valid");
    userPasswordAlert.classList.replace("d-none", "d-block");
    return false;
  }
});

confirmedPassword.addEventListener("blur", function () {
    const confirmedPasswordAlert = document.getElementById(
        "confirmedPasswordAlert"
      );
    
      if (
        confirmedPassword.value == userPasswordInput.value &&
        confirmedPassword.value !== ""
      ) {
        confirmedPassword.classList.add("is-valid");
        confirmedPassword.classList.remove("is-invalid");
        confirmedPasswordAlert.classList.replace("d-block", "d-none");
      } else {
        confirmedPassword.classList.add("is-invalid");
        confirmedPassword.classList.remove("is-valid");
        confirmedPasswordAlert.classList.replace("d-none", "d-block");
        return false;
      }
});

function displayUserEmail() {
  document.getElementById("userEmail").innerHTML = email;
}
