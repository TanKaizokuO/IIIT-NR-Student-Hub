document.addEventListener("DOMContentLoaded", () => {
    fetchAverageRatings();
});

async function fetchAverageRatings() {
    try {
        const response = await fetch("https://backendimg.onrender.com/average_ratings"); // Adjust URL
        const data = await response.json();
        displayAverageRatings(data.average_ratings);
    } catch (error) {
        console.error("Error fetching average ratings:", error);
    }
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
