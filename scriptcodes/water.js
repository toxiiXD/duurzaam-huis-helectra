let water = 0;

function updateWater() {

    const increment = Math.random() * (0.10 - 0.01) + 0.01;
    water += increment;

    const element = document.getElementById("water-consumed");
    if (element) {
        element.innerText = water.toFixed(2) + "liter verbruikt";
    }
}

updateWater();

setInterval(updateWater, 3000);