isLoggedin = false;
sessionEmail = "";
if (window.localStorage.getItem("sessionkey") === null){
	window.localStorage.setItem("sessionkey", "");
}
//serverURL = "http://ec2-52-27-134-239.us-west-2.compute.amazonaws.com:8080/users/";
serverURL = "http://localhost:3000/users/";
var userEmail = window.localStorage.getItem("sessionkey");
console.log(userEmail);
function checkLoggedin(){
	        if (window.localStorage.getItem("sessionkey") == ""){
				isLoggedin = false;
			}
			else {
				isLoggedin = true;
			}
}

//window.onload = checkLoggedin();


function login(){
		un = document.getElementById('username-login').value;
		pw = document.getElementById('password-login').value;
		if(un == "" && pw == ""){
			alert("Username and Password can't be blank");
		}else if(un == ""){
			alert("Username can't be blank");
		}else if(pw == ""){
			alert("Password cannot be blank");	
		}else{
			console.log("success");
		}
        $.ajax({
        				url: serverURL+'Moblogin?username='+un+'&password='+pw,
        				type: 'POST',
						success: function (data) {							
								window.localStorage.setItem("sessionkey", data);
								console.log(data);
								window.location = "dashboard.html";						
						},
        				//If there was no response from the server
        				error : function(jqXHR, textStatus,
        						errorThrown) {
        					console.log("Something really bad happened "
        							+ textStatus);
        				},
        				})
}


function redirect_to_dashbaord(){
	if (window.localStorage.getItem("sessionkey") != "" && window.localStorage.getItem("sessionkey") != "false"){
		window.location = 'dashboard.html';
	}
	else{
		window.location = 'index.html';
	}
}
function redirect_to_permission(){
		window.location = 'permission.html';
}
function redirect_to_othersdata_list(){
		window.location = 'others-data-list.html';
}
function redirect_to_index(){
		window.localStorage.setItem("sessionkey", "");
		window.location = 'index.html';
}
function redirect_to_register(){
		window.location = 'register.html';
}
function redirect_to_revoke(){
		window.location = 'revoke.html';
}
function redirect_to_permittedUsers(){
		window.location = 'permitted-users.html';
}
