/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-30 13:18:11
 * @version $Id$
 */
$(function(){
	$(".leftMenuNavigation a").click(function(){
		var e = $(".leftMenuNavigation a").index($(this));
		$(".leftMenuNavigation a").removeClass("current").eq(e).addClass("current");
	});
});
