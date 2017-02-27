/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-29 18:40:44
 * @version $Id$
 */
$(function(){
	var _html1 = "<div class='videoPlayBox'>"+
				        "<iframe height='600px' width='1200px' src='http://player.youku.com/embed/XMTQ2MDk0OTMzNg==' frameborder=0 allowfullscreen></iframe>"+
				    "</div>";
    var _html2 = "<div class='videoPlayBox'>"+
			        "<iframe frameborder='0' width='1200px' height='600px' src='http://v.qq.com/iframe/player.html?vid=m0185n3ybrg&tiny=0&auto=0' allowfullscreen></iframe>"+
			    "</div>";

	$(".playBtn1").click(function(){
	    $("body").append(_html1);
	});

	$(".playBtn2").click(function(){
	    $("body").append(_html2);
	});

	$("body").on("click",".videoPlayBox",function(){
    	$(this).remove();
    });

    $("body").on("click",".videoPlayBox iframe",function(event){
    	event.stopPropagation();
    });

	// $(window).scroll(function(){
 // 		var gettop = parseInt($(window).scrollTop());
 // 		// alert(gettop);
 // 		if(gettop >= 418){
 // 			countdown();
 // 		}
	// });

});
