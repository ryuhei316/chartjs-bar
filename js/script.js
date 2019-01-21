const ctx = document.getElementById("myChart").getContext('2d');
const ctx2 = document.getElementById("myChart2").getContext('2d');
// const ctx3 = document.getElementById("myChart3").getContext("2d");
ctx.canvas.height = 140;
ctx2.canvas.height = 140;
// ctx3.canvas.height = 140;

const myChart = new Chart(ctx, {
  type: "bar",
  plugins: [ChartDataLabels],
  data: {
    labels: ["2018/10", "2018/11", "2018/12", "3ヶ月平均"],
    labelsData: ["270GB", "180GB", "160GB", "280GB"],
    datasets: [
      {
        data: [2, 5, 20, 9],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7",
          "rgba(54, 162, 235, 0.7)",
          "rgba(54, 162, 235, 0.7",
          "rgba(54, 162, 235, 0.7"
        ],
      },
      {
        data: [10, 20, 10, 13],
        backgroundColor: ["lightblue", "lightblue", "lightblue", "lightblue"]
      },
      // {
      //   data: [14, 27, 32, 24],
      //   backgroundColor: ["green"],
      //   hoverBackgroundColor: ["green"],
      //   type: "line",
      //   lineTension: 0,
      //   fill: false,
      //   backgroundColor: "green",
      //   borderColor: "green"
      // }
    ]
  },
  options: {
    responsive: true,
    hover: {
      mode: null
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            beginAtZero: true,
            max: 40,
            stepSize: 10,
            autoSkip: true,
            display: false
          },
          scaleLabel: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          stacked: true,
          categoryPercentage: 0.6,
          barPercentage: 0.8,
          gridLines: {
            display: false,
            lineWidth: 2
          },
          ticks: {
            autoSkip: false
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        align: "center",
        anchor: "center",
        color: "black",
        // color: function (context) {
        //   return context.dataset.backgroundColor;
        // },
        font: function(context) {
          var w = context.chart.width;
          return {
            size: w < 512 ? 12 : 14
          };
        },
        formatter: function(value) {
          return value + "分";
        }
      }
    }
  }
});

// const myChart3 = new Chart(ctx3, {
//   type: "bar",
//   plugins: [ChartDataLabels],
//   data: {
//     labels: ["3ヶ月平均"],
//     datasets: [
//       {
//         data: [9],
//         backgroundColor: [
//           "rgba(54, 162, 235, 0.7)",
//         ],
//       },
//       {
//         data: [13],
//         backgroundColor: ["lightblue"],
//       }
//     ]
//   },
//   options: {
//     responsive: true,
//     hover: {
//       mode: null
//     },
//     legend: {
//       display: false
//     },
//     tooltips: {
//       enabled: false
//     },
//     scales: {
//       yAxes: [
//         {
//           stacked: true,
//           gridLines: {
//             display: false,
//             drawBorder: false
//           },
//           ticks: {
//             beginAtZero: true,
//             max: 40,
//             stepSize: 10,
//             autoSkip: true,
//             display: false
//           },
//           scaleLabel: {
//             display: false
//           }
//         }
//       ],
//       xAxes: [
//         {
//           stacked: true,
//           categoryPercentage: 0.6,
//           barPercentage: 0.8,
//           gridLines: {
//             display: false
//           },
//           ticks: {
//             autoSkip: false
//           }
//         }
//       ]
//     },
//     plugins: {
//       datalabels: {
//         align: "center",
//         anchor: "center",
//         color: "black",
//         // color: function (context) {
//         //   return context.dataset.backgroundColor;
//         // },
//         font: function (context) {
//           var w = context.chart.width;
//           return {
//             size: w < 512 ? 12 : 14
//           };
//         },
//         formatter: function (value) {
//           return value + "分";
//         }
//       }
//     }
//   }
// });

// myChart2 test
const myChart2 = new Chart(ctx2, {
  type: "bar",
  plugins: [ChartDataLabels],
  data: {
    labels: ["2018/10", "2018/11", "2018/12", "3ヶ月平均"],
    labelsData: ["270GB", "180GB", "160GB", "280GB"],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ["lightblue", "lightblue", "lightblue", "lightblue"],
      },
      {
        data: [1270, 180, 160, 280],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)"
        ],
        datalabels: {
          display: true
        },
      }
    ]
  },
  options: {
    responsive: true,
    hover: {
      mode: null
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            borderDash: [8, 4]
          },
          ticks: {
            beginAtZero: true,
            // max: 300,
            // stepSize: 350,
            autoSkip: true,
            callback: function(value) {
              return value + "G";
            },
          },
          scaleLabel: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          categoryPercentage: 0.5,
          barPercentage: 1.5,
          gridLines: {
            display: false,
            lineWidth: 2
          },
          ticks: {
            autoSkip: false,
            fontStyle: 'bold',
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        display: false,
        align: "end",
        anchor: "end",
        color: "black",
        font: function(context) {
          var w = context.chart.width;
          return {
            size: w < 512 ? 12 : 14
          };
        },
        formatter: function(value, context) {
          return context.chart.data.labelsData[context.dataIndex];
        },
      }
    }
  }
});