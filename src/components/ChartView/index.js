import React from 'react';
import Chart from "react-apexcharts";
import download from '../../images/download.svg';
import './style.css';

export default props => {
  const options = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'number',
      categories: props.data.labels,
    },
    yaxis: {
      show: false
    },
    legend: {
      show: false
    },
    colors: ['#f24750', '#4df1a1'],
  };

  const series = [];
  props.data.datasets.forEach(set => {
    series.push({ data: set.data });
  });

  const selectedMonthStyle = {
    padding: 8,
    backgroundColor: '#dfe7f5',
    borderRadius: '6px',
    color: '#0047cc',
    fontWeight: 800,
  }
  return (
    <div>
      <div className="timeline">
        <div className="flex-container">
          <div style={{ flexGrow: 2 }}>
            <div className="dropdown">
              <span className="label">Monthly</span>
              <img style={{ height: '8px', width: '10px' }} src={download} alt="arrow" />
            </div>
          </div>
          {props.months.map((month, index) =>
            <div className="month">
              <span style={index === 0 ? selectedMonthStyle : null}>{month}</span>
            </div>
          )}
        </div>
      </div>
      <div className="chart">
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
        />
      </div>
    </div>
  )
} 