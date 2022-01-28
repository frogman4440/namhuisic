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

var slideIndex = 0;

function slideFunc(){
	$(".back>li").removeClass("top");
	slideIndex++;
	var liIndex = slideIndex % 3;
	
	if(liIndex == 0){
		$(".back>li").eq(liIndex).addClass("top");
	}else if(liIndex == 1){
		$(".back>li").eq(liIndex).addClass("top");
	}else if(liIndex == 2){
		$(".back>li").eq(liIndex).addClass("top");
	}
}

var slideAuto = setInterval("slideFunc()",5000);

$(".wrap").hover(function(){
	clearInterval(slideAuto);
},function(){
	slideAuto = setInterval("slideFunc()",5000);

});

$(function(){
    $(".content").slice(0, 3).show();
    $("#load").click(function(e){ 
        e.preventDefault();
        $("div:hidden").slice(0, 3).show();
        if($("div:hidden").length == 0){
            alert("마지막 입니다.");
        }
    });
});