import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";

export default function DonutChart() {
  const [data] = useState({
    options: {
      dataLabels: {
        enabled: false,
      },
      labels: ["france", "italy", "japan", "canada"],

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 280,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      responsive: [
        {
          breakpoint: 1440,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],

      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                // showAlways:true,
                fontSize: 15,
                color: "#4D4F5C",
              },
            },
          },
        },
      },
      // Chart: {
      //   width: "100%",
      // },
    },

    series: [4260, 3970, 4260, 3270],

    type: "donut",
  });

  return (
    <div className="DonutChart">
      <Chart
        options={data.options}
        series={data.series}
        type="donut"
        // width={370}
      />
    </div>
  );
}
