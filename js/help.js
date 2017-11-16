/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-28 16:01:02
 * @version $Id$
 */

$(function(){
	$(".navListCenter li a").click(function(){
		var e = $(".navListCenter li a").index($(this));
		$(".navListCenter li a").removeClass("current").eq(e).addClass("current");
		$(".helpDetailBox .detailInforList").hide();
		$(".helpDetailBox .detailInforList").eq(e).show();
	});
});