import React, { useState } from "react";
import ApexCharts from "react-apexcharts";

export default function Chart(props) {
  console.log(props);
  const [state, setState] = useState({
    series: [
      {
        name: props.name,
        data: props.data,
      },
    ],
    options: {
      chart: {
        height: 400,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Diagram Air",
        align: "left",
        style: {
          fontSize: "30",
        },
      },
      subtitle: {
        text: "Last Updated 1 minutes ago",
        align: "left",
        margin: 30,
        style: {
          fontSize: "15",
        },
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: props.data,
      },
    },
  });
  return (
    <div id="chart">
      <ApexCharts
        options={state.options}
        series={state.series}
        type="area"
        height={400}
        name={props.name}
        data={props.data}
      />
    </div>
  );
}