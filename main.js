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
<h3>Slide Title</h3>\
<br>\
<p>Some instructions (if necessary)</p>\
<br>\
<br>\
<div id=\"choice1\" class=\"choice\"><p>Choice 1</p></div>\
<div id=\"choice2\" class=\"choice\"><p>Choice 2</p></div>\
<div id=\"choice3\" class=\"choice\"><p>Choice 3</p></div>\
<div id=\"choice4\" class=\"choice\"><p>Choice 4</p></div>\
<br>\
<img id=\"flowchart\" src=\"http://i.imgur.com/MTh65ph.jpg\"></img>\
<br>\
<br>\
<div id=\"path\">\
  <div class=\"chosenItem\"><p>First Flowchart Section</p></div>\
  <div class=\"chosenItem\"><p>Second Flowchart Section</p></div>\
</div>\
"
document.getElementById("continue").addEventListener("click", function() {
  wholePage.innerHTML = mainPageFormat;
});
//http://www.w3schools.com/tags/tag_map.asp
//http://www.html-5-tutorial.com/map-and-area-elements.htm
