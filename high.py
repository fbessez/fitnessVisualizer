from highcharts import Highchart
chart = Highchart()

chart.set_options('chart', {'inverted': True})

options = {
    'title': {
        'text': 'Atmosphere Temperature by Altitude'
    },
    'subtitle': {
        'text': 'According to the Standard Atmosphere Model'
    },
    'xAxis': {
        'reversed': False,
        'title': {
            'enabled': True,
            'text': 'Altitude'
        },
        'labels': {
            'formatter': 'function () {\
                return this.value + "km";\
            }'
        },
        'maxPadding': 0.05,
        'showLastLabel': True
    },
    'yAxis': {
        'title': {
            'text': 'Temperature'
        },
        'labels': {
            'formatter': "function () {\
                return this.value + '°';\
            }"
        },
        'lineWidth': 2
    },
    'legend': {
        'enabled': False
    },
    'tooltip': {
        'headerFormat': '<b>{series.name}</b><br/>',
        'pointFormat': '{point.x} km: {point.y}°C'
    }
}

chart.set_dict_options(options)
data =  [[0, 1], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1], 
[50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
chart.add_data_set(data, 'spline', 'Temperature', marker={'enabled': False}) 

chart.save_file()