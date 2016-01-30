$(document).ready(function() {
	$(".toggle-button").click(function(){
		$(".overlay").addClass("show");
		$(".main-content").addClass("blur");
	});
	$(".overlay").click(function(){
		$(".overlay").removeClass("show");
		$(".main-content").removeClass("blur");
	});
});