﻿am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv1", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
        {
            type: "Local Government managed",
            value: 384,
            "color": am4core.color("#001858")
        },
        {
            type: "State/Territory government schools",
            value: 237,
            "color": am4core.color("#8bd3dd")
        },
     
        {
            type: "Private unprofit",
            value: 1407,
            "color": am4core.color("#f582ae")
        }

    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;


    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "type";
    //series.ticks.template.disabled = true;

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;
    series.labels.template.text = "{value.percent.formatNumber('#.0')}%";

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;
    series.slices.template.propertyFields.fill = "color";
    chart.legend = new am4charts.Legend();


}); // end am4core.ready()


am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv3", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
        {
            type: "Local Government managed",
            value: 384,
            "color": am4core.color("#001858")
        },
        {
            type: "State/Territory government schools",
            value: 237,
            "color": am4core.color("#8bd3dd")
        },

        {
            type: "Private unprofit",
            value: 1407,
            "color": am4core.color("#f582ae")
        }

    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;


    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "type";
    //series.ticks.template.disabled = true;


    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;
    series.labels.template.text = "{value.percent.formatNumber('#.0')}%";

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;
    series.slices.template.propertyFields.fill = "color";
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
   


}); // end am4core.ready()