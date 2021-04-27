function regist(){
				/*var uname=document.getElementById("usrname").value;
				var len=uname.length;
				var bool=0;
				for(var i=0;i<len;i++){
					var ch=str.substr(i,1);
					if(ch>='0'&&ch<='9'||ch>='a'&&ch<='z'||ch>='A'&&ch<='Z'||ch=='_')
					{   
					   continue;
					   else{
						   alert("含有非法字符,请重新输入");
						   bool=0;
					   }
					}
				}
				var pswd=document.getElementById("pswd1").value;
				if(pswd.lenth<6){
					alert("密码不能少于6位，请重新输入");
					bool=0;
				}
				var pwd=document.getElementById("pswd2").value;
				if(pwd!=pswd)
				   {
				     alert("两次密码输入不一致，请重新输入")
				     bool=0;
				   }
				   }
				var email=document.getElementById("email").value;
				if(uemail.indexOf("@")==-1){
					alert("邮箱必须包括@符号，请重新输入");
					bool=0;
				}
				if(bool==0){
					document.getElementById("usrname").value=" ";
					document.getElementById("email").value=" ";
					document.getElementById("pswd1").value=" ";
					document.getElementById("pswd2").value=" ";
					return false;
				}*/
				alert("注册成功，返回登陆界面登陆")
			 window.location="login.html";
		     return ture;
				
			}