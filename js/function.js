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
 		if(gettop >= 300 && gettop <= 1630){
 			$(".threeIphone").addClass("addEffect");
 			$(".ggtgInfor").addClass("getshow2");
 		}
 		if(gettop>=1100 && gettop <= 2350 ){
 			$(".MacBookPc").addClass("addEffect");
 			$(".hdchInfor").addClass("getshow2");
 		}
 		if(gettop>=1820 ){
 			$(".winXtui").addClass("addEffect");
 			$(".xxzbInfor").addClass("getshow2");
 		}
 		if(gettop >= 2355){
 			countdown();
 		}
	}
	$(window).scroll(function(){
 		getScrollTop();
	});

	$("#navList li a").click(function(){
		var e = $("#navList li a").index($(this));
		if(e == 0){
			$("html,body").animate({scrollTop:790},500);
		}
		if(e == 1){
			$("html,body").animate({scrollTop:1636},500);
		}
		if(e == 2){
			$("html,body").animate({scrollTop:2360},500);
		}
	});
});
