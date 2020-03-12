/**
 * For now, this only holds the number of the currently active form step.
 */
window.state = {
  activeStep: 0
};

// ====== HELPERS ==============================================================

/**
 * This function makes sure that only the currently active form step is visible.
 * It uses the global variable `window.state.activeStep` to determine which
 * step should be active.
 */
function updateStepVisibility() {
  document.querySelectorAll(".form-step").forEach(step => {
    step.classList.remove("active");
  });

  document.getElementById(`form-step-${window.state.activeStep}`).classList.add("active");
}

/**
 * Increases the global counter variable by one and updating the form,
 * effectively moving to the next step.
 */
function showNextFormStep() {
  window.state.activeStep += 1;
  updateStepVisibility();
}

/**
 * Decreses the global counter variable by one and updating the form,
 * effectively moving to the previous step.
 */
function showPreviousFormStep() {
  window.state.activeStep -= 1;
  updateStepVisibility();
}

/**
 * Makes sure that all active subsections are hidden, except for the
 * one we want to see.
 */
function showIssueTypesForCategory(category) {
  var issueList = document.querySelectorAll(".issue-type.active");
  issueList.forEach(issueList => issueList.classList.remove("active"));
  showNextFormStep();

  var targetSection = document.getElementById(category);
  targetSection.classList.add("active");

  updateStepVisibility();
}

// ====== EVENT HANDLERS =======================================================

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Update the form step visibility after load, to make sure the first step is visible.
   */
  updateStepVisibility();

  /**
   * Handle clicks on the previoys button, using the showPreviousFormStep() function.
   */
  document.getElementById("form-prev").addEventListener("click", ev => {
    ev.preventDefault();
    showPreviousFormStep();
  });

  /**
   * Handles clicking on the "confirm" button inside the first form step asking for a URL.
   */
  document.getElementById("site_url_confirm").addEventListener("click", ev => {
    ev.preventDefault();
    showNextFormStep();
  });

  /**
   * Fires when the user selects one of the issue categories.
   */
  document.querySelectorAll("input[name='issue_category']").forEach(input => {
    input.addEventListener("change", ev => {
      const value = ev.target.value;
      const section_display = `issue_cat_${value}`;
      showIssueTypesForCategory(section_display);
    });
  });

  document.querySelectorAll("input[name='issue_type']").forEach(input => {
    input.addEventListener("change", ev1 => {
      const value1 = ev1.target.value1;
      const display_form = `issue_cat_${value1}`;
      showIssueTypesForCategory(display_form);
      showNextFormStep();
    });
  });
  
  document.getElementById("confirm_button").addEventListener("click", ev => {
    ev.preventDefault();
    showNextFormStep();
  });
  
  document.getElementById("continue_button").addEventListener("click", ev =>{
    ev.preventDefault();
    showNextFormStep();
  })
});
