sessionEmail = "";
if (window.localStorage.getItem("sessionkey") === null){
	window.localStorage.setItem("sessionkey", "");
}

var userEmail = window.localStorage.getItem("sessionkey");
console.log(userEmail);

function ValidatePassword()
	{
			var username = document.getElementById("username-reg").value;
			var password = document.getElementById("password-reg").value.toLowerCase();

			var len = document.getElementById("password").value.length;
			//var pwd = document.getElementById("password").value;
			if(len<7 || len>20)
			{
				alert("Password should be between 7 to 20 characters");
			}
			else if(/\s/g.test(document.getElementById("password").value))
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
		if(pwd!=vpwd)
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
		
		if($fname.val() == "" && $uemail.val() == "" && $un.val() == "" && $pw.val() == "" && $pw2.val() == ""){
			alert("Please enter values for all fields");
		}else if($fname.val() == ""){
			alert("Name cannot be blank ");
		}else if($uemail.val() == ""){
			alert("Email cannot be blank ");
		}else if($un.val() == ""){
			alert("Username cannot be blank ");
		}else if($pw.val() == ""){
			alert("Password cannot be blank ");
		}else if($pw2.val() == ""){
			alert("Confirm Password cannot be blank ");
		}else{
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
		}
		
		
		
        $.ajax({
        				url: serverURL+'register',
						contentType: "application/json",
        				type: 'POST',
						data: regDataJson,
        		
						success: function (data) {
								//window.localStorage.setItem("sessionkey", data);	
								window.localStorage.setItem("sessionkey", data);
								console.log(data)
								window.location = "dashboard.html";
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