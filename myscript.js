$(document).ready(function() {
	
	
	$("#b1").click(function(){
		$(".show").show();
	});
	$(".right").click(function(){
		$(".correct").toggle();
	});
	$(".wrong").click(function(){
		$(".incorrect").toggle();
	});
	
});
