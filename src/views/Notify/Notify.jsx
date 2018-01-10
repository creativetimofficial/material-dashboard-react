import React from 'react';
// import {
//     Card, CardHeader, CardContent, Grid, Snackbar, SnackbarContent, IconButton, Typography, Button
// } from 'material-ui';
import ChartistGraph from 'react-chartist';
import {
    Close, AddAlert
} from 'material-ui-icons';
var Chartist = require('chartist');
var delays = 80, durations = 500;
const usersBehaviorChart = {
    data: {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        series: [
            [287, 385, 490, 492, 554, 586, 698, 695, 752]
        ]
    },
    options: {
        low: 0,
        high: 800,
        chartPadding: 0,
        showArea: true,
        height: "245px",
        axisX: {
            showGrid: true,
        },
        axisY: {
            showGrid: true,
        },
        lineSmooth: Chartist.Interpolation.simple({
            divisor: 6
        }),
        showLine: false,
        showPoint: true,
        fullWidth: true
    },
    responsiveOptions: [
        ['screen and (max-width: 640px)', {
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ],
    // for animation
    animation : {
        "draw" : function(data) {
            if(data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            } else if(data.type === 'point') {
                data.element.animate({
                    opacity: {
                        begin: (data.index + 1) * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        }
    }
}



var simpleLineChartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}


class Notifications extends React.Component{
    render(){
        return (
            // <ChartistGraph
            //     className="ct-chart"
            //     data={usersBehaviorChart.data}
            //     type="Line"
            //     options={usersBehaviorChart.options}
            //     responsiveOptions={usersBehaviorChart.responsiveOptions}
            //     listener={
            //         usersBehaviorChart.animation
            //     }
            // />
            <ChartistGraph data={simpleLineChartData} type={'Line'} />
        );
    }
}

export default Notifications;
