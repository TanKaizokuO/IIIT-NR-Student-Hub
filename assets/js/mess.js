document.addEventListener("DOMContentLoaded", () => {
    fetchAverageRatings();
});

async function fetchAverageRatings() {
    const meals = ["Breakfast","Lunch","Snacks","Dinner"].map(x=>x.toLocaleLowerCase())
    fetch(`https://backendimg.onrender.com/average_ratings`)
    .then(x => x.json())
    .then(y => {
        console.log(y)
        meals.forEach(meal=>{ 
        document.getElementById(`${meal}-ratings`).innerHTML = "&#11088; " + (y.average_ratings[meal] ?? "No Rating");   
        })
    });
}

function displayAverageRatings(data) {
    // Clear existing entries
    document.getElementById("breakfast-ratings").innerHTML = "";
    document.getElementById("lunch-ratings").innerHTML = "";
    document.getElementById("dinner-ratings").innerHTML = "";
    document.getElementById("snack-ratings").innerHTML = "";

    data.forEach(rating => {
        const listItem = document.createElement("li");
        listItem.textContent = `${rating._id}: ${rating.average_rating.toFixed(2)}`;

        // Categorize by meal type
        if (rating._id.toLowerCase() === "breakfast") {
            document.getElementById("breakfast-ratings").appendChild(listItem);
        } else if (rating._id.toLowerCase() === "lunch") {
            document.getElementById("lunch-ratings").appendChild(listItem);
        } else if (rating._id.toLowerCase() === "dinner") {
            document.getElementById("dinner-ratings").appendChild(listItem);
        } else if (rating._id.toLowerCase() === "snacks") {
            document.getElementById("snack-ratings").appendChild(listItem);
        }
    });
}
