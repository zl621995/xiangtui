/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-25 15:36:40
 * @version $Id$
 */

 $(function(){
 	// $(".menuList li").click(function(){
 	// 	$(this).addClass("current").siblings().removeClass("current");
 	// });
 	
 	$(".ourAdvantage .sloganList").mouseover(function(){
 		var e = $(".ourAdvantage .sloganList").index($(this));
 		$(".textBoradBox .textBorad").eq(e).addClass("currentBorad").siblings(".textBorad").removeClass("currentBorad");
 	}).mouseout(function(){
 		$(".textBoradBox .textBorad").removeClass("currentBorad");
 	});

 	var textBox = $(".seyTextMain .theySayTextBox");
 	$(".someCaseShow .moveChangeScale").mouseover(function(){
 		var e = $(".someCaseShow .moveChangeScale").index($(this));
 		textBox.eq(e).addClass("textBoxShow");
 	}).mouseout(function(){
 		var e = $(".someCaseShow .moveChangeScale").index($(this));
 		textBox.eq(e).removeClass("textBoxShow");
 	});

 	getScrollTop();
 	function getScrollTop(){
 		var gettop = parseInt($(window).scrollTop());
 		// alert(gettop);
 		if(gettop > 20){
 			$(".suspensionBox").fadeIn(500);
 		}else{
 			$(".suspensionBox").fadeOut(500);
 		}
 		
 		if(gettop > 500 && gettop < 1200){
 			$(".advantageList ul li").find("img").addClass("addEffect");
 		}else{
 			// $(".advantageList ul li").find("img").removeClass("addEffect");
 		}
 		if(gettop > 1100 && gettop < 2680){
 			$(".buildBox").find("img").addClass("addEffect");
 		}else{
 			// $(".buildBox").find("img").removeClass("addEffect");
 		}
 		if(gettop > 2000 && gettop < 3100){
 			$(".chinaPing").addClass("getBottom");
 			$(".tctravel").addClass("getUp");
 			$(".nvwang").addClass("getLeft");
 			$(".people1").addClass("getBottom");
 			$(".alibaba").addClass("getBottom");
 			$(".rzcenter").addClass("getRight");
 			$(".beibei").addClass("getUp");
 			$(".EF").addClass("getUp2");
 		}else{
 			// $(".chinaPing").removeClass("addEffect");
 		}
 		if(gettop >=  2990){
 			$(".companyLogoList li").find("img").eq(0).css("animation-delay","0.1s");
 			$(".companyLogoList li").find("img").eq(1).css("animation-delay","2.5s");
 			$(".companyLogoList li").find("img").eq(2).css("animation-delay","0.3s");
 			$(".companyLogoList li").find("img").eq(3).css("animation-delay","1.9s");
 			$(".companyLogoList li").find("img").eq(4).css("animation-delay","0.7s");
 			$(".companyLogoList li").find("img").eq(5).css("animation-delay","0.9s");
 			$(".companyLogoList li").find("img").eq(6).css("animation-delay","1.5s");
 			$(".companyLogoList li").find("img").eq(7).css("animation-delay","2.7s");
 			$(".companyLogoList li").find("img").eq(8).css("animation-delay","2.3s");
 			$(".companyLogoList li").find("img").eq(9).css("animation-delay","1.3s");
 			$(".companyLogoList li").find("img").eq(10).css("animation-delay","1.7s");
 			$(".companyLogoList li").find("img").eq(11).css("animation-delay","0.2s");
 			$(".companyLogoList li").find("img").eq(12).css("animation-delay","0.5s");
 			$(".companyLogoList li").find("img").eq(13).css("animation-delay","1.1s");
 			$(".companyLogoList li").find("img").eq(14).css("animation-delay","2.1s");
 			$(".companyLogoList li").find("img").addClass("addEffect");
 		}else{
 			// $(".buildBox").find("img").removeClass("addEffect");
 		}
 		if(gettop >= 3340){
 			countdown();
 		}else{
 			// runed = true;
 		}
 	}
 	$(window).scroll(function(){
 		getScrollTop();
 	});

 	var li_w = parseInt($(".companyLogoList li").outerWidth());
 	var li_num = $(".companyLogoList li").length;
 	var boxW = li_w * li_num;
 	$(".companyLogoList").width(boxW);

 	var movenum = li_num - 5;
 	var moveWidth = movenum * li_w;
 	var leftnum;
 	var ulBox = $(".companyLogoList");

 	$(".rightArrow").click(function(){
 		if(!ulBox.is(":animated")){
 			leftnum = parseInt(ulBox.css("margin-left"));
 			if(-leftnum < moveWidth){	
 				leftnum = leftnum-li_w;
 				ulBox.stop().animate({marginLeft:leftnum+"px"},500);
 				$(".leftArrow").fadeIn(500);
 			}
 			if(-leftnum == moveWidth ){
 				$(this).fadeOut(500);
 			}
 		}
 	});
 	$(".leftArrow").click(function(){
 		if(!ulBox.is(":animated")){
 			leftnum = parseInt(ulBox.css("margin-left"));
 			if(leftnum < 0){
 				$(this).fadeIn();
 				leftnum = leftnum+li_w;
 				ulBox.stop().animate({marginLeft:leftnum+"px"},500);
 				$(".rightArrow").fadeIn(500);
 			}
 			if(leftnum == 0){
 				$(this).fadeOut(500);
 			}
 		}
 	});
 	
 	
 });
