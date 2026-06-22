let energy = 0;

function updateEnergy() {

    const increment = Math.random() * (0.10 - 0.01) + 0.01;
    energy += increment;

    const element = document.getElementById("energy-consumed");
    if (element) {
        element.innerText = energy.toFixed(2) + " kWh verbruikt";
    }
}

updateEnergy();

setInterval(updateEnergy, 3000);
