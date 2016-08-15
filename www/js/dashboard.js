$(function (){
	var $disp_fname = $('#disp_fname');
	$.ajax({
			url: serverURL+'user-fullname',
			contentType: "application/json",
			type: 'GET',
			
			success: function (disp_fname){
				console.log('success',disp_fname);
				
				var result = disp_fname;
				for (i = 0; i < result.length; i++)
				{
					console.log(result[i]['name']);
					//$listPersons.append('<li class="list-group-item">'+result[i]['permissionTo']+'</li>');
					$disp_fname.append('<label>'+disp_fname['name']+'</label>');
				}
				//
				//var fname = data['Patients'];	
				
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Something really bad happened "+ textStatus);
			}
		});
});