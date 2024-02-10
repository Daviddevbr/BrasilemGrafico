
export function graficoCor(){

    return am4core.ready(function() {
        
        //am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("graficoCor", am4charts.PieChart);
    
    // Add data
    chart.data = [ {
      "population": "Branca",
      "litres": 88252121
    }, {
      "population": "Parda",
      "litres": 92083286
    }, {
      "population": "Preta",
      "litres": 20656458
    }, {
      "population": "Amarela",
      "litres": 850130
    }, {
      "population": "Indígena",
      "litres": 1227642
    }, 
    ];
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category ="population";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    chart.hiddenState.properties.radius = am4core.percent(0);
    })

    
    

}
