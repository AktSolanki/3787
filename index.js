var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
let a= "block";
let b = "none";
function onClickMenu1(){
    document.getElementById("menu-1").classList.toggle("icon");

    if(a=="block"){
      document.getElementsByClassName("container")[0].style.display = b;
      document.getElementsByClassName("nav-bar-2")[0].style.display = a;
      a = "none"; 
      b = "block";
    }
    else{
      document.getElementsByClassName("container")[0].style.display = b;
      document.getElementsByClassName("nav-bar-2")[0].style.display = a;
      a = "block";
      b = "none";
    }
};

function onclickleft11(){
    document.getElementsByClassName("right-1")[0].style.display = "block";
    document.getElementsByClassName("right-2")[0].style.display = "none";
    document.getElementsByClassName("right-3")[0].style.display = "none";
}
function onclickleft21(){
    document.getElementsByClassName("right-2")[0].style.display = "block";
    document.getElementsByClassName("right-1")[0].style.display = "none";
    document.getElementsByClassName("right-3")[0].style.display = "none";
}
function onclickleft31(){
    document.getElementsByClassName("right-3")[0].style.display = "block";
    document.getElementsByClassName("right-1")[0].style.display = "none";
    document.getElementsByClassName("right-2")[0].style.display = "none";
}
function onclickleft1(){
    document.getElementsByClassName("right-1")[1].style.display = "block";
    document.getElementsByClassName("right-2")[1].style.display = "none";
    document.getElementsByClassName("right-3")[1].style.display = "none";
}
function onclickleft2(){
    document.getElementsByClassName("right-2")[1].style.display = "block";
    document.getElementsByClassName("right-1")[1].style.display = "none";
    document.getElementsByClassName("right-3")[1].style.display = "none";
}
function onclickleft3(){
    document.getElementsByClassName("right-3")[1].style.display = "block";
    document.getElementsByClassName("right-1")[1].style.display = "none";
    document.getElementsByClassName("right-2")[1].style.display = "none";
}