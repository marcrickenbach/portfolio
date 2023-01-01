//  Variable Definitions
// get another event listening going to account for button presses in case we miss the text



const bioText = document.getElementById("bioHeaderText");
const bioBtn = document.getElementById("bioBtn");

const instrumentText = document.getElementById("instrumentHeaderText");
const instroBtn = document.getElementById("instroBtn");

const softwareText = document.getElementById("softwareHeaderText");
const softBtn = document.getElementById("softBtn");

const textText = document.getElementById("textHeaderText");
const textBtn = document.getElementById("textBtn");

const contactText = document.getElementById("contactHeaderText");
const contBtn = document.getElementById("contBtn");


let makeDate = function () {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2,'0');
  let mm = String(today.getMonth() + 1).padStart(2,'0');
  let yyyy = today.getFullYear();
  
  dd = Number(dd);
  mm = Number(mm);
  yyyy = Number(yyyy);
  
  let binaryDate = yyyy.toString(2) + " " + dd.toString(2) + " " + mm.toString(2);
  
  binaryDateHeading.innerHTML = binaryDate;
  console.log(binaryDate);
} 

let binaryDateHeading = document.querySelector('.software_text');
binaryDateHeading.addEventListener('mouseover', makeDate);


binaryDateHeading.addEventListener('mouseout', function(){

  binaryDateHeading.innerHTML = "Software Developer";

});

document.onload = function(){ binaryDateHeading.innerHTML = "Software Developer"};





// bioText.addEventListener("click", bioTextToggle);
bioBtn.addEventListener("click", bioTextToggle);
instroBtn.addEventListener("click", instrumentTextToggle);
softBtn.addEventListener("click", softwareTextToggle);
textBtn.addEventListener("click", textTextToggle);
contBtn.addEventListener("click", contactTextToggle);

// Initialize all Button text to black
document.getElementById("bioHeaderText").style.color = "black";
document.getElementById("instrumentHeaderText").style.color = "black";
document.getElementById("softwareHeaderText").style.color = "black";
document.getElementById("textHeaderText").style.color = "black";
document.getElementById("contactHeaderText").style.color = "black";

// document.getElementById("myDIV").style.transition = "all 2s";

// BIO BUTTON TEXT

function bioTextToggle() {
  
  if (bioText.style.color == "black" ) {
    document.getElementById("bioHeaderText").style.color = "lightseagreen";
    document.getElementById("bioHeaderText").style.transition = "all 1s";
    document.getElementById("instrumentHeaderText").style.color = "black";
    document.getElementById("softwareHeaderText").style.color = "black";
    document.getElementById("textHeaderText").style.color = "black";
    document.getElementById("contactHeaderText").style.color = "black";
  } else {
    document.getElementById("bioHeaderText").style.color = "black";
    document.getElementById("bioHeaderText").style.transition = "all 1s";
  }

  if (bioText.textContent === "Bio >") {
    document.getElementById("bioHeaderText").textContent = "Bio v";
    document.getElementById("instrumentHeaderText").textContent = "Instrument Design >";
    document.getElementById("softwareHeaderText").textContent = "Software >";
    document.getElementById("textHeaderText").textContent = "Text >";
    document.getElementById("contactHeaderText").textContent = "Contact >";
  } else {
    document.getElementById("bioHeaderText").textContent = "Bio >";
  }
}

// INSTRUMENT DESIGN BUTTON TEXT

function instrumentTextToggle() {
  
  if (instrumentText.style.color == "black" ) {
    document.getElementById("bioHeaderText").style.color = "black";
    document.getElementById("instrumentHeaderText").style.color = "chocolate";
    document.getElementById("instrumentHeaderText").style.transition = "all 1s";
    document.getElementById("softwareHeaderText").style.color = "black";
    document.getElementById("textHeaderText").style.color = "black";
    document.getElementById("contactHeaderText").style.color = "black";
  } else {
    document.getElementById("instrumentHeaderText").style.color = "black";
    document.getElementById("instrumentHeaderText").style.transition = "all 1s";
  }

  if (instrumentText.textContent === "Instrument Design >") {
    document.getElementById("bioHeaderText").textContent = "Bio >";
    document.getElementById("instrumentHeaderText").textContent = "Instrument Design v";
    document.getElementById("softwareHeaderText").textContent = "Software >";
    document.getElementById("textHeaderText").textContent = "Text >";
    document.getElementById("contactHeaderText").textContent = "Contact >";
  } else {
    document.getElementById("instrumentHeaderText").textContent = "Instrument Design >";
  }
}

// SOFTWARE BUTTON TEXT

function softwareTextToggle() {
  
  if (softwareText.style.color == "black" ) {
    document.getElementById("bioHeaderText").style.color = "black";
    document.getElementById("instrumentHeaderText").style.color = "black";
    document.getElementById("softwareHeaderText").style.color = "darkred";
    document.getElementById("softwareHeaderText").style.transition = "all 1s";
    document.getElementById("textHeaderText").style.color = "black";
    document.getElementById("contactHeaderText").style.color = "black";
  } else {
    document.getElementById("softwareHeaderText").style.color = "black";
    document.getElementById("softwareHeaderText").style.transition = "all 1s";
  }

  if (softwareText.textContent === "Software >") {
    document.getElementById("bioHeaderText").textContent = "Bio >";
    document.getElementById("instrumentHeaderText").textContent = "Instrument Design >";
    document.getElementById("softwareHeaderText").textContent = "Software v";
    document.getElementById("textHeaderText").textContent = "Text >";
    document.getElementById("contactHeaderText").textContent = "Contact >";
  } else {
    document.getElementById("softwareHeaderText").textContent = "Software >";
  }
}

// TEXT BUTTON TEXT

function textTextToggle() {
  
  if (textText.style.color == "black" ) {
    document.getElementById("bioHeaderText").style.color = "black";
    document.getElementById("instrumentHeaderText").style.color = "black";
    document.getElementById("softwareHeaderText").style.color = "black";
    document.getElementById("textHeaderText").style.color = "darkgrey";
    document.getElementById("textHeaderText").style.transition = "all 1s";
    document.getElementById("contactHeaderText").style.color = "black";
  } else {
    document.getElementById("textHeaderText").style.color = "black";
    document.getElementById("textHeaderText").style.transition = "all 1s";
  }

  if (textText.textContent === "Text >") {
    document.getElementById("bioHeaderText").textContent = "Bio >";
    document.getElementById("instrumentHeaderText").textContent = "Instrument Design >";
    document.getElementById("softwareHeaderText").textContent = "Software >";
    document.getElementById("textHeaderText").textContent = "Text v";
    document.getElementById("contactHeaderText").textContent = "Contact >";
  } else {
    document.getElementById("textHeaderText").textContent = "Text >";
  }
}

// CONTACT BUTTON TEXT

function contactTextToggle() {
  
  if (contactText.style.color == "black" ) {
    document.getElementById("bioHeaderText").style.color = "black";
    document.getElementById("instrumentHeaderText").style.color = "black";
    document.getElementById("softwareHeaderText").style.color = "black";
    document.getElementById("textHeaderText").style.color = "black";
    document.getElementById("contactHeaderText").style.color = "olivedrab";
    document.getElementById("contactHeaderText").style.transition = "all 1s";
  } else {
    document.getElementById("contactHeaderText").style.color = "black";
    document.getElementById("contactHeaderText").style.transition = "all 1s";
  }

  if (contactText.textContent === "Contact >") {
    document.getElementById("bioHeaderText").textContent = "Bio >";
    document.getElementById("instrumentHeaderText").textContent = "Instrument Design >";
    document.getElementById("softwareHeaderText").textContent = "Software >";
    document.getElementById("textHeaderText").textContent = "Text >";
    document.getElementById("contactHeaderText").textContent = "Contact v";
  } else {
    document.getElementById("contactHeaderText").textContent = "Contact >";
  }
}