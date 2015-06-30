//Set up the first part of the page, with instructions and such
var wholePage = document.getElementById("wholePage");
var instructions =
"\
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
document.getElementById("continue").addEventListener("click", function() {
  
});
