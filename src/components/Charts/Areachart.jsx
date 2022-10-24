import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";

export default function Areachart() {
  const [data] = useState({
    options: {
      chart: {
        id: "basic-bar",

        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: false,
            selection: true,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false | '<img src="/static/icons/reset.png" width="20">',
            customIcons: [],
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ",",
              headerCategory: "category",
              headerValue: "value",
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString();
              },
            },
            // svg: {
            //   filename: undefined,
            // },
            png: {
              filename: undefined,
            },
          },
          autoSelected: "zoom",
        },
      },

      stroke: {
        width: 1,
      },

      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
    },
    series: [
      {
        name: "products sold",
        data: [15000, 8000, 10000, 15000, 7000, 20000],
      },
      {
        name: "total views",
        data: [20000, 5000, 10000, 5000, 10000, 14000],
      },
    ],
  });

  return (
    <div className="Areachart">
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        width={377}
      />
    </div>
  );
}
