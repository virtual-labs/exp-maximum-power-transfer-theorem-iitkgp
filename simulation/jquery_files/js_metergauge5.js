
		$(document).ready(function(){
		   s5 = [0];
		   plot3 = $.jqplot('chart5',[s5],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 10,
					   intervals:[0, 2, 4, 6, 8, 10],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#66cc66']
				   }
			   }
		   });
		});
		function perform_meter5(){
		s5[0]=parseFloat(document.getElementById('v5').value);
		plot3 = $.jqplot('chart5',[s5],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 10,
					   intervals:[0, 2, 4, 6, 8, 10],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#66cc66']
				   }
			   }
		   });
		}
