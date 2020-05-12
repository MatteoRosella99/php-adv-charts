$(document).ready(function () {
  var ctx = document.getElementById('line').getContext('2d');
  $.ajax({
    url: 'server.php',
    method: 'GET',
    success: function success(data) {
      var mesi = data.mesi;
      var dati = data.data;
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: mesi,
              datasets: [{
                  label: '# of Votes',
                  data: dati,
                  backgroundColor: [
                      'rgba(219, 193, 193, 0.8)',
                  ],
                  borderColor: [
                      'rgba(0, 0, 0, 0.9)',
                      'rgba(0, 120, 92, 1)',
                      'rgba(0, 234, 255, 1)',
                      'rgba(99, 180, 255, 1)',
                      'rgba(77, 100, 189, 1)',
                      'rgba(255, 0, 0, 1)',
                      'rgba(255, 100, 43, 1)',
                      'rgba(193, 34, 214, 1)',
                      'rgba(141, 168, 240, 1)',
                      'rgba(145, 235, 169, 1)',
                      'rgba(242, 189, 232, 1)',
                      'rgba(40, 99, 20, 1)',
                  ],
                  borderWidth: 3
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
    },
    error: function error(err) {}
  });
})
