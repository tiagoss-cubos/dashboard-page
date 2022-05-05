// Gráficos

const chart = document.querySelector(".chart").getContext("2d");
const labels = [
  "06/10/2021",
  "07/10/2021",
  "08/10/2021",
  "09/10/2021",
  "10/10/2021",
  "11/10/2021",
  "12/10/2021",
];

const data = {
  labels,
  datasets: [
    {
      label: "Estornado",
      backgroundColor: "#425DC7",
      borderColor: "#425DC7",
      data: [0, 70, 30, 30, 60, 30, 30],
    },
    {
      label: "Cancelado",
      backgroundColor: "#F03460",
      borderColor: "#F03460",
      data: [0, 20, 0, 40, 0, 0, 40, 50],
    },
    {
      label: "Não Pago",
      backgroundColor: "#FFBE00",
      borderColor: "#FFBE00",
      data: [0, 0, 30, 45, 10, 40, 60, 60],
    },
    {
      label: "Pago",
      backgroundColor: "#158F2E",
      borderColor: "#158F2E",
      data: [0, 70, 70, 130, 60, 190, 190],
    },
  ],
};

const config = {
  type: "line",
  data,
  options: {
    responsive: true,
    radius: 2,
    tension: 0.2,
    borderWidth: 2,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "start",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 6,
          padding: 32,
          textAlign: "center",
        },
      },
    },
    scale: {
      y: {
        type: "linear",
        min: 0,
        max: 200,
      },
    },
  },
};

const myChart = new Chart(chart, config);
