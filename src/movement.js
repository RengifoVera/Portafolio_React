var container = document.getElementById("talent");
var ul1 = document.getElementById("ul1");
var ul2 = document.getElementById("ul2");
ul2.innerHTML = ul1.innerHTML;

function Movement() {
  if (container.scrollLeft >= ul1.scrollWidth){
    container.scrollLeft = 0 ;
  }else{
    container.scrollLeft++;
  }
}

var temp = setInterval(Movement,50);

container.onmouseover = function () {clearInterval(temp); }
container.onmouseout = function () {temp = setInterval(function Movement() {
  if (container.scrollLeft >= ul1.scrollWidth){
    container.scrollLeft = 0 ;
  }else{
    container.scrollLeft++;
  }
},50);}

