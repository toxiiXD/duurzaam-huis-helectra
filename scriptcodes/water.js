let water = 0;

function updateWater() {

    const increment = Math.random() * (6 - 1) + 0.1;
    water += increment;

    const element = document.getElementById("water-consumed");
    if (element) {
        element.innerText = water.toFixed(2) + " L verbruikt";
    }
}

updateWater();

setInterval(updateWater,7000);