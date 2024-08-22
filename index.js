var dm = document.getElementById("darkmode");
var sd = document.getElementById("side");
var mainscr = document.getElementById("mainscreen");
var redg = document.getElementById("redbg");
var blueg = document.getElementById("bluebg");
var mixedg = document.getElementById("mixed");
var chtext = document.getElementById("hhh");


function dark() {
  darkmode.value = " darkmode-off ";
  side.style.color = "white";
  side.style.backgroundImage=" linear-gradient(to right,rgba(0, 0, 0),rgb(0, 0, 0)) ";
  mainscreen.style.backgroundImage =" linear-gradient(to right,rgba(0, 0, 0),rgb(0, 0, 0)) ";
}

function offd() {
  darkmode.value = " darkmode-on  ";
  side.style.backgroundImage =
    " linear-gradient(to right,rgb(124, 219, 187), rgb(48, 113, 100) )";
  mainscreen.style.backgroundImage =" linear-gradient(to right,rgb(124, 219, 187), rgb(48, 113, 100) )";

}

function redon() {
  side.style.backgroundImage ="linear-gradient(to right,rgb(24, 1, 97),rgb(79, 23, 135),rgb(235, 54, 120),rgb(251, 119, 60))";
  mainscreen.style.backgroundImage = "linear-gradient(to right,rgb(24, 1, 97),rgb(79, 23, 135),rgb(235, 54, 120),rgb(251, 119, 60))";
}
function mixedon() {
  side.style.backgroundImage ="linear-gradient(to right,rgb(0, 224, 172),rgb(13, 78, 62),rgb(67, 81, 75)) ";
  mainscreen.style.backgroundImage ="linear-gradient(to right,rgb(0, 224, 172),rgb(13, 78, 62),rgb(67, 81, 75)) ";
}
function blueon() {
  side.style.backgroundImage ="linear-gradient(to right,rgb(98, 35, 154),rgb(77, 77, 77),rgb(69, 53, 85)) ";
  mainscreen.style.backgroundImage ="linear-gradient(to right,rgb(98, 35, 154),rgb(77, 77, 77),rgb(69, 53, 85))";
}
function offcc() {
  side.style.backgroundImage = "";
  side.style.color = "";
  mainscreen.style.backgroundImage =" linear-gradient(to right,rgb(124, 219, 187), rgb(48, 113, 100) )";
}
function callhome()
{
  hhh.innerText="Home"
}
function callaca() 
{
  hhh.innerText = "Academics";
}

function callskills() 
{
    hhh.innerText = "Skills";
}

function callproject()
{
    hhh.innerText = "Project and Achievement";
}

function callabout()
{
    hhh.innerText = "About";
}























