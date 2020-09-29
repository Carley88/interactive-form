const name = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const jobRole = document.getElementById("title");
const shirtColor = document.getElementById("color");
const colorOptions = shirtColor.children;
const placeholderOption = document.createElement("option");
const design = document.getElementById("design");
const shirtDiv = document.getElementById("shirt-colors");
const activities = document.querySelector(".activities");
const activityList = document.querySelectorAll(".activities input");
const totalPriceElement = document.createElement('h3');
const creditCard = document.getElementById("credit-card");
const payPal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const payment = document.getElementById("payment");
const nameError = createErrorElement();
const email = document.getElementById("mail");
const emailError = createErrorElement();
const activitiesError = createErrorElement();
const cardNumber = document.getElementById("cc-num");
const cardError = createErrorElement();
const zip = document.getElementById("zip");
const zipError = createErrorElement();
const cvvNumber = document.getElementById("cvv");
const cvvError = createErrorElement();
const submitButton = document.getElementsByTagName("button")[0];

//When the user lands on the page the cursor will appear in the name field.
name.focus();

/**
Hides the other job role input box until the user selects other in the drop down box.
**/
otherTitle.className = "is-hidden";

jobRole.addEventListener('change', (event) => {
  if(event.target.value === "other") {
    otherTitle.className = "";
  } else {
    otherTitle.className = 'is-hidden';
  }
})

for (let i = 0; i < colorOptions.length; i++) {
  colorOptions[i].className = "is-hidden";
}

/**
Hides the t-shirt color options until a design is selected.
Once a design is selected only colors of the selected themes will be available to select.
**/
shirtColor.appendChild(placeholderOption);
placeholderOption.text = "Please select a T-shirt theme.";
placeholderOption.id = "placeholderOption";
placeholderOption.selected = true;

shirtDiv.style.display = "none";

design.addEventListener('change', (event) => {
  shirtDiv.style.display = "";
  if(event.target.value === "js puns") {
    for (let i = 0; i < colorOptions.length; i++) {
      switch (colorOptions[i].value) {
        case "cornflowerblue":
        colorOptions[i].className = "";
        colorOptions[i].selected = true;
        break;
        case "darkslategrey":
        colorOptions[i].className = "";
        break;
        case "gold":
        colorOptions[i].className = "";
        break;
        default:
        colorOptions[i].className = "is-hidden";
      }
    }
  } else if (event.target.value === "heart js") {
    for (let i = 0; i < colorOptions.length; i++) {
      switch (colorOptions[i].value) {
        case "tomato":
        colorOptions[i].className = "";
        colorOptions[i].selected = true;
        break;
        case "steelblue":
        colorOptions[i].className = "";
        break;
        case "dimgrey":
        colorOptions[i].className = "";
        break;
        default:
        colorOptions[i].className = "is-hidden";
      }
    }
  }
});

/**
When a user selects an event any events which run at the same time will be greyed out and unavailable for selection.
The total cost of the selected events is added up & displayed at the bottom of the activities section.
**/
let totalPrice = 0;
activities.appendChild(totalPriceElement);
totalPriceElement.innerHTML = `Total: $${totalPrice}`;

activities.addEventListener('change', (event) => {
  const checkedActivity = event.target;
  activityPrice = parseInt(checkedActivity.dataset.cost);
  if (event.target.checked) {
    totalPrice += activityPrice;
    totalPriceElement.innerHTML = `Total: $${totalPrice}`;

    for (let i = 0; i < activityList.length; i++) {
      if (checkedActivity.dataset.dayAndTime === activityList[i].dataset.dayAndTime && checkedActivity.name != activityList[i].name) {
        activityList[i].disabled = true;
        activityList[i].parentNode.style.color = "grey";
      }
    }
  } else if (event.target.checked === false) {
    totalPrice -= activityPrice;
    totalPriceElement.innerHTML = `Total: $${totalPrice}`;
    for (let i = 0; i < activityList.length; i++) {
      activityList[i].disabled = false;
      activityList[i].parentNode.style.color = "#000";
    }
  }
});

/**
Initially the credit card input is visable.
This will change if the user selects a different payment method.
The select payment method isn't available for selection when the user drops down.
**/
creditCard.style.display = "";
payPal.style.display = "";
bitcoin.style.display = "none";

document.querySelector("[value='select method']").style.display = "none";

payment.addEventListener('change', (event) => {
  const paymentType = event.target.value;
  if (paymentType === "credit card") {
    creditCard.style.display = "";
    payPal.style.display = "none";
    bitcoin.style.display = "none";
  } else if (paymentType === "paypal") {
    payPal.style.display = "";
    creditCard.style.display = "none";
    bitcoin.style.display = "none";
  } else if (paymentType === "bitcoin") {
    bitcoin.style.display = "";
    creditCard.style.display = "none";
    payPal.style.display = "none";
  }
});

/**
Function will create a new span element which will hold the error messages for each validation point.
**/
function createErrorElement () {
  const errorMessage = document.createElement("span");
  errorMessage.className = "validation-message";
  errorMessage.style.display = "none";
  return(errorMessage);
}

/**
Checks if the user has entered a name.
If the user removes the name after typing or leaves it blank upon submission an error message is displayed.
If the name field holds no value this function will return false.
**/
name.previousElementSibling.append(nameError);

function validateName() {
  if(name.value) {
    nameError.style.display = "none";
    return true;
  } else {
    nameError.style.display = "";
    return false;
  }
}

function validateName() {
  if (name.value.length === 0) {
    nameError.innerHTML = "*Please enter your name";
    nameError.style.display = "";
    return false;
  } else if (/^[a-z]+$/.test === false) {
    nameError.innerHTML = "*Please enter your name";
    nameError.style.display = "";
  }
}

name.addEventListener("input", (event) => {
  validateName();
});


/**
Checks if the user has entered an email address, if they haven't a message will be displayed asking for one.
Once a user begins typing the validation will check that the email is in the correct format, if not a different message is displayed.
Email validation - Must only contain letters, start with letters, have an @ followed by more letters, then have a . followed by 3 letters.
If the validation fails the function will return false.
**/
email.previousElementSibling.append(emailError);

function validateEmail() {
  if(/^[^@]+@[^@.]+\.[a-z]{3}$/i.test(email.value) === false && email.value.length > 0) {
    emailError.innerHTML = "*Please enter a valid email address";
    emailError.style.display = "";
    return false;
  } else if (email.value.length === 0 && /^[^@]+@[^@.]+\.[a-z]{3}$/i.test(email.value) === false) {
    emailError.innerHTML = "*Please enter your email address";
    emailError.style.display = "";
    return false;
  } else if (email.value && /^[^@]+@[^@.]+\.[a-z]{3}$/i.test(email.value) === true) {
    emailError.style.display = "none";
    return true;
  }
}

email.addEventListener("input", (event) => {
  validateEmail();
});

/**
Checks if the user has selected at least one activity, if they haven't an error message is dispayed.
If no activities have been selected the function will return false.
**/
activitiesError.innerHTML = "*Please select at least one activity";
activities.appendChild(activitiesError);

function validateActivities() {
  const isChecked = document.querySelectorAll("[type=checkbox]:checked");
  if (isChecked.length === 0) {
    activitiesError.style.display = "";
    return false;
  } else {
    activitiesError.style.display = "none";
  }
}

activities.addEventListener("click", (event) => {
  validateActivities();
})

/**
As the user types their card number the validator assesses if it's between 13-16 digits.
If it's not an error message is displayed.
If the validation fails the function will return false.
**/
cardError.innerHTML = "*Invalid card number";
cardNumber.parentNode.appendChild(cardError);

function validateCardNumber() {
  if (/^\d{13,16}$/.test(cardNumber.value) === true) {
    cardError.style.display = "none";
    return true;
  } else {
    cardError.style.display = "";
    return false;
  }
}

cardNumber.addEventListener("input", () => {
  validateCardNumber();
});

/**
As the user types their zip number the validator assesses if it's 5 digits.
If it's not an error message is displayed.
If the validation fails the function will return false.
**/
zipError.innerHTML = "*Invalid zip";
zip.parentNode.appendChild(zipError);

function validateZip() {
  if (/^\d{5}$/.test(zip.value) === true) {
    zipError.style.display = "none";
    return true;
  } else {
    zipError.style.display = "";
  }
}

zip.addEventListener("input", () => {
  validateZip();
})

/**
As the user types their CVV number the validator assesses if it's 3 digits.
If it's not an error message is displayed.
If the validation fails the function will return false.
**/
cvvError.innerHTML = "*Invalid CVV";
cvv.parentNode.appendChild(cvvError);

function validateCvv() {
  if (/^\d{3}$/.test(cvv.value) === true){
    cvvError.style.display = "none";
    return true;
  } else {
    cvvError.style.display = "";
    return false;
  }
}

cvvNumber.addEventListener("input", () => {
  validateCvv();
})

/**
Assesses if any of the validator functions return false.
If they do all the validator functions will be called which means any incorrectly filled in fields will display error messages.
The function then returns false.
**/
function masterValidator() {
  if (validateName() === false || validateEmail() === false || validateActivities() === false || validateCardNumber() === false || validateZip() === false || validateCvv() === false) {
    validateName();
    validateEmail();
    validateActivities();
    validateCardNumber();
    validateZip();
    validateCvv();
    return false;
  } else {
    return true;
  }
}

/**
When the user submits the form the master valadator function is called.
If it returns false then preventDefault is called to stop the form from submitted.
Any fields which failed validation will display an error message for the user.
**/
submitButton.addEventListener("click", (event) => {
  if(masterValidator() === false) {
    event.preventDefault();
  }
});
