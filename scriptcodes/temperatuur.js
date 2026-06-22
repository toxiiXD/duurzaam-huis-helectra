function updateTemperature() {
    const input = document.getElementById('tempInput').value;
    let temp = parseFloat(input);
    if (temp < -10) temp = -10;
    if (temp > 50) temp = 50;

    const percentage = ((temp + 10) / 60) * 100;
}