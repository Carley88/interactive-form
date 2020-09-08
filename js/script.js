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
