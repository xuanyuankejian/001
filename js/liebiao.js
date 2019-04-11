$(function(){
	

$('.sousuo01').click(function(){
	$.get("http://47.104.244.134:8080/goodsbytid.do",{
		'tid':13,'page':1,'limit':'6'
	},function(data){
		if(data.code==200){
			console.log(data.data)
			}
		}
	)
});





















var data = {
				"10001": {
					id: 10001,
					title: "米家平衡车",
					price: "1999",
					imgurl: "../image/01.jpg"
				},
				"10002": {
					id: 10002,
					title: "米家互联网空调",
					price: "1999",
					imgurl: "../image/02.jpg"
				},
				"10003": {
					id: 10003,
					title: "米家电磁炉",
					price: "199",
					imgurl: "../image/03.jpg"
				},
				"10004": {
					id: 10004,
					title: "小米无线车充",
					price: "149",
					imgurl: "../image/04.jpg"
				},
				"10005": {
					id: 10005,
					title: "小爱同学",
					price: "249",
					imgurl: "../image/05.jpg"
				},
				"10006": {
					id: 10006,
					title: "小米K歌耳机",
					price: "349",
					imgurl: "../image/06.jpg"
				},
				"10007": {
					id: 10007,
					title: "尤克里里",
					price: "399",
					imgurl: "../image/07.jpg"
				},
				"10008": {
					id: 10008,
					title: "米家护腰靠枕",
					price: "79",
					imgurl: "../image/08.jpg"
				},
				"10009": {
					id: 10009,
					title: "米家摄像机",
					price: "399",
					imgurl: "../image/09.jpg"
				},
				"10010": {
					id: 10010,
					title: "小米路由器",
					price: "399",
					imgurl: "../image/10.jpg"
				},
				"10011": {
					id: 10011,
					title: "米家石英表",
					price: "99",
					imgurl: "../image/11.jpg"
				},
				"10012": {
					id: 10012,
					title: "小米无人机4K版",
					price: "2999",
					imgurl: "../image/12.jpg"
				},
				"10013": {
					id: 10013,
					title: "小米自动折叠伞",
					price: "79",
					imgurl: "../image/13.jpg"
				}
			};
			var aDiv = document.getElementById("oDiv");
			var aUl = document.getElementById("oUl");
			var str = "";
			
			//var abc = document.getElementById("oDiv").children[0];
			for(var id in data){
				str+=`
				<li>
				<a href = "xiangqing.html?id=${id}">
				<img src="${data[id].imgurl}">
				</a>
				<p>${data[id].title}</p>
				<p class="money">￥${data[id].price}</p>
				<input type="button" class="btn" value="加入购物车" date-id="${data[id].id}"/></li>
				`
			}
			aUl.innerHTML = str;
			



















})