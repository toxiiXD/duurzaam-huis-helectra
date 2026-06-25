document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('zonnepanelenChart');
    if (!ctx) return;

    const chartData = {
        labels: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
        datasets: [{
            label: 'Zonnepanelen opbrengst (kWh)',
            backgroundColor: 'rgba(255, 205, 86, 0.4)',
            borderColor: 'rgba(255, 159, 64, 1)',
            pointBackgroundColor: 'rgba(255, 159, 64, 1)',
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
                    text: 'Zonnepanelen opbrengst per dag'
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
                        text: 'Verkocht'
                    },
                    suggestedMin: 0,
                    suggestedMax: 8
                }
            }
        }
    };

    new Chart(ctx, config);
});