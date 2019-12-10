$(document).ready(function() {

// all jquery and some javascript commands go here

$("#page1_green").mouseenter(function() {
	$(".side1").fadeIn(300);
});
$("#page1_green").mouseleave(function() {
	$(".side1").fadeOut(300);
});



$("#page2_green").mouseenter(function() {
	$(".side2").fadeIn(300);
});
$("#page2_green").mouseleave(function() {
	$(".side2").fadeOut(300);
});



$("#page3_green").mouseenter(function() {
	$(".side3").fadeIn(300);
});
$("#page3_green").mouseleave(function() {
	$(".side3").fadeOut(300);
});

});