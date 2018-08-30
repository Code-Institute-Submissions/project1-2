/*Multiple display windows code*/
var modalBtns = [...document.querySelectorAll(".box")];
modalBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});

window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};
/*Basic date display code*/
window.onload = function() {
	var d = new Date();
	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var n = weekday[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
	document.getElementById("date").innerHTML = n;
};