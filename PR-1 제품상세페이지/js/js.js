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


$(window).scroll(function(){
	var scrollTop = $(document).scrollTop();
	if (scrollTop < 830) {
	 scrollTop = 830;
	}
	$("#followquick").stop();
	$("#followquick").animate( { "top" : scrollTop });
	});


	//버튼
	$(function(){
		$(".minus").click(function(){
			var number_cnt = $("#number_cnt").text();

			var min = parseInt(number_cnt) - 1;
			$("#number_cnt").text(min);
		});
		$(".plus").click(function(){
			var number_cnt = $("#number_cnt").text();
			var min = parseInt(number_cnt) + 1;
			$("#number_cnt").text(min);
		});
	});

	