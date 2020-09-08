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
