$(document).ready(function () {
  var ctx = document.getElementById('line').getContext('2d');
  var fetta = document.getElementById('pie').getContext('2d');
  var ctx2 = document.getElementById('grafic').getContext('2d');

  //Funzione per assumere parametro
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
      }
  };
  var level = getUrlParameter('level');
  $.ajax({
    url: 'server.php',
    method: 'GET',
    data : {
      level : level
    },
    success: function success(data) {
      console.log(data);
      var mesi = data.mesi;
      if ((data.get === "guest") || (data.get === "employee") || (data.get === "clevel")) {
        var myChart = new Chart(ctx, {
          type: data.type,
          data: {
            labels: mesi,
            datasets: [{
              label: 'Vendita',
              data: data.data,
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

      }
      if ((data.get === "employee") || (data.get === "clevel")) {
        var myChart2 = new Chart(fetta, {
          type: data.fba.type,
          data: {
            labels: data.fba.utenti,
            datasets: [{
              label: '# of Votes',
              data: data.fba.data,
              backgroundColor: [
                'rgba(9, 72, 173, 0.9)',
                'rgba(173, 9, 148, 0.9)',
                'rgba(9, 173, 80, 0.9)',
                'rgba(196, 51, 22, 0.9)',
              ],
              borderColor: [
                'rgba(0, 0, 0, 0.6)',
                'rgba(0, 0, 0, 0.6)',
                'rgba(0, 0, 0, 0.6)',
                'rgba(0, 0, 0, 0.6)',
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
      }
      if (data.get === "clevel") {
        var myChart3 = new Chart(ctx2, {
          type: data.te.type,
          data: {
            labels: data.mesi,
            datasets: [{
              label: data.te.team[0],
              data: data.te.resoconto[0],
              backgroundColor: [
                'rgba(237, 237, 237, 0.9)',
              ],
              borderColor: [
                'rgba(255, 0, 0, 0.6)',
              ],
              borderWidth: 5
            },
            {
            label: data.te.team[1],
            data: data.te.resoconto[1],
            backgroundColor: [
              'rgba(237, 237, 237, 0.9)',
            ],
            borderColor: [
              'rgba(0, 255, 85, 0.6)',
            ],
            borderWidth: 5
            },
            {
            label: data.te.team[2],
            data: data.te.resoconto[2],
            backgroundColor: [
              'rgba(237, 237, 237, 0.9)',
            ],
            borderColor: [
              'rgba(0, 55, 255, 0.6)',
            ],
            borderWidth: 5
            }],
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          },
        });
      }
    },
    error: function error(err) {}
  });
})
