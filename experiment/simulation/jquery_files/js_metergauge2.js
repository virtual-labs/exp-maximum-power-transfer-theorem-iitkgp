
		$(document).ready(function(){
		   s2 = [0];
		   plot3 = $.jqplot('chart2',[s2],{
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
		function perform_meter2(){
		s2[0]=parseFloat(document.getElementById('v2').value);
		plot3 = $.jqplot('chart2',[s2],{
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
