$(document).ready(function() {

$("#self-cal-button").click(function(){
    loadCal(window.localStorage.getItem("sessionkey"));
});

$("#self-step-button").click(function(){
    loadCal(window.localStorage.getItem("sessionkey"));
});

$("#self-heartrate-button").click(function(){
    loadCal(window.localStorage.getItem("sessionkey"));
});

$("#self-distance-button").click(function(){
    loadCal(window.localStorage.getItem("sessionkey"));
});
});

function getUserID(emailid){
	var result = null;
	var sendData = {
			email: emailid	
		};
		sendData = JSON.stringify(sendData);	
 $.ajax({ 
						url: serverURL+'getUserID',
						async: false,
						contentType: "application/json",
        				type: 'POST',
						data: sendData,
						success: function (userID) {
							console.log(userID);
							result = userID;
						},

        				error : function(jqXHR, textStatus,
        						errorThrown) {
        					console.log("Something really bad happened "
        							+ textStatus);
        				},
        				});
	return result;
	
}


function loadCal(Sessemail){
	console.log(Sessemail);
	var user_details = getUserID(Sessemail);
	var sendData = {
			userkey: user_details['_id']	
		};
		sendData = JSON.stringify(sendData);
		console.log(sendData);
	
 $.ajax({
        				url: serverURL+'getAllCal',
						contentType: "application/json",
        				type: 'POST',
						data: sendData,
						success: function (result) {							
								console.log(result);	


	$(function() {

		// We use an inline data source in the example, usually data would
		// be fetched from a server

		var data = [],
			totalPoints = 365;

		function parseData() {
			if (data.length > 0)
				data = data.slice(1);

			// Do a random walk
			var z = 0;
			
			while ((data.length < totalPoints) && (data.length < result.length )) {
				//console.log(result[z]['calories']);
				data.push(result[z]['calories']);
				z = z + 1;
			}

			// Zip the generated y values with the x values
            var res = [];
			for (var i = 0; i < data.length; ++i) {
				var d = Date.parse(result[i]['timeStamp']);
				console.log(result[i]['timeStamp']);
				res.push([d, 100 * data[i]]);
			}
			return res;
		}

		// Set up the control widget

		var updateInterval = 1000;
		$("#updateInterval").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1) {
					updateInterval = 1;
				} else if (updateInterval > 2000) {
					updateInterval = 2000;
				}
				$(this).val("" + updateInterval);
			}
		});

		var plot = $.plot("#placeholder", [ parseData() ], {
			series: {
				shadowSize: 0	// Drawing is faster without shadows
			},
			yaxis: {
				min: 0,
				max: 1000
			},
			xaxis: { mode: "time",minTickSize: [1, "hour"] },
			clickable:true,hoverable: true
		});
		/*
		function update() {

			plot.setData([parseData()]);

			// Since the axes don't change, we don't need to call plot.setupGrid()

			plot.draw();
			setTimeout(update, updateInterval);
		}

		update();
		*/
		// Add the Flot version string to the footer

		$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
	});

								
						},

        				error : function(jqXHR, textStatus,
        						errorThrown) {
        					console.log("Something really bad happened "
        							+ textStatus);
        				},
        				}); 
	
}





// heart rate graph
		
function loadHeart(){
		var sendData = {
			userkey: "57843c5dfef20652062e1dca"	
		};
		sendData = JSON.stringify(sendData);
		console.log(sendData);
	
 $.ajax({
        				url: serverURL+'getAllHeart',
						contentType: "application/json",
        				type: 'POST',
						data: sendData,
						success: function (result) {							
								console.log(result);
	$(function() {
		// We use an inline data source in the example, usually data would
		// be fetched from a server
		var data = [],
			totalPoints = 365;
		function parseData() {
			if (data.length > 0)
				data = data.slice(1);
			// Do a random walk
			var z = 0;			
			while ((data.length < totalPoints) && (data.length < result.length )) {
				//console.log(result[z]['heartrate']);
				data.push(result[z]['heartRate']);
				z = z + 1;
			}
			// Zip the generated y values with the x values            
			var res = [];
			for (var i = 0; i < data.length; ++i) {
				var d = Date.parse(result[i]['timeStamp']);
				console.log(result[i]['timeStamp']);
				res.push([d, data[i]]);
			}
			return res;
		}
		// Set up the control widget
		var updateInterval = 10000;
		$("#updateInterval").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1) {
					updateInterval = 1;
				} else if (updateInterval > 10000) {
					updateInterval = 10000;
				}
				$(this).val("" + updateInterval);
			}
		});

		var plot = $.plot("#placeholder", [parseData()], {
			series: {
				shadowSize: 0	// Drawing is faster without shadows
			},
			yaxis: {
        },
        xaxis: { mode: "time",minTickSize: [1, "hour"] },
        clickable:true,hoverable: true
		});
		/*
		function update() {
			plot.setData([parseData()]);
			// Since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			setTimeout(update, 100000);
		}
		update();*/
		// Add the Flot version string to the footer
		$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
	});								
						},
        				error : function(jqXHR, textStatus,
        						errorThrown) {
        					console.log("Something really bad happened "
        							+ textStatus);
        				},
        				}); 
	
}


function loadSteps(){
	var sendData = {
			userkey: "57843c5dfef20652062e1dca"	
		};
		sendData = JSON.stringify(sendData);
		console.log(sendData);
 $.ajax({
        				url: serverURL+'getAllSteps',
						contentType: "application/json",
        				type: 'POST',
						data: sendData,
						success: function (result) {							
								console.log(result);

	$(function() {
		// We use an inline data source in the example, usually data would
		// be fetched from a server
		var data = [],
			totalPoints = 365;
		function parseData() {
			if (data.length > 0)
				data = data.slice(1);
			// Do a random walk
			var z = 0;			
			while ((data.length < totalPoints) && (data.length < result.length )) {
				console.log(result[z]['count']);
				data.push(result[z]['count']);
				z = z + 1;
			}
			// Zip the generated y values with the x values            
			var res = [];
			for (var i = 0; i < data.length; ++i) {
				var d = Date.parse(result[i]['timeStamp']);
				console.log(result[i]['timeStamp']);
				res.push([d, data[i]]);
			}
			return res;
		}
		// Set up the control widget
		var updateInterval = 10000;
		$("#updateInterval").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1) {
					updateInterval = 1;
				} else if (updateInterval > 10000) {
					updateInterval = 10000;
				}
				$(this).val("" + updateInterval);
			}
		});

		var plot = $.plot("#placeholder", [parseData()], {
			series: {
				shadowSize: 0	// Drawing is faster without shadows
			},
			yaxis: {
        },
        xaxis: { mode: "time",minTickSize: [1, "hour"] },
        clickable:true,hoverable: true
		});

			
		/*
		function update() {
			plot.setData([parseData()]);
			// Since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			setTimeout(update, 100000);
		}
		update();*/
		// Add the Flot version string to the footer
		$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
	});						





								
						},
        				error : function(jqXHR, textStatus,
        						errorThrown) {
        					console.log("Something really bad happened "
        							+ textStatus);
        				},
        				}); 
	
}


function loadDistance(){
	var sendData = {
			userkey: "57843c5dfef20652062e1dca"	
		};
		sendData = JSON.stringify(sendData);
		console.log(sendData);
 $.ajax({
        				url: serverURL+'getAllDistance',
						contentType: "application/json",
        				type: 'POST',
						data: sendData,
						success: function (result) {							
								console.log(result);
	$(function() {
		// We use an inline data source in the example, usually data would
		// be fetched from a server
		var data = [],
			totalPoints = 365;
		function parseData() {
			if (data.length > 0)
				data = data.slice(1);
			// Do a random walk
			var z = 0;			
			while ((data.length < totalPoints) && (data.length < result.length )) {
				
				data.push(result[z]['distance']);
				z = z + 1;
			}
			// Zip the generated y values with the x values            
			var res = [];
			for (var i = 0; i < data.length; ++i) {
				var d = Date.parse(result[i]['timeStamp']);
				console.log(result[i]['timeStamp']);
				res.push([d, data[i]]);
			}
			return res;
		}
		// Set up the control widget
		var updateInterval = 10000;
		$("#updateInterval").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1) {
					updateInterval = 1;
				} else if (updateInterval > 10000) {
					updateInterval = 10000;
				}
				$(this).val("" + updateInterval);
			}
		});

		var plot = $.plot("#placeholder", [parseData()], {
			series: {
				shadowSize: 0	// Drawing is faster without shadows
			},
			yaxis: {
        },
        xaxis: { mode: "time",minTickSize: [1, "hour"] },
        clickable:true,hoverable: true
		});
		/*
		function update() {
			plot.setData([parseData()]);
			// Since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			setTimeout(update, 100000);
		}
		update();*/
		// Add the Flot version string to the footer
		$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
	});								
						},
        				error : function(jqXHR, textStatus,
        						errorThrown) {
        					console.log("Something really bad happened "
        							+ textStatus);
        				},
        				}); 
	
}
