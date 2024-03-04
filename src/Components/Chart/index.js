import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";

export default function Chart(props) {
  // console.log(props);
  const [state, setState] = useState({
    series: [
      {
        name: props.name,
        data: props.data,
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: localStorage.getItem("token") ? true : false,
          offsetX: -40,
          offsetY: 0,
          tools: {
            download: "<button class='btn btn-primary'>Unduh</button>",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: props.judul,
        align: "left",
        style: {
          fontSize: "40",
          marginBottom: "1.5rem",
        },
      },

      subtitle: {
        text: "Update every 1 minutes",
        align: "left",
        margin: 70,
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
        categories: props.data.map((item, index) => index + 1), // Assuming you want to use index-based labels
      },
    },
  });
  useEffect(() => {
    // Update the series data when props.data changes
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          name: props.name,
          data: props.data,
        },
      ],
    }));
  }, [props.data]);

  return (
    <div
      id="chart"
      style={{
        marginTop: "2rem",
      }}
    >
      <ApexCharts
        options={state.options}
        series={state.series}
        type="area"
        height={400}
        name={props.name}
        data={props.data}
        text={props.judul}
      />
    </div>
  );
}
