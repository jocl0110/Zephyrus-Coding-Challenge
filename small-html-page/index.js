console.log("Hello from Small Page");
// Variables
const changeBtnEl = document.getElementById("change-btn");
const resetBtnEl = document.getElementById("reset-btn");
const headingEl = document.getElementById("heading");
const headingElValue = headingEl.textContent;
console.log(changeBtnEl);
console.log(resetBtnEl);

console.log(headingElValue);

// Functions
function ChangeHeadingText() {
  headingEl.textContent = "Text Changed";
}
function ResetHeadingText() {
  headingEl.textContent = headingElValue;
}
changeBtnEl.addEventListener("click", ChangeHeadingText);
resetBtnEl.addEventListener("click", ResetHeadingText);
