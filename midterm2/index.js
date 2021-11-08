let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let images = ["billie.jpg", "cage.jpg", "sza.jpg", "strokes.jpg", "doja.jpg", "rihanna.jpg", "tyler.jpeg"];
let prevday;

for(i=0; i<document.getElementsByClassName("days").length; i++){
  document.getElementsByClassName("days")[i].innerHTML = "<h2>" + days[i] + "</h2>";
  document.getElementsByClassName("days")[i].addEventListener('click', setActive, false);
  document.getElementsByClassName("days")[i].id = days[i];


}

document.getElementById('Sunday').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src='assets/" + images[0] + "' >";

function setActive(e){
  prevday = document.getElementsByClassName("active")[0].id;
  if(prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday.toLowerCase() + "sc").classList.toggle("active");
  //  document.getElementById(days + "list").style.display = "none";
  }

  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
  }else{
    e.target.classList.toggle("active");
  }

  day = document.getElementsByClassName('active')[0].id;
  document.getElementById(day.toLowerCase() + "sc").classList.toggle("active");
  console.log(day.toLowerCase() + "sc");
  day = days.indexOf(day);
  console.log(day);
  document.getElementById('image').innerHTML = "<img src='assets/" + images[day] + " ' >";

}

document.getElementById("one").addEventListener('click', buttonClicked);
document.getElementById("two").addEventListener('click', buttonClicked);
document.getElementById("three").addEventListener('click', buttonClicked);
document.getElementById("four").addEventListener('click', buttonClicked);
document.getElementById("five").addEventListener('click', buttonClicked);
document.getElementById("six").addEventListener('click', buttonClicked);
document.getElementById("seven").addEventListener('click', buttonClicked);

function buttonClicked(){
  //console.log("hello world");
  alert("Great Job! Keep it up!! :)");
}
