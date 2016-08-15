
function givePermission(){
		var $pt = $('#permission-To');
		var $pb = userEmail;
		//var $steps = "";
		steps = document.getElementById('param_steps');
		heartrate = document.getElementById('param_heartrate');
		distance = document.getElementById('param_distance');
		calories = document.getElementById('param_calories');
		//document.getElementById('param_steps').onclick = function() {
			// access properties using this keyword
			if ( steps.checked ) {
				// if checked ...
				steps.value = true;
				//alert( steps.value );
			}else{
				steps.value = false;
			}
			if ( heartrate.checked ) {
				// if checked ...
				heartrate.value = true;
				//alert( heartrate.value );
			}else{
				heartrate.value = false;
			}
			if ( distance.checked ) {
				// if checked ...
				distance.value = true;
				//alert( distance.value );
			}else{
				distance.value = false;
			}
			if ( calories.checked ) {
				// if checked ...
				calories.value = true;
				//alert( calories.value );
			}else{
				calories.value = false;
			}
		
		console.log("steps "+steps);
		var permData = {
			permissionTo: $pt.val(),
			permissionBy: $pb,
			steps: steps.value,
			heartrate: heartrate.value,
			distance: distance.value,
			calories: calories.value
		};
		//alert("Permission "+permData);
		var permDataJson = JSON.stringify(permData);
		console.log("permitted data in JSON"+permDataJson);
		$.ajax({
			url: serverURL+'patient',
			contentType: "application/json",
			type: 'POST',
			data: permDataJson,
			
			success: function (data) {							
					//window.localStorage.setItem("sessionkey", data);		
					window.location = "permission.html";
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
$(function (){
		var $listPersons = $('#listPersons');
		
        $.ajax({
			url: serverURL+'permission',
			contentType: "application/json",
			type: 'GET',
			
			success: function (listPersons){
				console.log('success',listPersons);
				var result = listPersons['Patients'];
				for (i = 0; i < result.length; i++)
				{
						console.log(result[i]['permissionTo']);
						$listPersons.append('<li class="list-group-item">'+result[i]['permissionTo']+'</li>');
				}
				
				
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Something really bad happened "+ textStatus);
			}
		});
});