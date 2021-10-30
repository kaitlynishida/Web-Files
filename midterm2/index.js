let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let images = ["billie.jpg", "cage.jpg", "sza.jpg", "strokes.jpg", "doja.jpg", "rihanna.jpg", "tyler.jpg"];
let prevday;

for(i=0; i<document.getElementsByClassName("days").length; i++){
  document.getElementsByClassName("days")[i].innerHTML = "<h2>" + days[i] + "</h2>";
  document.getElementsByClassName("days")[i].addEventListener('click', setActive, false);
  document.getElementsByClassName("days")[i].id = days[i];


}

document.getElementById('Sunday').classList.toggle('active');
document.getElementById("music").innerHTML = "<img src='assets/" + images[0] + "' >";

function setActive(e){
  prevday = document.getElementsByClassName("active")[0].id;
  if(prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
  //  document.getElementById(days + "list").style.display = "none";
  }

  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
  }else{
    e.target.classList.toggle("active");
  }

  day = document.getElementsByClassName('active')[0].id;
  console.log(day);
  document.getElementById('music').innerHTML = "<img src='assets/" + images + ".jpg' >";

}

document.getElementsByClassName("button").addEventListener('click', buttonClicked);

function buttonClicked(){
  //console.log("hello world");
  alert("Great Job! Keep it up!! :)");
}
