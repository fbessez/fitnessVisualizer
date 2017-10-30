
        $(function () {
            $('#container').highcharts({
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Progress'
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: { // don't display the dummy year
                        month: '%e. %b',
                        year: '%b'
                    },
                    title: {
                        text: 'Date'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Weight (lb)'
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true,
                        marker: {
                            enabled: true
                        }
                    }
                },
                series: [{
                    name: 'Fabien Bessez',
                    data: [[Date.UTC(2017, 10, 16, 20, 8), 200.0], [Date.UTC(2017, 10, 18, 11, 53), 198.6], [Date.UTC(2017, 10, 30, 12, 8), 198.7]]
                }]
            });
        }); 
    