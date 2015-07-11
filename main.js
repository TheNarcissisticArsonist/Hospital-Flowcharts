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
  <img id=\"flowchart\" src=\"\"></img>\
  <br>\
  <br>\
  <div id=\"path\"></div>\
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
var testSlide = new slide(["Choice 1", "Choice 2", "Choice 3", "Choice 4"], ["red", "blue", "green", "yellow"], "http://i.imgur.com/MTh65ph.jpg", "Test Slide", "No instructions (yet).");

//Used to set up the first slide
//Later slides use a different function
function setUpBeginning() {
  elements.choices = [];
  for(i=0; i<4; i++) {
    elements.choices[i] = document.getElementById("choice"+String(i+1));
  }
  elements.flowchart = document.getElementById("flowchart");
  elements.path = document.getElementById("path");
  elements.slideTitle = document.getElementById("slideTitle");
  elements.slideInstructions = document.getElementById("slideInstructions");

  testSlide.load();
};

//The slide class
function slide(choices, colors, image, slideTitle, slideInstructions) {
  this.choices = choices;
  //Add p tags around each item in choices[]
  for(i=0; i<4; i++) {
    this.choices[i] = "<p>" + this.choices[i] + "</p>";
  }

  this.colors = colors;
  this.image = image;
  this.slideTitle = slideTitle;
  this.slideInstructions = slideInstructions;

  //This loads the slide onto the page
  this.load = function() {
    for(i=0; i<4; i++) {
      elements.choices[i].innerHTML = this.choices[i];
      elements.choices[i].style.backgroundColor = this.colors[i];
    }
    elements.flowchart.setAttribute("src", this.image);
    elements.slideTitle.innerHTML = this.slideTitle;
    elements.slideInstructions.innerHTML = this.slideInstructions;
  }
};
