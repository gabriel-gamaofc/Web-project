document.addEventListener("DOMContentLoaded", function () {
    // Dados para os gráficos
    var barData = {
        labels: ['Semana 1 ', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Finanças',
            data: [30, 45, 22, 60, 54],
            backgroundColor: [
                'rgba(255, 99, 132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'

            ],
           
            borderWidth: 1
        }]
    };

    var pieData = {
        labels: ['Semana 1 ', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            data: [30, 45, 22, 60, 54],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ]
        }]
    };

    // Configuração do gráfico de barras
    var ctxBar = document.getElementById('barChart').getContext('2d');
    var barChart = new Chart(ctxBar, {
        type: 'bar',
        data: barData,
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

    // Configuração do gráfico de setores
    var ctxPie = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: pieData
    });
});
