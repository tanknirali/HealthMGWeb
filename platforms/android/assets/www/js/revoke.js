function revokePermission(){
	var $rp = $('#revoke-perm');
	var $pb = userEmail;
		
		var revokeData = {
			permissionTo: $rp.val(),
			permissionBy: $pb
		};
		console.log(revokeData);
		var revokeDataJson = JSON.stringify(revokeData);
		console.log(revokeDataJson);
		$.ajax({
			url: serverURL+'revoke',
			contentType: "application/json",
			type: 'POST',
			data: revokeDataJson,
			
			success: function (data) {							
					//window.localStorage.setItem("sessionkey", data);		
					window.location = "revoke.html";
					//document.getElementById("login-box").innerHTML = window.localStorage.getItem("sessionkey");						
			},
			//If there was no response from the server
			error : function(jqXHR, textStatus,
					errorThrown) {
				console.log("Something really bad happened "
						+ textStatus);
			}
		});
}