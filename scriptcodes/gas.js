let gas = 0;

function updateGas() {

    const increment = Math.random() * (0.10 - 0.01) + 0.01;
    gas += increment;

    const element = document.getElementById("gas-consumed");
    if (element) {
        element.innerText = gas.toFixed(2) + " m³ verbruikt";
    }
}

updateGas();

setInterval(updateGas, 3000);