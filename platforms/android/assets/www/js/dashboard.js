

/*function loadCal(){
 $.ajax({
        				url: serverURL+'getAllCal',
						contentType: "application/json",
        				type: 'POST',
						data: '{"userkey":"anushree123@gmail.com"}',
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
				console.log(result[i]['time']);
				res.push([result[i]['time'], data[i]])
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
				max: 100
			},
			xaxis: {
				show: false
			}
		});

		function update() {

			plot.setData([parseData()]);

			// Since the axes don't change, we don't need to call plot.setupGrid()

			plot.draw();
			setTimeout(update, updateInterval);
		}

		update();

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
	
}*/

