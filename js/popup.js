/*function isURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
    '(\\#[-a-z\\d_]*)?$','i'); 
    return pattern.test(str);
  }*/
  // This is a global object to store information about what the form is currently doing.
// Right now, this is only holding the currently active form step

window.state = {
  activeStep: 0
};

// This function hides all form steps, then shows whatever is currently active
function updateFormVisibility() {
  // First, make sure that all form steps are hidden
  document.querySelectorAll(".form-step").forEach((step) => {
    step.classList.remove("active")
  });

  // Next, show the right step
  document.getElementById(`form-step-${window.state.activeStep}`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  // Let's add an event listener to the next button
  document.getElementById("form-next").addEventListener("click", (ev) => {
    // make sure that the button does not submit the form
    ev.preventDefault();

    // Its' the next button, so let's increment the counter and update the form.
    window.state.activeStep += 1;
    updateFormVisibility();
  });

  // do the same for the previous buttons
  document.getElementById("form-prev").addEventListener("click", (ev) => {
    ev.preventDefault();
    window.state.activeStep -= 1;
    updateFormVisibility();
  });

  // Now, make sure to call the
  updateFormVisibility();
});
