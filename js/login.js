	function go(){
		alert("请稍等，正在进行密码验证");
		url:"json/use.json",
		method:"GET",
		success:function (data) {
			let json=data.user;
			let bool=true;
			for(let i in json){
				if(json[i].name==$("#usrname").val()&&$("#pswd").val()==json[i]["pswd"]){
					bool=false;
					window.location="index.html";
				}
			}
			if(bool){
				alert("账号或密码错误");
			}
			}
	}
	function zc(){
		alert("你好，跳转界面");
		window.location="zhuce.html";
		return ture;
	}