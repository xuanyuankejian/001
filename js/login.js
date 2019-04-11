$(function(){
	var flag1 = false;
	var flag2 = false;
	var flag3 = true;
	
	//点击提交验证资料并注册
	$("#zhuce1").click(function(){
		if(flag1 && flag2 && flag3){
			$.post("http://47.104.244.134:8080/usersave.do",{
				"username":$(".zhanghao").val(),
				"password":$('.mima').val(),
				"email":$(".zhanghao").val(),
				sex:"男"
			},function(data){
				if(data.code == 0){
					alert("注册成功，现在可以登陆了。");
					location.href = "denglu.html";
					console.log(data);
				}
			})	
		}else{
			console.log("没有注册成功，请检查错误")
		}
	});
	
	
	
	
	
	
	
	
	//用户名密码验证,然后登陆
	$('#denglu1').click(function(){
		if($(".zhanghao").val()&&$('.mima').val()){
			$.post("http://47.104.244.134:8080/userlogin.do",{
				"name":$(".zhanghao").val(),
				"password":$('.mima').val()
			},function(data){
				if(data.code==0){
					location.href = "index.html";
					//$.cookie("token",data.data.token);  ///???
				}else{
					
				}
			})
		}else{
			$('input').css({'border':"1px solid red"})
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	$(".dianji").prop("checked","checked");
	
	$(".dianji").click(function(){
		if($(".dianji").prop("checked")!=true){
			
		$('.zhuce1').css("background","#ccc");
		
	}else{
		flag3 = false;
		$('.zhuce1').css("background","#e5004b");
		
	}
	})
	
	
	
	
	$('.yzm').click(function(){
		$(this).attr({src:"http://www.supumall.com/login/verifycode/id/1.html"})
	})
	
	
	
	$(".zhanghao").change(function(){
		
		$zhanghao = $(".zhanghao").val();
		$reg = /^1(3|4|5|7|8|9)\d{9}$/;
		if($reg.test($zhanghao)) {
			$(this).css({'border':"1px solid rgb(58,139,220)"});
			flag1 = true;
				}
		else{
			$(this).css({'border':"1px solid red"})
			
		}
	
	})
	
	$('.mima').change(function(){
		$reg =/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/;
		$mima = $('.mima').val();
		if($reg.test($mima)) {
			$(this).css({'border':"1px solid rgb(58,139,220)"});
			flag2 = true;
				}
		else{
			$(this).css({'border':"1px solid red"})
			
		}
	})
	
	

	
	
	
	
	
	
	
})