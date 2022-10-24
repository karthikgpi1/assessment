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

      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                // showAlways:true,
                fontSize: 20,
                color: "#4D4F5C",
              },
            },
          },
        },
      },
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
        width={370}
      />
    </div>
  );
}
