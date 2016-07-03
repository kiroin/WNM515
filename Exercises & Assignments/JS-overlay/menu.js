$(document).ready(function() {
	$(".toggle-button").click(function(){
		$(".overlay, .overlay-box").addClass("show");
		$(".main-content").addClass("blur");
	});
	$(".overlay").click(function(){
		$(".overlay, .overlay-box").removeClass("show");
		$(".main-content").removeClass("blur");
	});
});
