
var counterPlaceHolder = document.getElementById("counter-placeholder");
var btnIncrement = document.getElementById("btn-increment");
var btnDecrement = document.getElementById("btn-decrement");

var number = 0;
btnIncrement.addEventListener("click", function(){
  if(number <=49){
number++;
}

counterPlaceHolder.innerHTML = number;


});

btnDecrement.addEventListener("click", function(){
if(number >0){
  number--;}

counterPlaceHolder.innerHTML = number;
});
