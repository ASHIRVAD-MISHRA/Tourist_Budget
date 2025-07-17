const placesData = {
  "Agra": { food: 800, stay: 1500, travel: 1200 },
  "Goa": { food: 1000, stay: 2000, travel: 3000 },
  "Manali": { food: 900, stay: 1800, travel: 2500 },
  "Jaipur": { food: 850, stay: 1600, travel: 1400 },
  "Kolkata": { food: 750, stay: 1400, travel: 1300 },
  "Kerala": { food: 950, stay: 2200, travel: 2800 },
  "Delhi": { food: 700, stay: 1200, travel: 1000 },
  "Shimla": { food: 800, stay: 1700, travel: 2200 }
};

function calculateBudget() {
  const place = document.getElementById("place").value;
  const days = parseInt(document.getElementById("days").value);

  const { food, stay, travel } = placesData[place];
  const perDay = food + stay;
  const total = perDay * days + travel;

  const resultHTML = `
    <p><strong>Destination:</strong> ${place}</p>
    <p><strong>Travel Cost:</strong> ₹${travel}</p>
    <p><strong>Daily Cost (Food + Stay):</strong> ₹${perDay}</p>
    <p><strong>Total Days:</strong> ${days}</p>
    <p><strong style='color: green;'>Estimated Total Budget: ₹${total}</strong></p>
  `;

  document.getElementById("result").innerHTML = resultHTML;
  document.getElementById("result").style.display = "block";

  // Show map
  document.getElementById("map").src = `https://www.google.com/maps?q=${place}&output=embed`;
  document.getElementById("map").style.display = "block";

  // Show buttons
  document.getElementById("hotelBtn").style.display = "inline-block";
  document.getElementById("printBtn").style.display = "inline-block";
}

function searchHotels() {
  const place = document.getElementById("place").value;
  window.open(`https://www.google.com/search?q=hotels+in+${place}`, '_blank');
}
