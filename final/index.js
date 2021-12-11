console.log('hello!');

let pics = 9;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('photos').innerHTML += "<img src='../final/assets/photography/" + pic + ".png'" + "class='photographypic' id='pic" + pic+ "' />";
}
