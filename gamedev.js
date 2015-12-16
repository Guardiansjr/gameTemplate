$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/Gunplane.jpg')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").show();
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/bloodnew1.jpg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").hide();
		$("#goRight-Right2").hide();



	});

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/Terrorist.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft1.jpg')");
		$("#goLeft1").hide();
		$("#goLeft2").show();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft2.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft3.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/terrorist2.jpg')");
		$("#goBack").hide();
		$("#goRight1").hide();
		$("#goLeft1").hide();
		$("#goLeft5").show();
		$("#goRight-Straight1").hide();


	});

	$("#goLeft5").click(function() {
		$("#exploreBody").css("background-image", "url('img/planelanding.gif')");
		$("#gun").hide();
   	$("#goRight-Straight1").hide
   	$("#goLeft5").hide();	

	});
	
	
	$("#gun").click(function(){
		$("#gun").hide();
   		alert("You found a gun! (Now click the button on the right)");
});


});
