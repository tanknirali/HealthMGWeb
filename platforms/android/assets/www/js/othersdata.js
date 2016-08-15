$(function (){
		var $othersData = $('#othersData');
		//var $cu = userEmail;
		
        $.ajax({
			url: serverURL+'others-data',
			contentType: "application/json",
			type: 'GET',
			
			success: function (othersData){
				console.log('success',othersData);
				var result = othersData['Patients']
				for (i = 0; i < result.length; i++)
				{
						console.log(result[i]['permissionBy']);
						//$othersData.append('<li class="list-group-item"><a href="others-data.html" onclick="redirect_to_othersdata()" style="color: black;">'+result[i]['permissionBy']+'</a></li>');
						$othersData.append('<li class="list-group-item">'+result[i]['permissionBy']+'<div class="col-xs-6 "><button class="btn btn-primary btn-lg btn-block" id="other-cal-button" title="'+result[i]['permissionBy']+'">Calories</button> <button class="btn btn-primary btn-lg btn-block" id="other-step-button" title="'+result[i]['permissionBy']+'">Steps Taken</button> </div><div class="col-xs-6 "><button class="btn btn-primary btn-lg btn-block" id="other-heartrate-button" title="'+result[i]['permissionBy']+'">Heart-rate</button> <button class="btn btn-primary btn-lg btn-block" id="other-distance-button" title="'+result[i]['permissionBy']+'">Distance</button></div></li>');
				}
				/*
				$.each(listPersons, function(i){
					//var $Persons = JSON.stringify(listPerson);
					//$listPersons.append('<li>' +permissionTo+ '</li>');
					console.log(listPersons['Patients'][i]);
					//console.log(i+' '+permissionTo);
					//console.log('success',listPersons.field[i]);
					//permissionTo);
					//console.log('success',JSON.stringify(listPerson));
				}); */
				
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Something really bad happened "+ textStatus);
			}
		});
});
