export function graficoPopulacaoHistorico() {

    return am4core.ready(function () {

        //am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("graficoPopulacaoHistorico", am4charts.XYChart);

        // Export
        chart.exporting.menu = new am4core.ExportMenu();

        // Data for both series
        var data = [{
            "year": "1890",
            "income": 14333915,
            "expenses": 14333915
        }, {
            "year": "1900",
            "income": 17438434,
            "expenses": 17438434
        }, {
            "year": "1920",
            "income": 30635605,
            "expenses": 30635605
        }, {
            "year": "1940",
            "income": 41236315,
            "expenses": 41236315
        }, {
            "year": "1950",
            "income": 51944397,
            "expenses": 51944397,
            
        },
        {
            "year": "1960",
            "income": 70992343,
            "expenses": 70992343,
           
        }, 
         {
            "year": "1970",
            "income": 94508583,
            "expenses":94508583,
            
        },
        {
            "year": "1980",
            "income": 121150573,
            "expenses": 121150573,
            
        },
        {
            "year": "1991",
            "income": 146917459,
            "expenses": 146917459,
            
        },
        {
            "year": "2000",
            "income": 169872856,
            "expenses": 169872856,
            
        },
        {
            "year": "2010",
            "income": 190755799,
            "expenses": 190755799,
            
        },
        {
            "year": "2022",
            "income": 203080756,
            "expenses": 203080756,
           
            
        }];

        /* Create axes */
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.minGridDistance = 30;

        /* Create value axis */
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        /* Create series */
        var columnSeries = chart.series.push(new am4charts.ColumnSeries());
        columnSeries.name = "Income";
        columnSeries.dataFields.valueY = "income";
        columnSeries.dataFields.categoryX = "year";

        columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
        columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
        columnSeries.columns.template.propertyFields.stroke = "stroke";
        columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
        columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
        columnSeries.tooltip.label.textAlign = "middle";

        var lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.name = "Expenses";
        lineSeries.dataFields.valueY = "expenses";
        lineSeries.dataFields.categoryX = "year";

        lineSeries.stroke = am4core.color("#fdd400");
        lineSeries.strokeWidth = 3;
        lineSeries.propertyFields.strokeDasharray = "lineDash";
        lineSeries.tooltip.label.textAlign = "middle";

        var bullet = lineSeries.bullets.push(new am4charts.Bullet());
        bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
        bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
        var circle = bullet.createChild(am4core.Circle);
        circle.radius = 4;
        circle.fill = am4core.color("#fff");
        circle.strokeWidth = 3;

        chart.data = data;

    })



}
