
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
                    data: [[Date.UTC(2017, 9, 16, 20, 8), 255.0], [Date.UTC(2017, 10, 6, 23, 30), 260.0], [Date.UTC(2017, 10, 23, 9, 10), 260.0], [Date.UTC(2017, 10, 26, 11, 24), 265.0], [Date.UTC(2017, 10, 26, 11, 24), 265.0]]
                }]
            });
        });
    