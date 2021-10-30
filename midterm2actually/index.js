let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let images = ["billie.jpg", "cage.jpg", "sza.jpg", "strokes.jpg", "doja.jpg", "rihanna.jpg", "tyler.jpg"];

for(i=0; i<document.getElementsByClassName("days").length; i++){
  document.getElementsByClassName("days")[i].innerHTML = "<h2>" + days[i] + "</h2>";
  document.getElementsByClassName("days")[i].addEventListener('click', setActive, false);
  document.getElementsByClassName("days")[i].id = days[i];

  document.getElementById("sunday").addEventListener('click', setActiveButton);
  document.getElementById("monday").addEventListener('click', setActiveButton);
  document.getElementById("tuesday").addEventListener('click', setActiveButton);
  document.getElementById("wednesday").addEventListener('click', setActiveButton);
  document.getElementById("thursday").addEventListener('click', setActiveButton);
  document.getElementById("friday").addEventListener('click', setActiveButton);
  document.getElementById("saturday").addEventListener('click', setActiveButton);
}

function setActiveButton(e){
  e.target.classList.toggle("active");
}
