//获取容器
var pics=document.getElementById("pics");
var n=1;
//设置时钟控件
//匿名函数
setInterval(function(){
	if(n>4)
	n=1;
	pics.innerHTML="<img src='img/"+n+".jpg'>";
	n++;
},2500);
