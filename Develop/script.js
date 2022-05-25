var nineAmInput = document.querySelector("#9am");
var saveButton = document.querySelector("#save");

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  // create user object from submission
  var description = {
    nineAm: nineAmInput.value.trim(),
  };

  // set new submission to local storage
  localStorage.setItem("description", JSON.stringify(description));
});
