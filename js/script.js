const name = document.getElementById("name");
name.focus();

const otherTitle = document.getElementById("other-title");
otherTitle.className = "is-hidden";

const jobRole = document.getElementById("title");
jobRole.addEventListener('change', (event) => {
  if(event.target.value === "other") {
    otherTitle.className = ""
  } else {
    otherTitle.className = 'is-hidden'
  }
})

const shirtColor = document.getElementById("color");
const colorOptions = shirtColor.children;
for (let i = 0; i < colorOptions.length; i++) {
  colorOptions[i].className = "is-hidden";
}

const placeholderOption = document.createElement("option");
shirtColor.appendChild(placeholderOption);
placeholderOption.text = "Please select a T-shirt theme.";
placeholderOption.id = "placeholderOption";
placeholderOption.selected = true;

const design = document.getElementById("design");

design.addEventListener('change', (event) => {
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

const activities = document.querySelector(".activities");
const activityList = document.querySelectorAll(".activities input");
let totalPrice = 0;
totalPriceElement = document.createElement('h3');
activities.appendChild(totalPriceElement);
totalPriceElement.innerHTML = `$${totalPrice}`;


activities.addEventListener('change', (event) => {
  const checkedActivity = event.target;
  activityPrice = parseInt(checkedActivity.dataset.cost);
  if (event.target.checked) {
    totalPrice += activityPrice;
    totalPriceElement.innerHTML = `$${totalPrice}`;

    for (let i = 0; i < activityList.length; i++) {
      if (checkedActivity.dataset.dayAndTime === activityList[i].dataset.dayAndTime && checkedActivity.name != activityList[i].name) {
        activityList[i].disabled = true;
        activityList[i].parentNode.style.color = "grey";
      }
    }
  } else if (event.target.checked === false) {
    totalPrice -= activityPrice;
    totalPriceElement.innerHTML = `$${totalPrice}`;
    for (let i = 0; i < activityList.length; i++) {
      activityList[i].disabled = false;
      activityList[i].parentNode.style.color = "#000";
    }
  }
});

const payment = document.getElementById("payment");

const creditCard = document.getElementById("credit-card");
creditCard.style.display = ""
const payPal = document.getElementById("paypal");
payPal.style.display = "";
const bitcoin = document.getElementById("bitcoin");
bitcoin.style.display = "none";

document.querySelector("[value='select method']").style.display = "none";

payment.addEventListener('click', (event) => {
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

function createErrorElement () {
  const errorMessage = document.createElement("span");
  errorMessage.className = "validation-message";
  errorMessage.style.display = "none";
  return(errorMessage);
}


const nameError = createErrorElement();
nameError.innerHTML = "*Please enter your name";
name.previousElementSibling.append(nameError);

function validateName() {
  if(name.value) {
    nameError.style.display = "none"
    return(true);
  } else {
    nameError.style.display = ""
    return(false);
  }
}

name.addEventListener("input", (event) => {
  validateName();
});

const email = document.getElementById("mail");
const emailError = createErrorElement();
emailError.innerHTML = "*Please enter a valid email";
email.previousElementSibling.append(emailError);

function validateEmail() {
  if(/^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value) === true) {
    emailError.style.display = "none"
    return true;
  } else {
    emailError.style.display = ""
    return false;
  }
}

email.addEventListener("input", (event) => {
  validateEmail();
});

const activitiesError = createErrorElement();
activitiesError.innerHTML = "*Please select at least one activity";
activities.appendChild(activitiesError);

function validateActivities() {
  const isChecked = document.querySelectorAll("[type=checkbox]:checked");
  if (isChecked.length === 0) {
    activitiesError.style.display = "";
    return(false);
  } else {
    activitiesError.style.display = "none";
  }
}

activities.addEventListener("click", (event) => {
  validateActivities();
})

const cardNumber = document.getElementById("cc-num");
const cardError = createErrorElement();
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

const zip = document.getElementById("zip");
const zipError = createErrorElement();
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

const cvvNumber = document.getElementById("cvv");
const cvvError = createErrorElement();
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


submitButton = document.getElementsByTagName("button")[0];

submitButton.addEventListener("click", (event) => {
  if(masterValidator() === false) {
    event.preventDefault();
  }
});
