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
shirtColor.appendChild(placeholderOption)
placeholderOption.text = "Please select a T-shit theme.";
placeholderOption.id = "placeholderOption";
placeholderOption.selected = true;
