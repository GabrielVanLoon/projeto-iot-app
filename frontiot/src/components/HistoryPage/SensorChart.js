import React from 'react';

import { Line } from 'react-chartjs-2';
// Chart.js Doc:  https://www.chartjs.org/docs/latest/getting-started/
// React Wrapper: https://github.com/reactchartjs/react-chartjs-2


function SensorChart(props){

    const chartData = {
        labels: props.dataset.labels,
        datasets: [
          { 
            // Color and Title Configuration
            label: props.dataset.title,
            
            fill: true,
            lineTension: 0.25,
            backgroundColor: 'rgba(75,192,192,0.6)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            
            // borderDash: [],
            // borderDashOffset: 0.0,
            // borderJoinStyle: 'miter',
    
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
    
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.dataset.data
          }
        ]
    };
    
    const chartOptions = {
        // title: {
        //     display: true,
        //     text: props.dataset.title,
        // },
        responsive: true
    }

    return (
        <Line width={props.width} height={props.height} 
            data={chartData} options={chartOptions}/>
    )
}

export default SensorChart;