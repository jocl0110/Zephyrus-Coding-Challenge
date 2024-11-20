// Variables
const changeBtnEl = document.getElementById("change-btn");
const resetBtnEl = document.getElementById("reset-btn");
const headingEl = document.getElementById("heading");
const headingElValue = headingEl.textContent;

// Functions
function ChangeHeadingText() {
  headingEl.textContent = "Text Changed";
}
function ResetHeadingText() {
  headingEl.textContent = headingElValue;
}

// Add event listeners
changeBtnEl.addEventListener("click", ChangeHeadingText);
resetBtnEl.addEventListener("click", ResetHeadingText);
