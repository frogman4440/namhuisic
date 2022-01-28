$(document).ready(function(){
	$(".menu>li").hover(function(){
		$(this).children(".submenu").stop().slideDown(500);
	},function(){
		$(this).children(".submenu").stop().slideUp(500);
	});

	//모달
	$(".best_hugi ul").click(function(){
		$(".modal").css("display","block"),
		$("#back").css("display","block")
	});
	$(".close").click(function(){
		$(".modal").css("display","none"),
		$("#back").css("display","none")
	});

});
$("#menu_btn").click(function(){
	$(".menu").fadeToggle(500);
	$(this).toggleClass("menuAni");
});

