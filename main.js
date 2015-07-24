//Set up the first part of the page, with instructions and such
var wholePage = document.getElementById("wholePage");
var instructions = "\
  <h3>Instructions:</h3>\
  <br>\
  <p>Insert some instructions here...</p>\
  <br>\
  <p>Insert some more instructions here...</p>\
  <br>\
  <p>You get the idea...</p>\
  \
  <br><br>\
  \
  <div id=\"continue\"><p>Are you ready to continue?</p></div>\
  ";
wholePage.innerHTML = instructions;

//Set up the beginning of the flowchart
var mainPageFormat = "\
  <h3 id=\"slideTitle\">Slide Title</h3>\
  <br>\
  <p id=\"slideInstructions\">Some instructions (if necessary)</p>\
  <br>\
  <br>\
  <div id=\"choice1\" class=\"choice\"><p></p></div>\
  <div id=\"choice2\" class=\"choice\"><p></p></div>\
  <div id=\"choice3\" class=\"choice\"><p></p></div>\
  <div id=\"choice4\" class=\"choice\"><p></p></div>\
  <br>\
  <br>\
  <img id=\"flowchart\" src=\"\"></img>\
  <br>\
  <br>\
  <div id=\"path\"></div>\
  <br>\
  <br>\
  <div id=\"reset\" class=\"control\"><p>Reset</p></div>\
  <div id=\"back\" class=\"control\"><p>Back</p></div>\
  <br>\
  <div id=\"wholeChart\"><p>See Whole Flowchart</p></div>\
  ";
document.getElementById("continue").addEventListener("click", function() {
  wholePage.innerHTML = mainPageFormat;
  setUpBeginning();
});

//Image mapping
//http://www.w3schools.com/tags/tag_map.asp
//http://www.html-5-tutorial.com/map-and-area-elements.htm

//Main section of the code...

//An object containing the objects of all page elements needed
var elements = {};

//The slides used
var testSlide = new slide(
  ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
  ["red", "blue", "green", "yellow"],
  "http://i.imgur.com/MTh65ph.jpg",
  "Test Slide",
  "No instructions (yet)."
);
var beforeFirstSlide = new slide(
  ["Survival Flight", "Ambulance", "Walk In", ""],
  ["#4E67C7", "#4E67C7", "#4E67C7", "#ffffff"],
  "./Pictures/Blank.png",
  "Slide Title",
  "Slide instructions"
);
var acuityDecisionSurvivalFlight = new slide(
  ["High", "Low", "", ""],
  ["#5DCEAE", "#5DCEAE", "#ffffff", "#ffffff"],
  "./Pictures/Acuity\ Decision\ -\ Survival\ Flight.png",
  "Slide Title",
  "Slide instructions"
);
var acuityDecisionAmbulence = new slide(
  ["High", "Low", "", ""],
  ["#5DCEAE", "#5DCEAE", "#ffffff", "#ffffff"],
  "./Pictures/Acuity\ Decision\ -\ Ambulance.png",
  "Slide Title",
  "Slide instructions"
);
var acuityDecisionWalkIn = new slide(
  ["High", "Low", "", ""],
  ["#5DCEAE", "#5DCEAE", "#ffffff", "#ffffff"],
  "./Pictures/Acuity\ Decision\ -\ Walk-In.png",
  "Slide Title",
  "Slide instructions"
);
var highAcuity = new slide(
  ["", "", "", "",],
  ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  "./Pictures/High\ Acuity.png",
  "Slide Title",
  "Slide instructions"
);
var lowAcuity = new slide(
  ["Treat", "Discharge", "Admit", ""],
  ["#EF7F22", "#EF7F22", "#EF7F22", "#ffffff"],
  "./Pictures/Low\ Acuity.png",
  "Slide Title",
  "Slide instructions"
);
var careDecisionTreat = new slide(
  ["Treatment", "Tests", "Consults", ""],
  ["#5DCEAE", "#5DCEAE", "#5DCEAE", "#ffffff"],
  "./Pictures/Care\ Decision\ -\ Treat.png",
  "Slide Title",
  "Slide instructions"
);
var careDecisionDischarge = new slide(
  ["", "", "", ""],
  ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  "./Pictures/Care\ Decision\ -\ Discharge.png",
  "Slide Title",
  "Slide instructions"
);
var careDecisionAdmit = new slide(
  ["", "", "", ""],
  ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  "./Pictures/Care\ Decision\ -\ Admit.png",
  "Slide Title",
  "Slide instructions"
);
var neededTreatment = new slide(
  ["Treat", "Discharge", "Admit", ""],
  ["#EF7F22", "#EF7F22", "#EF7F22", "#ffffff"],
  "./Pictures/Needed\ -\ Treatment.png",
  "Slide Title",
  "Slide instructions"
);
var neededTests = new slide(
  ["Treat", "Discharge", "Admit", ""],
  ["#EF7F22", "#EF7F22", "#EF7F22", "#ffffff"],
  "./Pictures/Needed\ -\ Tests.png",
  "Slide Title",
  "Slide instructions"
);
var neededConsults = new slide(
  ["Treat", "Discharge", "Admit", ""],
  ["#EF7F22", "#EF7F22", "#EF7F22", "#ffffff"],
  "./Pictures/Needed\ -\ Consults.png",
  "Slide Title",
  "Slide instructions"
);
var enterInpatient = new slide(
  ["ED", "Direct Admit", "Hospital Transfer", "PACU"],
  ["#ffff00", "#ffff00", "#ffff00", "#ffff00"],
  "./Pictures/Blank.png",
  "Slide Title",
  "Slide instructions"
);
var careLevelED = new slide(
  ["ICU", "General", "", ""],
  ["#ffff00", "#ffff00", "ffffff", "ffffff"],
  "./Pictures/Care Level Decision - ED.png",
  "Slide Title",
  "Slide instructions"
);
var careLevelDirectAdmit = new slide(
  ["ICU", "General", "", ""],
  ["#ffff00", "#ffff00", "ffffff", "ffffff"],
  "./Pictures/Care Level Decision - Direct Admit.png",
  "Slide Title",
  "Slide instructions"
);
var careLevelHospitalTransfer = new slide(
  ["ICU", "General", "", ""],
  ["#ffff00", "#ffff00", "ffffff", "ffffff"],
  "./Pictures/Care Level Decision - Hospital Transfer.png",
  "Slide Title",
  "Slide instructions"
);
var careLevelPACU = new slide(
  ["ICU", "General", "", ""],
  ["#ffff00", "#ffff00", "ffffff", "ffffff"],
  "./Pictures/Care Level Decision - PACU.png",
  "Slide Title",
  "Slide instructions"
);
var careGeneral = new slide(
  ["Treat", "Discharge", "Transfer", ""],
  ["#ffff00", "#ffff00", "#ffff00", "#ffffff"],
  "./Pictures/Care Decision - General.png",
  "Slide Title",
  "Slide instructions"
);
var careICU = new slide(
  ["Treat", "Discharge", "Transfer", ""],
  ["#ffff00", "#ffff00", "#ffff00", "#ffffff"],
  "./Pictures/Care Decision - ICU.png",
  "Slide Title",
  "Slide instructions"
);
var treat = new slide(
  ["Treatment", "Tests", "Consults", "Surgery"],
  ["#ffff00", "#ffff00", "#ffff00", "#ffff00"],
  "./Pictures/Treat.png",
  "Slide Title",
  "Slide isntructions"
);
var discharge = new slide(
  ["", "", "", ""],
  ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  "./Pictures/Discharge.png",
  "Slide Title",
  "Slide instructions"
);
var transfer = new slide(
  ["Different Team/Service", "Different Unit", "Different Health System"],
  ["#ffff00", "#ffff00", "#ffff00", "#ffffff"],
  "./Pictures/Transfer.png",
  "Slide Title",
  "Slide instructions"
);
var careLevelDiffTeamService = new slide(
  ["ICU", "General", "", ""],
  ["#ffff00", "#ffff00", "#ffffff", "#ffffff"],
  "./Pictures/Care Level Decision - Different Team Service",
  "Slide Title",
  "Slide instructions"
);
var careLevelDiffUnit = new slide(
  ["ICU", "General", "", ""],
  ["#ffff00", "#ffff00", "#ffffff", "#ffffff"],
  "./Pictures/Care Level Decision - Different Unit",
  "Slide Title",
  "Slide instructions"
);
var diffHealthSystem = new slide(
  ["", "", "", ""],
  ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  "./Pictures/Different Health System.png",
  "Slide Title",
  "Slide instructions"
);
var treatmentPatientNeeds = new slide(
  ["Treat", "Discharge", "Transfer", ""],
  ["#ffff00", "#ffff00", "#ffff00", "#ffffff"],
  "./Pictures/Care Decision - Treatment.png",
  "Slide Title",
  "Slide instructions"
);
var testsPatientNeeds = new slide(
  ["Treat", "Discharge", "Transfer", ""],
  ["#ffff00", "#ffff00", "#ffff00", "#ffffff"],
  "./Pictures/Care Decision - Tests.png",
  "Slide Title",
  "Slide instructions"
);
var consultsPatientNeeds = new slide(
  ["Treat", "Discharge", "Transfer", ""],
  ["#ffff00", "#ffff00", "#ffff00", "#ffffff"],
  "./Pictures/Care Decision - Consults.png",
  "Slide Title",
  "Slide instructions"
);
var surgery = new slide(
  ["ICU", "General", "", ""],
  ["#ffff00", "#ffff00", "#ffffff", "#ffffff"],
  "./Pictures/Surgery.png",
  "Slide Title",
  "Slide instructions"
);

//An object containing reference pairs for all of the slide choices and their respective slides
var set1 = true;
var slideChoices = {
  Survival_Flight:  acuityDecisionSurvivalFlight,
  Ambulance:        acuityDecisionAmbulence,
  Walk_In:          acuityDecisionWalkIn,
  High:             highAcuity,
  Low:              lowAcuity,
  Treat:            careDecisionTreat,
  Discharge:        careDecisionDischarge,
  Admit:            careDecisionAdmit,
  Treatment:        neededTreatment,
  Tests:            neededTests,
  Consults:         neededConsults
};
var slideChoices2 = {

};

//Used to set up the first slide
//Later slides use a different function
function setUpBeginning() {
  elements.choices = [];
  for(i=0; i<4; ++i) {
    elements.choices[i] = document.getElementById("choice"+String(i+1));
  }
  elements.flowchart = document.getElementById("flowchart");
  elements.path = document.getElementById("path");
  elements.slideTitle = document.getElementById("slideTitle");
  elements.slideInstructions = document.getElementById("slideInstructions");

  for(i=0; i<4; ++i) {
    elements.choices[i].addEventListener("click", function() {
      loadNextSlide(this);
    });
  }

  document.getElementById("reset").addEventListener("click", reset);
  document.getElementById("back").addEventListener("click", back);
  document.getElementById("wholeChart").addEventListener("click", function() {
    wholeChartPage = window.open();
    wholeChartPage.document.write("<img src=\"./Pictures/Whole Flowchart.png\"></img>");
  });

  elements.path.style.display = "none";

  beforeFirstSlide.load();
};

//The slide class
function slide(choices, colors, image, slideTitle, slideInstructions) {
  this.choices = choices;
  //Add p tags around each item in choices[]
  for(i=0; i<4; ++i) {
    this.choices[i] = "<p>" + this.choices[i] + "</p>";
  }

  this.colors = colors;
  this.image = image;
  this.slideTitle = slideTitle;
  this.slideInstructions = slideInstructions;

  //This loads the slide onto the page
  this.load = function() {
    for(i=0; i<4; ++i) {
      elements.choices[i].innerHTML = this.choices[i];
      elements.choices[i].style.backgroundColor = this.colors[i];
    }
    elements.flowchart.setAttribute("src", this.image);
    elements.slideTitle.innerHTML = this.slideTitle;
    elements.slideInstructions.innerHTML = this.slideInstructions;
  }
};

//Add element to the path
function addChoice(choice, color) {
  if(elements.path.style.display != "inline-block") {
    elements.path.style.display = "inline-block";
  }
  choice = removeSpaces(choice);
  originalHTML = elements.path.innerHTML;
  newElement = "<div class=\"chosenItem " + choice + "\"><p>" + choice + "</p></div>"
  newHTML = originalHTML + newElement;
  elements.path.innerHTML = newHTML;
  list = document.getElementsByClassName(choice);
  list[list.length-1].style.backgroundColor = color;
  if(choice == "Admit") {
    set1 = false;
  }
}

//Convert underscores to spaces and vice-versa
function removeSpaces(str) {
  return str.replace(" ", "_");
}
function removeUnderscores(str) {
  return str.replace("_", " ");
}

//Listen for clicks and load the logically following slide
function loadNextSlide(element) {
  choice = element.innerHTML;
  choice = choice.replace("<p>", "");
  choice = choice.replace("</p>", "");

  if(choice == "") {
    return;
  }

  addChoice(choice, element.style.backgroundColor);

  choice = removeSpaces(choice);
  if(set1) {
    slide = slideChoices[choice];
  }
  else {
    slide = slideChoices2[choice];
  }
  slide.load();
}

//Reset the page
function reset() {
  elements.path.innerHTML = "";
  elements.path.style.display = "none";
  beforeFirstSlide.load();
}

//Back button
function back() {
  fullHTML = elements.path.children;
  len = fullHTML.length;
  if(len == 1) {
    beforeFirstSlide.load();
    elements.path.removeChild(elements.path.childNodes[elements.path.childNodes.length-1]);
    elements.path.style.display = "none";
    return;
  }
  else if(len == 0) {
    alert("You have to go somewhere before you can go back!");
    return;
  }
  slideChoices[fullHTML[len-2].children[0].innerHTML].load();
  elements.path.removeChild(elements.path.childNodes[elements.path.childNodes.length-1]);
}
