//sessionEmail = "";
if (window.localStorage.getItem("sessionkey") === null){
	window.localStorage.setItem("sessionkey", "");
}

var userEmail = window.localStorage.getItem("sessionkey");
console.log(userEmail);
function EmptyFname()
{
	var fullname = document.getElementById("name-reg").value;
	
	if(fullname == ""){
		alert("Name can't be blank");
	}
}
function EmptyEmail()
{
	var email = document.getElementById("email-reg").value;
	
	if(email == ""){
		alert("Email can't be blank");
	}
}
function ValidateUsername()
{
	var uname = document.getElementById("username-reg").value;
	
	if(uname == ""){
		alert("Username can't be blank");
	}
	else if(len<7 || len>20)
	{
		alert("Password should be between 7 to 20 characters");
	}
	else if(/\s/g.test(document.getElementById("password-reg").value))
	{
		alert("No space allowed in password");
	}
}
function ValidatePassword()
	{
			var username = document.getElementById("username-reg").value;
			var password = document.getElementById("password-reg").value.toLowerCase();

			var len = document.getElementById("password-reg").value.length;
			//var pwd = document.getElementById("password").value;
			if(password == ""){
				alert("Password can't be blank");
			}
			else if(len<7 || len>20)
			{
					alert("Password should be between 7 to 20 characters");
			}
			else if(/\s/g.test(document.getElementById("password-reg").value))
			{
					alert("No space allowed in password");
			}
			else if(password.match(username)&& username!="")
			{
					alert("Password should not contain UserID");
			}
	}
function chkPwd()
	{
		var pwd = document.getElementById("password-reg").value.toLowerCase();
		var vpwd = document.getElementById("password2-reg").value.toLowerCase();
		if(vpwd == ""){
			alert("Confirm Password cannot be blank");
		}
		else if(pwd!=vpwd)
		{	
			alert("Passwords doesn't match");
			
		}
	}	
function reg(){
		$fname = $('#name-reg');
		$uemail = $('#email-reg');
		$un = $('#username-reg');
		$pw = $('#password-reg');
		$pw2 = $('#password2-reg');
		

		var regData = {
				name: $fname.val(),
				email: $uemail.val(),
				username: $un.val(),
				password: $pw.val(),
				password2: $pw2.val()	
			};

			console.log(regData);
			var regDataJson = JSON.stringify(regData);
			console.log(regDataJson);
        $.ajax({
        				url: serverURL+'register',
						contentType: "application/json",
        				type: 'POST',
						data: regDataJson,
        		
						success: function (data) {	
								window.localStorage.setItem("sessionkey", data);
								console.log(data)
								redirect_to_dashbaord();
								//document.getElementById("login-box").innerHTML = window.localStorage.getItem("sessionkey");						
						},
        				//If there was no response from the server
        				error : function(jqXHR, textStatus,
        						errorThrown) {
        					console.log("Something really bad happened "
        							+ textStatus);
        				},
        		})
				
}