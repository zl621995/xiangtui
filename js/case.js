/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-28 09:33:44
 * @version $Id$
 */
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-26 11:43:12
 * @version $Id$
 */
$(function(){
	getScrollTop();
	function getScrollTop(){
		var gettop = parseInt($(window).scrollTop());
 		// alert(gettop);
 		if(gettop >= 180 && gettop <= 1310){
 			$(".financeImg").addClass("addEffect");
 			$(".financeIndustry .detailInforBox").addClass("getshow2");
 		}
 		if(gettop>=780 && gettop <= 1886 ){
 			$(".pinganImg").addClass("addEffect");
 			$(".insuranceIndustry .detailInforBox").addClass("getshow2");
 		}
 		if(gettop>=1300 && gettop <= 2520 ){
 			$(".travelImg").addClass("addEffect");
 			$(".travelIndustry .detailInforBox").addClass("getshow2");
 		}
 		if(gettop>=1816 && gettop <= 3105 ){
 			$(".businessImg").addClass("addEffect");
 			$(".businessIndustry .detailInforBox").addClass("getshow2");
 		}
 		if(gettop>=2410 && gettop <= 3575){
 			$(".ruiciImg").addClass("addEffect");
 			$(".medicalCareIndustry .detailInforBox").addClass("getshow2");
 		}
 		if(gettop>=3145 && gettop <= 4252){
 			$(".eduImg").addClass("addEffect");
 			$(".educationIndustry .detailInforBox").addClass("getshow2");
 		}
 		if(gettop>=3652){
 			$(".mediaImg").addClass("addEffect");
 			$(".mediaIndustry .detailInforBox").addClass("getshow2");
 		}
 		if(gettop >= 4050){
 			countdown();
 		}
	}
	$(window).scroll(function(){
 		getScrollTop();
	});

	$(".people1").click(function(){
		$("html,body").animate({scrollTop:725},1000);
	});
	$(".tctravel").click(function(){
		$("html,body").animate({scrollTop:2015},1000);
	});
	$(".chinaPing").click(function(){
		$("html,body").animate({scrollTop:1435},1000);
	});
	$(".rzcenter").click(function(){
		$("html,body").animate({scrollTop:3200},1000);
	});
	$(".EF").click(function(){
		$("html,body").animate({scrollTop:3800},1000);
	});
	$(".nvwang").click(function(){
		$("html,body").animate({scrollTop:4378},1000);
	});
	$(".alibaba").click(function(){
		$("html,body").animate({scrollTop:2608},1000);
	});
	$(".beibei").click(function(){
		$("html,body").animate({scrollTop:2608},1000);
	});
});

