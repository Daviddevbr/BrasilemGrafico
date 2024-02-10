export function graficoFaxaEtaria() {


    return am4core.ready(function() {
        
        //am4core.useTheme(am4themes_animated);
        // Themes end
    
        var mainContainer = am4core.create("graficoFaxaEtaria", am4core.Container);
        mainContainer.width = am4core.percent(100);
        mainContainer.height = am4core.percent(100);
        mainContainer.layout = "horizontal";
    
        var usData = [
            {
                "age": "0 a 4 anos",
                "male": 6461689,
                "female": 6243171
            },
            {
                "age": "5 a 9 anos ",
                "male": 7011282,
                "female": 6738158
            },
            {
                "age": "10 a 14 anos",
                "male": 6682215,
                "female": 6992746
            },
            {
                "age": "15 a 19 anos",
                "male": 7317515,
                "female": 7058427
            },
            {
                "age": "20 a 24 anos",
                "male": 7699157,
                "female": 7767306
            },
            {
                "age": "25 a 29 anos",
                "male": 7627458,
                "female": 7842265
            },
            {
                "age": "30 a 34 anos",
                "male": 7537285,
                "female": 7935832
            },
            {
                "age": "35 a 39 anos",
                "male": 7827333,
                "female": 8345458
            },
            {
                "age": "40 a 44 anos",
                "male": 7781059,
                "female": 8291111
            },
            {
                "age": "45 a 49 anos",
                "male": 6549109,
                "female": 7091003
            },
            {
                "age": "50 a 54 anos",
                "male": 6014391,
                "female": 6584190
            },
            {
                "age": "55 a 59 anos",
                "male": 5419505,
                "female": 6149601
            },
            {
                "age": "60 a 64 anos",
                "male": 4605834,
                "female": 5338555
            },
            {
                "age": "65 a 69 anos",
                "male": 3588052,
                "female": 4288180
            },
            {
                "age": "70 a 74 anos",
                "male": 2615350,
                "female": 3243186
            },
            {
                "age": "75 a 79 anos",
                "male": 1657786,
                "female": 2189593
            },
            {
                "age": "80 a 84 anos",
                "male": 1009852,
                "female": 1465178
            },
            {
                "age": "85 a 89 anos",
                "male": 493649,
                "female": 835554
            },
            {
                "age": "90 a 94 anos",
                "male": 194341,
                "female": 385388
            },
            {
                "age": "95 a 99 anos",
                "male": 50319,
                "female": 114859
            },
            {
                "age": "100 anos ou mais",
                "male": 10570,
                "female": 27244
            },
           
        ];
    
        var maleChart = mainContainer.createChild(am4charts.XYChart);
        maleChart.paddingRight = 0;
        maleChart.data = JSON.parse(JSON.stringify(usData));
    
        // Create axes
        var maleCategoryAxis = maleChart.yAxes.push(new am4charts.CategoryAxis());
        maleCategoryAxis.dataFields.category = "age";
        maleCategoryAxis.renderer.grid.template.location = 0;
        //maleCategoryAxis.renderer.inversed = true;
        maleCategoryAxis.renderer.minGridDistance = 15;
    
        var maleValueAxis = maleChart.xAxes.push(new am4charts.ValueAxis());
        maleValueAxis.renderer.inversed = true;
        maleValueAxis.min = 0;
        maleValueAxis.max = 10;
        maleValueAxis.strictMinMax = true;
    
        maleValueAxis.numberFormatter = new am4core.NumberFormatter();
        maleValueAxis.numberFormatter.numberFormat = "#.#'%'";
    
        // Create series
        var maleSeries = maleChart.series.push(new am4charts.ColumnSeries());
        maleSeries.dataFields.valueX = "male";
        maleSeries.dataFields.valueXShow = "percent";
        maleSeries.calculatePercent = true;
        maleSeries.dataFields.categoryY = "age";
        maleSeries.interpolationDuration = 1000;
        maleSeries.columns.template.tooltipText = "Males, age{categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
        //maleSeries.sequencedInterpolation = true;
    
    
        var femaleChart = mainContainer.createChild(am4charts.XYChart);
        femaleChart.paddingLeft = 0;
        femaleChart.data = JSON.parse(JSON.stringify(usData));
    
        // Create axes
        var femaleCategoryAxis = femaleChart.yAxes.push(new am4charts.CategoryAxis());
        femaleCategoryAxis.renderer.opposite = true;
        femaleCategoryAxis.dataFields.category = "age";
        femaleCategoryAxis.renderer.grid.template.location = 0;
        femaleCategoryAxis.renderer.minGridDistance = 15;
    
        var femaleValueAxis = femaleChart.xAxes.push(new am4charts.ValueAxis());
        femaleValueAxis.min = 0;
        femaleValueAxis.max = 10;
        femaleValueAxis.strictMinMax = true;
        femaleValueAxis.numberFormatter = new am4core.NumberFormatter();
        femaleValueAxis.numberFormatter.numberFormat = "#.#'%'";
        femaleValueAxis.renderer.minLabelPosition = 0.01;
    
        // Create series
        var femaleSeries = femaleChart.series.push(new am4charts.ColumnSeries());
        femaleSeries.dataFields.valueX = "female";
        femaleSeries.dataFields.valueXShow = "percent";
        femaleSeries.calculatePercent = true;
        femaleSeries.fill = femaleChart.colors.getIndex(4);
        femaleSeries.stroke = femaleSeries.fill;
        //femaleSeries.sequencedInterpolation = true;
        femaleSeries.columns.template.tooltipText = "Females, age{categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
        femaleSeries.dataFields.categoryY = "age";
        femaleSeries.interpolationDuration = 1000;
    })
    
 

}
