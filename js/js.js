$(function(){
	
	
	$('.liebiao').mouseenter(function(){
		$(this).find(".ODIV").stop().show(300).prev().css({'background':'#fff','border-left':'2px solid #ccc'}).find('a').css({'color':'#e5004a'}).find('span').css('background-position','-35px -152px')
	});
	
	$('.liebiao').mouseleave(function(){
		$(this).find(".ODIV").stop().hide().prev().css({'background':'#e5004a','border-left':'none'}).find('a').css({"color": "rgb(255, 255, 255)"}).find('span').css('background-position','0px -152px')
	});
	
	
});



function miaoshashijia(){
		
	
	
	
	
	var oone = document.getElementsByClassName("shijian01")[0];
	var xiaoshijian = document.getElementsByClassName("xiaoshijian");
	var oDate1 = new Date('2019-4-01 00:00:00');
	var oDate2 = new Date('2019-4-16 10:30:00');
			function format0(num) {
				/*return num<10?"0"+num:num;*/
				if(num < 10) {
					num = "0" + num;
				}
				return num;
			}
			var count = 0;
			
			
			function miaoshakaishi(){
				var miao = (oDate2 - oDate1) / 1000;
				miao = miao - count;
				count++;
				var shi = Math.floor(miao / 3600%24);
				var fen = Math.floor(miao / 60 % 60);
				var day = Math.floor(miao / 3600/24);
				var s = Math.floor(miao % 60);
				
				for(var i = 0;i<xiaoshijian.length;i++){
					xiaoshijian[i].innerHTML = "还有：" +format0(day)+"天"+ format0(shi) + " 时 " + format0(fen) + " 分 " + format0(s)+" 秒 ";
				}
				
				
				
				oone.innerHTML = "倒计时剩余：" + format0(shi) + " 时 " + format0(fen) + " 分 " + format0(s)+" 秒 ";

				if(miao<=0){
					clearInterval(time);
					oone.innerHTML="秒杀结束！"
				}
			};
			miaoshakaishi();
			
			
			
			var time = setInterval(miaoshakaishi, 1000);
	}


















function Lunbo(id) {
	this.abc = document.getElementById(id);
	this.i = 0;

	this.zhanshi = function(date) {
		var str = "";
		var str2 = "";
		for(let i = 0; i < date.length; i++) {
			str += `<li><a href="#"><img src="${date[i].imgurl}"></a></li>`
		}
		str += `<li><a href="#"><img src="${date[0].imgurl}"></a></li>`
		this.uul = document.createElement("ul");

		this.uul.innerHTML = str;
		this.abc.appendChild(this.uul);

		this.aLi = this.uul.children;
		this.len = this.aLi.length;
		this.uul.style.width = this.aLi[0].offsetWidth * this.len + "px";

	}

	this.zuoyou = function() {
		let aDiv = document.createElement("div");
		aDiv.innerHTML = "<span>&lt;</span><span>&gt;</span>";
		this.abc.appendChild(aDiv);
		this.btns = aDiv.children;
		this.btns[0].style.display = "none";
		this.btns[1].style.display = "none";
		this.btns[0].onclick = () => {
			this.i--;
			if(this.i == -1) {
				this.uul.style.left = -this.aLi[0].offsetWidth * (this.len - 1) + "px";
				this.i = this.len - 2;
			}
			startMove(this.uul, {
				"left": -this.aLi[0].offsetWidth * this.i
			});
			for(let i = 0; i < this.numsLi.length; i++) {
				this.numsLi[i].className = "";
			}
			if(this.i == this.len - 1) {
				this.numsLi[0].className = "bianhua";
			} else {
				this.numsLi[this.i].className = "bianhua";
			}
			return false;
		}

		this.btns[1].onclick = () => {
			this.miao();

			for(let i = 0; i < this.numsLi.length; i++) {
				this.numsLi[i].className = "";
			}
			if(this.i == this.len - 1) {
				this.numsLi[0].className = "bianhua";
			} else {
				this.numsLi[this.i].className = "bianhua";
			}
			return false;
		}
	}

	this.jiaobiao = function() {
		let aUl = document.createElement("ul");
		aUl.innerHTML = "<li></li><li></li><li></li><li></li><li></li><li></li>";
		this.abc.appendChild(aUl);

		this.numsLi = aUl.children;
		this.numsLi[0].className = "bianhua";

		for(let i = 0; i < this.numsLi.length; i++) {
			this.numsLi[i].onclick = () => {
				this.i = i;
				startMove(this.uul, {
					"left": -this.aLi[0].offsetWidth * this.i
				})
				for(let i = 0; i < this.numsLi.length; i++) {
					this.numsLi[i].className = "";
				}
				this.numsLi[i].className = "bianhua";
			}
		}

	}

	this.miao = function() {
		this.i++;
		if(this.i == this.len) {
			this.i = 1;
			this.uul.style.left = 0;
		}
		startMove(this.uul, {
			"left": -this.aLi[0].offsetWidth * this.i
		})
	}

	//默认不动他，就滚动起来
	this.time = setInterval(() => {
		this.miao();

		for(let i = 0; i < this.numsLi.length; i++) {
			this.numsLi[i].className = "";
		}
		if(this.i == this.len - 1) {
			this.numsLi[0].className = "bianhua";
		} else {
			this.numsLi[this.i].className = "bianhua";
		}

	}, 3000)

	//鼠标移入停止计时器
	this.abc.onmouseover = () => {

		this.btns[0].style.display = "block";
		this.btns[1].style.display = "block";
		clearInterval(this.time);
	}

	//鼠标移出打开计时器
	this.abc.onmouseout = () => {
		this.btns[0].style.display = "none";
		this.btns[1].style.display = "none";
		this.time = setInterval(() => {
			this.miao();

			for(let i = 0; i < this.numsLi.length; i++) {
				this.numsLi[i].className = "";
			}
			if(this.i == this.len - 1) {
				this.numsLi[0].className = "bianhua";
			} else {
				this.numsLi[this.i].className = "bianhua";
			}

		}, 3000)
	}

}

$(function(){
				var flag = true;
				$(window).scroll(function(){
					var scrollTop = $(this).scrollTop();
					if(scrollTop>1400){
						$("#floorNav").fadeIn();
					}else{
						$("#floorNav").fadeOut();
					}
					
					
					if(flag){
					$(".home_floor >div").each(function(){
						if(scrollTop > $(this).offset().top - $(this).outerHeight()/2){
							var index = $(this).index();
							
							console.log(this);
							$("#floorNav li").eq(index).addClass("hover").siblings().removeClass("hover");
						}
					})
					}
					
				});
				
				$("#floorNav li:not(:last)").click(function(){
					var index = $(this).index();
					flag = false;
					$(this).addClass("hover").siblings().removeClass("hover");
					$("body,html").stop().animate({"scrollTop":$(".home_floor >div").eq(index).offset().top},500,function(){
						flag = true;
					});
				});
				$("#floorNav li:last").click(function(){
					$("body,html").stop().animate({"scrollTop":0},500);
				})
			})

function Lunbo001(id) {
	this.abc1 = document.getElementById(id);
	this.abc = this.abc1.children[0];
	this.i = 0;
	this.adiv = this.abc1.children[1];

	this.aLi = this.abc.children;

	this.len = this.aLi.length;
	this.miao = function() {
		this.i++;
		if(this.i == this.len - 4) {
			this.i = 1;
			this.abc.style.left = 0;
		}
		startMove(this.abc, {
			"left": -this.aLi[0].offsetWidth * this.i
		})
	}

	this.zuoyou = function() {
		this.adiv.innerHTML = "<span>&lt;</span><span>&gt;</span>";
		this.btns = this.adiv.children;
		this.btns[0].onclick = () => {

			this.i--;
			if(this.i == -1) {
				this.i = this.len - 6;
				this.abc.style.left = -this.aLi[0].offsetWidth * (this.len - 5) + "px";
			}
			startMove(this.abc, {
				"left": -this.aLi[0].offsetWidth * this.i
			})
			return false;
		}

		this.btns[1].onclick = () => {
			this.miao();

			return false;
		}
	}

	//默认不动他，就滚动起来
	this.time = setInterval(() => {
		this.miao();

	}, 2000)

	//鼠标移入停止计时器
	this.abc1.onmouseover = () => {

		clearInterval(this.time);
	}

	//鼠标移出打开计时器
	this.abc1.onmouseout = () => {
		this.time = setInterval(() => {
			this.miao();

		}, 2000)
	}

}


function Xiaolunbo(id) {
	this.abc1 = document.getElementById(id);
	this.abc = this.abc1.children[0];
	this.i = 0;
	this.adiv = this.abc1.children[1];

	this.aLi = this.abc.children;

	this.len = this.aLi.length;
	this.miao = function() {
		this.i++;
		if(this.i == this.len) {
			this.i = 1;
			this.abc.style.left = 0;
		}
		startMove(this.abc, {
			"left": -this.aLi[0].offsetWidth * this.i
		})
	}

	this.zuoyou = function() {
		this.adiv.innerHTML = "<span>&lt;</span><span>&gt;</span>";
		this.btns = this.adiv.children;
		this.btns[0].onclick = () => {

			this.i--;
			if(this.i == -1) {
				this.i = this.len - 2;
				this.abc.style.left = -this.aLi[0].offsetWidth * (this.len - 1) + "px";
			}
			startMove(this.abc, {
				"left": -this.aLi[0].offsetWidth * this.i
			})

			return false;
		}

		this.btns[1].onclick = () => {
			this.miao();

			return false;
		}
	}

	//默认不动他，就滚动起来
	this.time = setInterval(() => {
		this.miao();

	}, 2000)

	//鼠标移入停止计时器
	this.abc1.onmouseover = () => {

		clearInterval(this.time);
	}

	//鼠标移出打开计时器
	this.abc1.onmouseout = () => {
		this.time = setInterval(() => {
			this.miao();

		}, 2000)
	}

}