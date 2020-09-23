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

payment.addEventListener('click', (event) => {
  payment.remove(0)
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

function validateName() {
  if(name.value) {
    return(true);
  } else {
    console.log("Please enter a name");
    return(false);
  }
}

function validateEmail() {
  const email = document.getElementById("mail");
  if(/^[^@]+@[^@.]+\.[a-z]+$/i.test(email) === false) {
    console.log("Please enter a valid email address");
    return(false);
  }
}

submitButton = document.getElementsByTagName("button")[0];

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  validateEmail();

})
