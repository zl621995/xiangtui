/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-26 11:09:49
 * @version $Id$
 */
/*点击回到顶部*/
$(function(){

	var _suspensionBox = "<div class='suspensionBox'>"+
					        "<div id='getTop' class='getTop'></div>"+
					        "<a class='contactService' target='_blank' href='http://wpa.qq.com/msgrd?v=3&uin=1585997462&site=qq&menu=yes'>联系客服</a>"+
					    "</div>";
    $("body").append(_suspensionBox);

	$("body").on("click","#getTop",function(){
 		$("html,body").animate({scrollTop:0},500);
 	});
 	
 	$(window).scroll(function(){
 		var gettop = parseInt($(window).scrollTop());
 		// alert(gettop);
 		if(gettop > 20){

 			$(".suspensionBox").fadeIn(500);
 		}else{
 			$(".suspensionBox").fadeOut(500);
 		}
	});

	$(".businessEntr").click(function(){
		var html = "<div class='businessLoginBox'>"+
						"<div class='loginContent'>"+
							"<div class='closeBox'></div>"+
							"<div class='loginTitle clearfix'>"+
								"<div class='logo fl'><img src='images/logo.png' /></div>"+
								"<div class='loginWayTab fl'>"+
									"<div class='loginWayList accountPassword current fl'></div>"+
									"<div class='loginWayList verificationCode fl'></div>"+
								"</div>"+
							"</div>"+
							"<div class='loginInforBox'>"+
								"<div class='loginInputBox'><span class='userIcon'></span><input type='text' class='accountInput' placeholder='请输入账号' /><i class='closeText'></i></div>"+
								"<div class='loginTips'>*请输入正确的账号信息</div>"+
								"<div class='loginInputBox'><span class='lockIcon'></span><input type='text' placeholder='请输入密码' /></div>"+
								"<div class='loginTips'>*对不起，您输入的密码有误，请重新输入！</div>"+
								"<div class='loginBtn'>登录</div>"+
								"<div class='passwordInforBox'>"+
									"<div class='remenberPassword'><input type='checkbox' />记住密码</div>"+
								"</div>"+
							"</div>"+
							"<div class='loginInforBox' style='display: none'>"+
								"<div class='loginInputBox'><input type='text' placeholder='请输入手机号码' class='phoneNumberPut' /></div>"+
								"<div class='loginTips'>*请输入正确的手机号码</div>"+
								"<div class='verificationCodeBox'>"+
									"<input type='text' placeholder='请输入图中验证码' /><span class='ImgCodeBox'>DGJKS</span><a class='changeCodeImg'>看不清换一张</a>"+
								"</div>"+
								"<div class='verificationCodeBox'>"+
									"<input type='text' placeholder='请输入验证码' /><span class='getCodeBtn'>获取</span>"+
								"</div>"+
								"<div class='yuyinCode'>收不到短信？点击<a>语音验证码</a></div>"+
								"<div class='loginBtn'>登录</div>"+
							"</div>"+
							"<a class='registerNow' href='userRegister.html'>立即注册</a>"+
						"</div>"+
					"</div>";
		$("body").append(html);
	});

	$("body").on("click",".closeBox",function(){
		$(this).parent().parent().remove();
	});

	$("body").on("keyup",".accountInput",function(){
		var get_val = $(this).val();
		if(get_val == ""){
			$(".closeText").css("display","none");
		}else{
			$(".closeText").css("display","inline-block");
		}
	});

	$("body").on("blur",".accountInput",function(){
		var get_val = $(this).val();
		if(get_val == ""){
			$(".closeText").css("display","none");
		}else{
			$(".closeText").css("display","inline-block");
		}
	});
	

	$("body").on("click",".loginWayTab .loginWayList",function(){
		var e = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".loginInforBox").hide().eq(e).show();
	});


	$("body").on("click",".closeText",function(){
		$(this).siblings("input").val("");
		$(this).css("display","none");
	});


});

var runed = false;
var max = 3658;
function countdown(){
 	if(!runed){
		// var getnum = parseInt($(".registerNum").text());
		var num = 0;
		$(".registerNum").text(num);
		var setInt = setInterval(function(){
			var e = parseInt(Math.random()*40);
			num=num+e;
			$(".registerNum").text(num);
			if(num > max){
				clearInterval(setInt);
				$(".registerNum").text(max);
			}
		},10);
		runed = true;
 	}
 }
