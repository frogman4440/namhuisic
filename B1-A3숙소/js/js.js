$(document).ready(function(){
	$(".menu>li").hover(function(){
		$(this).children(".submenu").stop().slideDown(500);
	},function(){
		$(this).children(".submenu").stop().slideUp(500);
	});
	
});
$("#menu_btn").click(function(){
	$(".menu").fadeToggle(500);
	$(this).toggleClass("menuAni");
});


