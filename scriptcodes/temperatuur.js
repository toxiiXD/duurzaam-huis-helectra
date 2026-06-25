document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('temperatuurChart');
    if (!ctx) return;

    const chartData = {
        labels: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
        datasets: [{
            label: 'Temperatuur (°C)',
            backgroundColor: 'rgba(86, 103, 255, 0.4)',
            borderColor: 'rgb(64, 74, 255)',
            pointBackgroundColor: 'rgb(28, 17, 107)',
            pointBorderColor: '#fff',
            data: [3.4, 4.2, 5.1, 4.8, 5.4, 6.0, 5.7],
            tension: 0.4,
            fill: true,
            borderWidth: 2
        }]
    };

    const config = {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Temperatuur per dag'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Dag van de week'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Temperatuur (°C)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 8
                }
            }
        }
    };

    new Chart(ctx, config);
});