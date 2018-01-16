
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["html", "nog te leren"],
      datasets: [
        {
          label: "HTML",
          backgroundColor: ["#344d5b", "rgb(173, 200, 195)",],
          data: [80,20,]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'HTML'
      }
    }
});


new Chart(document.getElementById("doughnut-chart2"), {
    type: 'doughnut',
    data: {
      labels: ["css", "nog te leren"],
      datasets: [
        {
          label: "Css",
          backgroundColor: ["#344d5b", "rgb(173, 200, 195)",],
          data: [80,20,]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Css'
      }
    }
});


new Chart(document.getElementById("doughnut-chart3"), {
    type: 'doughnut',
    data: {
      labels: ["Javascript", "nog te leren"],
      datasets: [
        {
          label: " javascript",
          backgroundColor: ["#344d5b", "rgb(173, 200, 195)",],
          data: [60,40,]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Javascript'
      }
    }
});
