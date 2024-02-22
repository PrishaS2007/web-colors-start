// WEB COLORS START

// Global Variables
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// HTML Variables
let outputEl = document.getElementById("container");

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "starts-with") {
    displayStartLetter();
  } else if (selection === "includes") {
    displayIncludes();
  }
}

// MENU FUNCTIONS
// Display All Colors
function displayAll() {
  outputEl.innerHTML = "<h2>DISPLAY ALL COLORS</h2>";
  for (let i = 0; i < 7; i++) {
    outputEl.innerHTML += `<h4 style="color:${colors[i]}">${colors[i]}</h4>`;
  }
}

// Display all Colors with prompted Starting Letter
function displayStartLetter() {
  console.log("Colors that Start With...");
}

// Display all colors that include provided substring
function displayIncludes() {
  console.log("Colors that Include...");
}
