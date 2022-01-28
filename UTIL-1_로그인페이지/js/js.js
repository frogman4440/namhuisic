$(document).ready(function(){
	$(".menu>li").hover(function(){
		$(this).children(".submenu").stop().slideDown(500);
	},function(){
		$(this).children(".submenu").stop().slideUp(500);
	});

		//모달
		$(".ezez").click(function(){
			$(".popup").css("display","block"),
			$(".modada").css("display","block")
		});
		$(".close").click(function(){
			$(".modal").css("display","none"),
			$(".modada").css("display","none")
		});

		$(".com").click(function(){
			alert("로그인완료!");
		});
});
$("#menu_btn").click(function(){
	$(".menu").fadeToggle(500);
	$(this).toggleClass("menuAni");
});